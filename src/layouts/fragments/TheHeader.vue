<template>
  <q-header elevated>
    <q-toolbar row no-wrap items-center>
      <q-btn flat dense round aria-label="Menu" @click="toggleSideBar()">
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>{{ headline }}</q-toolbar-title>
      <q-space />
      <div class="self-stretch row no-wrap">
        <q-btn-dropdown flat no-caps label="Account" icon="mdi-account">
          <q-list>
            <q-item v-if="!authenticated" to="/login" clickable v-close-popup>
              <q-item-section>
                <q-item-label>Login</q-item-label>
              </q-item-section>
            </q-item>

            <q-item v-if="!authenticated" to="/register" clickable v-close-popup>
              <q-item-section>
                <q-item-label>Register</q-item-label>
              </q-item-section>
            </q-item>

            <q-item v-if="authenticated" clickable v-close-popup @click="logout()">
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Inject, Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import LoginService from '../../boot/services/login.service';

@Component({
  name: 'TheHeader'
})
export default class TheHeader extends Vue {
  @Inject('loginService')
  private loginService: () => LoginService;
  @Action('invertDrawerState')
  public toggleSideBar: VoidFunction;
  @Action('logout') actionLogout: VoidFunction;

  @Prop({ default: 'No headline' })
  public headline: string;

  public get authenticated(): boolean {
    return this.$store.getters.authenticated;
  }

  public logout(): void {
    this.loginService().logOut();
  }
}
</script>
