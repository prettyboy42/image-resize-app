<template>
  <q-page padding>
    <div class="row no-wrap items-center">
      <div class="col-md-8 fixed-center shadow-24">
        <q-uploader
          accept=".jpg, .jpeg, .png, image/*"
          label="Upload images. Max upload size (5MB)"
          :factory="uploadFactoryFn"
          :max-file-size="5242880"
          @uploaded="onFinishedFn"
          multiple
          color="teal"
          flat
          bordered
          style="width: auto;"
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

              <q-btn v-if="scope.isUploading" icon="clear" @click="scope.abort" round dense flat>
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

                <q-item-section v-if="file.__img" thumbnail class="gt-xs">
                  <img :src="file.__img.src" />
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
      </div>
    </div>
    <!-- <q-card v-if="authenticated" bordered>
      <q-card-section>
        <div class="text-h6">Welcome to Administrator!</div>
        <div class="text-subtitle2">by TamND</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="alert alert-info alert-dismissible">
          <span
            v-if="username"
            v-text="$t('home.logged.message', { 'username': username})"
          >You are logged in as user "{{username}}. "</span>
          <span>
            &nbsp;
            <a href="#" @click="logout()">Sign out</a>
          </span>
        </div>
      </q-card-section>
    </q-card>

    <q-card v-if="!authenticated" bordered>
      <q-card-section>
        <span v-text="$t('global.messages.info.authenticated.prefix')">If you want to</span>
        <a
          class="alert-link"
          v-on:click="openLogin()"
          v-text="$t('global.messages.info.authenticated.link')"
        >sign in</a>
        <span v-html="$t('global.messages.info.authenticated.suffix')">
          , you can try the default accounts:
          <br />- Administrator (login="admin" and password="admin")
          <br />- User (login="user" and password="user").
        </span>
      </q-card-section>
    </q-card>

    <q-card v-if="!authenticated" bordered class="q-mt-md">
      <q-card-section>
        <span v-text="$t('global.messages.info.register.noaccount')">You don't have an account yet?</span>&nbsp;
        <router-link
          class="alert-link"
          to="/register"
          v-text="$t('global.messages.info.register.link')"
        >Register a new account</router-link>
      </q-card-section>
    </q-card>-->
  </q-page>
</template>

<style></style>

<script lang="ts">
import Vue from 'vue';
import { Component, Inject } from 'vue-property-decorator';
import LoginService from '../boot/services/login.service';
// import { resolve } from 'dns';

@Component({
  name: 'IndexPage'
})
export default class IndexPage extends Vue {
  @Inject('loginService')
  private loginService: () => LoginService;

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
        // url: 'http://10.30.22.210:9066/api/upload/file',
        url: '/upload',
        method: 'POST',
        headers: [
          {
            name: 'api-key',
            value: '63d701ba17aa6ea862d4a27bedc8fd6a'
          }
        ],
        fieldName: 'file'
      });
    });
    // .then(res => {
    //   console.log(res);
    // })
    // .catch(err => {
    //   console.log(err);
    // });
    return reqPromise;
  }

  public onFinishedFn(info: any): void {
    console.log(info.xhr);
    console.log(info.xhr.respone);
    console.log(info.xhr.responseText);
    console.log(info.xhr.responseType);
  }

  public get authenticated(): boolean {
    return this.$store.getters.authenticated;
  }

  public get username(): string {
    return this.$store.getters.account ? this.$store.getters.account.login : '';
  }
}
</script>
