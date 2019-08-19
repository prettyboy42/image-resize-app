import Vue from 'vue';
import { Store } from 'vuex';
import VueRouter from 'vue-router';
import { RootState } from 'src/store/app-store/types';
import * as storageUtils from './storage.service';

export default class LoginService {
  private store: Store<RootState>;
  private router: VueRouter;

  public constructor(store: Store<RootState>, router: VueRouter) {
    this.store = store;
    this.router = router;
  }

  public openLogin(instance: Vue): void {
    instance.$emit('bv::show::modal', 'login-page');
  }

  public logOut(): void {
    storageUtils.removeToken();
    this.store.dispatch('logout');
    this.router.push('/');
  }
}
