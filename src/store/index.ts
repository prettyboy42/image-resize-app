import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './app-store/types';
import { profile } from './profile';
import { getters } from './app-store/getters';
import { mutations } from './app-store/mutations';
import { actions } from './app-store/actions';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

//https://codeburst.io/vuex-and-typescript-3427ba78cfa8
const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0', // a simple property
    drawerState: false,
    dismissSecs: 0,
    dismissCountDown: 0,
    alertType: '',
    alertMessage: {},
    logon: false,
    userIdentity: null,
    authenticated: false,
    ribbonOnProfiles: '',
    activeProfiles: '',
    currentLanguage: 'en',
    languages: {
      en: { name: 'English' },
      vi: { name: 'Tiếng Việt' }
      // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
    }
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
    profile
  },
  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.NODE_ENV !== 'production'
};

export default function(/* { ssrContext } */) {
  return new Vuex.Store<RootState>(store);
}
