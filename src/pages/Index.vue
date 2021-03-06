<template>
  <q-page padding>
    <div class="fixed-center justify-between shadow-24">
      <q-card style="min-width: 700px; min-height: 450px;">
        <q-card-section>
          <div class="text-h6">Image compress and resize</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-form>
            <div class="q-px-sm">Image quality: {{ imageQuality }} (0 to 100)</div>
            <q-slider v-model="imageQuality" :min="0" :max="100" label color="green" />

            <!-- <div class="q-gutter-sm">
              <q-checkbox v-model="reserveMetadata" label="Preserve metadata" color="teal" />
              <q-checkbox v-model="reserveOrientation" label="Auto orientation" color="orange" />
            </div>-->
            <!-- <div class="q-gutter-sm">
              <q-radio dense v-model="imageMode" val="scale" label="Scale" />
              <q-radio dense v-model="imageMode" val="fit" label="Fit" />
            </div>-->
            <div class="q-pa-sm">
              <q-option-group
                v-model="imageMode"
                :options="actionOptions"
                color="primary"
                inline
                dense
              />
            </div>
            <div class="q-pa-sm">
              <q-option-group
                v-model="otherChoices"
                :options="otherOptions"
                color="primary"
                inline
                dense
                type="checkbox"
              />
            </div>
            <q-uploader
              accept="image/jpeg, image/png"
              label="Upload images. Max upload size (5MB)"
              :factory="uploadFactoryFn"
              :max-file-size="5242880"
              @uploaded="onFinishedFn"
              @factory-failed="onFactoryFailedFn"
              @failed="onFailedFn"
              auto-upload
              flat
              square
              bordered
              no-thumbnails
              class="full-width"
              style="margin-top: 20px;"
            >
              <template v-slot:header="scope">
                <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
                  <q-btn
                    v-if="scope.queuedFiles.length > 0"
                    icon="clear_all"
                    @click="scope.removeQueuedFiles"
                    round
                    dense
                    flat
                  >
                    <q-tooltip>Clear All</q-tooltip>
                  </q-btn>
                  <q-btn
                    v-if="scope.uploadedFiles.length > 0"
                    icon="done_all"
                    @click="scope.removeUploadedFiles"
                    round
                    dense
                    flat
                  >
                    <q-tooltip>Remove Uploaded Files</q-tooltip>
                  </q-btn>
                  <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
                  <div class="col">
                    <div class="q-uploader__title">Upload your files</div>
                    <div
                      class="q-uploader__subtitle"
                    >{{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}</div>
                  </div>
                  <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
                    <q-uploader-add-trigger />
                    <q-tooltip>Pick Files</q-tooltip>
                  </q-btn>
                  <q-btn
                    v-if="scope.canUpload"
                    icon="cloud_upload"
                    @click="scope.upload"
                    round
                    dense
                    flat
                  >
                    <q-tooltip>Upload Files</q-tooltip>
                  </q-btn>

                  <q-btn
                    v-if="scope.isUploading"
                    icon="clear"
                    @click="scope.abort"
                    round
                    dense
                    flat
                  >
                    <q-tooltip>Abort Upload</q-tooltip>
                  </q-btn>
                </div>
              </template>
              <template v-slot:list="scope">
                <q-list separator>
                  <q-item v-for="file in scope.files" :key="file.name">
                    <q-item-section>
                      <q-item-label class="full-width ellipsis">{{ file.name }}</q-item-label>

                      <q-item-label caption>Status: {{ file.__status }}</q-item-label>

                      <q-item-label caption>{{ file.__sizeLabel }} / {{ file.__progressLabel }}</q-item-label>
                    </q-item-section>

                    <q-item-section v-if="file.__status === 'uploaded'">
                      <q-item-label class="full-width ellipsis">After resize</q-item-label>
                      <q-item-label caption>{{ getSizeLabelAfterResized(file.xhr) }}</q-item-label>
                      <q-item-label caption>
                        <a :href="getDownloadUrl(file.xhr)" download>download</a>
                      </q-item-label>
                    </q-item-section>

                    <q-item-section v-if="file.__status === 'uploaded'" thumbnail class="gt-xs">
                      <img :src="getUrlAfterResized(file.xhr)" />
                    </q-item-section>
                    <q-item-section top side>
                      <q-btn
                        class="gt-xs"
                        size="12px"
                        flat
                        dense
                        round
                        icon="delete"
                        @click="scope.removeFile(file)"
                      />
                    </q-item-section>
                  </q-item>
                </q-list>
              </template>
            </q-uploader>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style></style>

<script lang="ts">
import Vue from 'vue';
import { Component, Inject } from 'vue-property-decorator';
import LoginService from '../boot/services/login.service';
import { UPLOAD_IMAGE_URL, UPLOAD_AUTHEN_KEY } from '../constants';
// we import all of `date`
import { format } from 'quasar';
// destructuring to keep only what is needed
const { humanStorageSize } = format;

interface UploadItem {
  name: string;
  url: string;
  downloadUrl: string;
  size: number;
}
interface UploadResult {
  error: number;
  clientFileId: number;
  message: UploadItem[];
}

@Component({
  name: 'IndexPage'
})
export default class IndexPage extends Vue {
  @Inject('loginService')
  private loginService: () => LoginService;
  private retFiles: UploadResult[] = [];
  private reserveMetadata: boolean = false;
  private reserveOrientation: boolean = true;
  private imageQuality: number = 75;
  private imageWidth: number = 1;
  private imageMode: string = 'scale';
  private otherChoices: any[] = ['meta'];
  private actionOptions: any[] = [
    {
      label: 'Scale',
      value: 'scale'
    },
    {
      label: 'Fit',
      value: 'fit'
    }
  ];
  private otherOptions: any[] = [
    {
      label: 'Preserve metadata',
      value: 'meta'
    },
    {
      label: 'Auto orientation',
      value: 'orientation'
    }
  ];

  public openLogin(): void {
    this.$router.push('/login');
  }

  public logout(): void {
    this.loginService().logOut();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public uploadFactoryFn(files: any): any {
    const reqPromise = new Promise(resolve => {
      resolve({
        url: UPLOAD_IMAGE_URL,
        method: 'POST',
        withCredentials: true,
        headers: [
          {
            name: 'Authorization',
            value: 'Basic ' + btoa(UPLOAD_AUTHEN_KEY)
          }
        ],
        formFields: [
          {
            name: 'clientFileId',
            value: Date.now()
          },
          {
            name: 'imageQuality',
            value: this.imageQuality
          },
          {
            name: 'imageWidth',
            value: this.imageWidth
          },
          {
            name: 'keepMetaInfo',
            value: this.reserveMetadata
          },
          {
            name: 'enableAutoOrientation',
            value: this.reserveOrientation
          }
        ],
        fieldName: 'file'
      });
    });
    return reqPromise;
  }

  public onFinishedFn(info: any): void {
    // const ret: UploadResult = JSON.parse(info.xhr.responseText);
    // this.retFiles.push(ret);
  }
  public onFailedFn(info: any): void {
    console.log('failed: ' + info);
  }

  public onFactoryFailedFn(err: any, files: any): void {
    console.log('factory-failed: ' + err);
  }

  public getSizeLabel(size: number): string {
    return humanStorageSize(size);
  }

  public getSizeLabelAfterResized(xhr: XMLHttpRequest): string {
    const item: UploadItem = JSON.parse(xhr.responseText).message[0];
    return item.size ? this.getSizeLabel(item.size) : '';
  }

  public getUrlAfterResized(xhr: XMLHttpRequest): string {
    const item: UploadItem = JSON.parse(xhr.responseText).message[0];
    return item.url ? item.url : '';
  }

  public getDownloadUrl(xhr: XMLHttpRequest): string {
    const item: UploadItem = JSON.parse(xhr.responseText).message[0];
    return item.downloadUrl ? item.downloadUrl : '';
  }

  public get authenticated(): boolean {
    return this.$store.getters.authenticated;
  }

  public get username(): string {
    return this.$store.getters.account ? this.$store.getters.account.login : '';
  }
}
</script>
