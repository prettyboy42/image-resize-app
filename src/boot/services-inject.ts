import Vue, { VueConstructor } from 'vue';
import { Store } from 'vuex';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import Vuelidate from 'vuelidate';
import { RootState } from 'src/store/app-store/types';
import AccountService from './services/account.service';
import RegisterService from './services/register.service';
import TranslationService from './services/translation.service';
import LoginService from './services/login.service';

declare module 'vue/types/vue' {
  interface Vue {
    provide?: object | (() => object);
  }
}

interface InjectServiceType {
  store: Store<RootState>;
  router: VueRouter;
  i18n: VueI18n;
  app: Vue;
  Vue: VueConstructor;
}

export default async ({ store, router, i18n, app }: InjectServiceType) => {
  Vue.use(Vuelidate); //enable the functionality globally on all components containing validation configuration.

  const translationService: TranslationService = new TranslationService(
    store,
    i18n
  );
  const loginService = new LoginService(store, router);
  const accountService = new AccountService(store, router, translationService);
  const provide = {
    accountService: () => accountService,
    loginService: () => loginService,
    translationService: () => translationService,
    registerService: () => new RegisterService()
  };
  app.provide = provide;

  //Router authentication
  // router.beforeEach((to, from, next) => {
  //   if (!to.matched.length) {
  //     next('/not-found');
  //   }

  //   if (to.meta && to.meta.authorities && to.meta.authorities.length > 0) {
  //     if (!accountService.hasAnyAuthority(to.meta.authorities)) {
  //       sessionStorage.setItem('requested-url', to.fullPath);
  //       next('/forbidden');
  //     } else {
  //       next();
  //     }
  //   } else {
  //     // no authorities, so just proceed
  //     next();
  //   }
  // });
};
