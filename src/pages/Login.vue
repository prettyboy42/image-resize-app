<template>
  <q-page padding>
    <!-- content -->
    <div class="row no-wrap items-center">
      <div class="col-md-8 fixed-center shadow-24" style="max-width: 400px">
        <q-card>
          <q-card-section>
            <div class="text-h6" v-text="$t('login.title')" id="login-title">Registration</div>
          </q-card-section>
          <q-separator />
          <q-card-section v-if="authenticationError">
            <div
              class="alert alert-danger"
              role="alert"
              v-html="$t('login.messages.error.authentication')"
            >
              <strong>Failed to sign in!</strong> Please check your credentials and try again.
            </div>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <q-form ref="loginForm" @submit="doLogin()" @reset="onReset()" class="q-gutter-md">
              <q-input
                filled
                v-model="$v.username.$model"
                label="Your username *"
                hint="username"
                lbottom-slots
                :error="$v.username.$anyDirty && $v.username.$invalid"
              >
                <template v-slot:error>
                  <span
                    v-if="!$v.username.required"
                    v-text="$t('register.messages.validate.login.required')"
                  >Your username is required.</span>
                  <span
                    v-if="!$v.username.minLength"
                    v-text="$t('register.messages.validate.login.minlength')"
                  >Your username is required to be at least 1 character.</span>
                </template>
              </q-input>

              <q-input
                filled
                type="password"
                v-model="password"
                label="Your password *"
                lazy-rules
                :rules="[
          val => val !== null && val !== '' || 'Please type your password'
        ]"
              />

              <q-toggle v-model="rememberMe" label="I accept the license and terms" />

              <div>
                <q-btn label="Login" type="submit" color="primary" />
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                <span>or</span>
                <q-btn
                  label="Register"
                  type="button"
                  to="/register"
                  color="primary"
                  flat
                  class="q-ml-sm"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Inject } from 'vue-property-decorator';
import { Validate } from 'vuelidate-property-decorators';
import { axiosInstance } from '../boot/axios';
import AccountService from '../boot/services/account.service';
import { QVueGlobals } from 'quasar/dist/types/index';
import * as storageUtils from '../boot/services/storage.service';
import { required, minLength } from 'vuelidate/lib/validators';

declare module 'vue/types/vue' {
  interface Vue {
    $q: QVueGlobals;
  }
}

@Component({
  name: 'LoginDecorator'
})
export default class LoginDecorator extends Vue {
  @Validate({
    required,
    minLength: minLength(6)
  })
  public username: string | null = null;
  public password: string | null = null;
  public rememberMe: boolean = false;
  public authenticationError: boolean = false;
  public formHasError: boolean = false;

  @Inject('accountService')
  private accountService!: () => AccountService;

  public doLogin(): void {
    this.$v.$touch();
    if (this.$v.$invalid) {
      return;
    }

    const data = {
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe
    };
    axiosInstance
      .post('api/authenticate', data)
      .then(result => {
        const bearerToken = result.headers.authorization;
        if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
          const jwt = bearerToken.slice(7, bearerToken.length);
          storageUtils.saveToken(jwt, this.rememberMe);
        }
        this.authenticationError = false;
        this.accountService().retrieveAccount();
        this.$router.push('/');
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Login successully'
        });
      })
      .catch(() => {
        this.authenticationError = true;
      });
  }

  public onReset(): void {
    this.$v.$reset();
  }
}
</script>

<style>
</style>
