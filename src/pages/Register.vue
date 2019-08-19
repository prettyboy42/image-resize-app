<template>
  <q-page padding>
    <!-- content -->
    <div class="row no-wrap items-center">
      <div class="col-md-8 fixed-center shadow-24" style="max-width: 400px">
        <q-card>
          <q-card-section>
            <div class="text-h6" v-text="$t('register.title')" id="register-title">Registration</div>
          </q-card-section>
          <q-separator />
          <q-card-section v-if="success">
            <div class="alert alert-success" role="alert" v-html="$t('register.messages.success')">
              <strong>Registration saved!</strong> Please check your email for confirmation.
            </div>
          </q-card-section>
          <q-card-section v-if="error">
            <div
              class="alert alert-danger"
              role="alert"
              v-html="$t('register.messages.error.fail')"
            >
              <strong>Registration failed!</strong> Please try again later.
            </div>
          </q-card-section>
          <q-card-section v-if="errorUserExists">
            <div
              class="alert alert-danger"
              role="alert"
              v-html="$t('register.messages.error.userexists')"
            >
              <strong>Login name already registered!</strong> Please choose another one.
            </div>
          </q-card-section>
          <q-card-section v-if="errorEmailExists">
            <div
              class="alert alert-danger"
              role="alert"
              v-html="$t('register.messages.error.emailexists')"
            >
              <strong>Email is already in use!</strong> Please choose another one.
            </div>
          </q-card-section>
          <q-card-section v-if="doNotMatch">
            <div
              class="alert alert-danger"
              role="alert"
              v-text="$t('global.messages.error.dontmatch')"
            >The password and its confirmation do not match!</div>
          </q-card-section>
          <q-card-section class="q-pa-md">
            <q-form
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
              @submit.prevent="register()"
              v-if="!success"
              no-validate
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="$v.registerAccount.login.$model"
                label="Your username *"
                hint="Username must be required and maximum in 50 characters"
                bottom-slots
                :error="$v.registerAccount.login.$anyDirty && $v.registerAccount.login.$invalid"
              >
                <template v-slot:error>
                  <span
                    v-if="!$v.registerAccount.login.required"
                    v-text="$t('register.messages.validate.login.required')"
                  >Your username is required.</span>
                  <span
                    v-if="!$v.registerAccount.login.minLength"
                    v-text="$t('register.messages.validate.login.minlength')"
                  >Your username is required to be at least 1 character.</span>
                  <span
                    v-if="!$v.registerAccount.login.maxLength"
                    v-text="$t('register.messages.validate.login.maxlength')"
                  >Your username cannot be longer than 50 characters.</span>
                  <span
                    v-if="!$v.registerAccount.login.pattern"
                    v-text="$t('register.messages.validate.login.pattern')"
                  >Your username can only contain letters and digits.</span>
                </template>
              </q-input>
              <q-input
                filled
                type="email"
                v-model="$v.registerAccount.email.$model"
                label="Your email address *"
                hint="A valid email address"
                bottom-slots
                :error="$v.registerAccount.email.$anyDirty && $v.registerAccount.email.$invalid"
              >
                <template v-slot:error>
                  <span
                    v-if="!$v.registerAccount.email.required"
                    v-text="$t('global.messages.validate.email.required')"
                  >Your username is required.</span>
                  <span
                    v-if="!$v.registerAccount.email.minLength"
                    v-text="$t('global.messages.validate.email.minlength')"
                  >Your username is required to be at least 1 character.</span>
                  <span
                    v-if="!$v.registerAccount.email.maxLength"
                    v-text="$t('global.messages.validate.email.maxlength')"
                  >Your username cannot be longer than 50 characters.</span>
                </template>
              </q-input>
              <q-input
                filled
                type="password"
                v-model="$v.registerAccount.password.$model"
                label="Your password *"
                hint="Password include 6 characters at least"
                bottom-slots
                :error="$v.registerAccount.password.$anyDirty && $v.registerAccount.password.$invalid"
              >
                <template v-slot:error>
                  <span
                    v-if="!$v.registerAccount.password.required"
                    v-text="$t('global.messages.validate.newpassword.required')"
                  >Your password is required.</span>
                  <span
                    v-if="!$v.registerAccount.password.minLength"
                    v-text="$t('global.messages.validate.newpassword.minlength')"
                  >Your password is required to be at least 4 characters.</span>
                  <span
                    v-if="!$v.registerAccount.password.maxLength"
                    v-text="$t('global.messages.validate.newpassword.maxlength')"
                  >Your password cannot be longer than 50 characters.</span>
                </template>
              </q-input>
              <q-input
                filled
                type="password"
                v-model="$v.registerAccount.confirmPassword.$model"
                label="Your confirm password *"
                hint="Re-type password must match the password above"
                bottom-slots
                :error="$v.registerAccount.confirmPassword.$anyDirty && $v.registerAccount.confirmPassword.$invalid"
              >
                <template v-slot:error>
                  <span
                    v-if="!$v.registerAccount.confirmPassword.sameAsPassword"
                    v-text="$t('global.messages.validate.confirmpassword.sameAsPassword')"
                  >Your confirmation password is required.</span>
                </template>
              </q-input>
              <div>
                <q-btn label="Register" type="submit" color="primary" />
                <q-btn
                  label="Login"
                  to="/login"
                  type="button"
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
import Component from 'vue-class-component';
import { Inject } from 'vue-property-decorator';
import {
  required,
  minLength,
  maxLength,
  helpers,
  email,
  sameAs
} from 'vuelidate/lib/validators';
import RegisterService from '../boot/services/register.service';
import { RegisterAccount } from '../boot/services/types';
import { LOGIN_ALREADY_USED_TYPE, EMAIL_ALREADY_USED_TYPE } from '../constants';

const loginPattern = helpers.regex('alpha', /^[_.@A-Za-z0-9-]*$/);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validations: any = {
  registerAccount: {
    login: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(50),
      pattern: loginPattern
    },
    email: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(254),
      email
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(254)
    },
    confirmPassword: {
      sameAsPassword: sameAs('password')
    }
  }
};

@Component({
  validations
})
export default class RegisterDecorator extends Vue {
  @Inject('registerService') private registerService!: () => RegisterService;

  public registerAccount: RegisterAccount = {
    login: null,
    password: null,
    confirmPassword: null,
    email: null,
    langKey: null
  };

  public doNotMatch: string | null = '';
  public error: string | null = '';
  public errorEmailExists: string | null = '';
  public errorUserExists: string | null = '';
  public success = false;

  public register(): void {
    this.$v.$touch();
    if (this.$v.$invalid) {
      return;
    }

    if (
      this.registerAccount.password !== this.registerAccount.confirmPassword
    ) {
      this.doNotMatch = 'ERROR';
    } else {
      this.doNotMatch = null;
      this.error = null;
      this.errorUserExists = null;
      this.errorEmailExists = null;
      this.registerAccount.langKey = this.$store.getters.currentLanguage;
      this.registerService()
        .processRegistration(this.registerAccount)
        .then(() => {
          this.success = true;
        })
        .catch(error => {
          this.success = false;
          if (
            error.response.status === 400 &&
            error.response.data.type === LOGIN_ALREADY_USED_TYPE
          ) {
            this.errorUserExists = 'ERROR';
          } else if (
            error.response.status === 400 &&
            error.response.data.type === EMAIL_ALREADY_USED_TYPE
          ) {
            this.errorEmailExists = 'ERROR';
          } else {
            this.error = 'ERROR';
          }
        });
    }
  }

  public openLogin(): void {
    // this.loginService().openLogin((<any>this).$root);
  }
}
</script>

<style>
</style>
