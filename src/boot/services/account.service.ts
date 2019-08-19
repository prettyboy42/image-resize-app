import { axiosInstance } from '../axios';
import { Store } from 'vuex';
import VueRouter from 'vue-router';
import { RootState } from 'src/store/app-store/types';
import TranslationService from './translation.service';
import * as storageUtils from './storage.service';

export default class AccountService {
  private store: Store<RootState>;
  private router: VueRouter;
  private translationService: TranslationService;
  public constructor(
    store: Store<RootState>,
    router: VueRouter,
    translationService: TranslationService
  ) {
    this.store = store;
    this.router = router;
    this.translationService = translationService;
    this.init();
  }

  public init(): void {
    const token = storageUtils.getToken();
    if (!this.store.getters.account && !this.store.getters.logon && token) {
      this.retrieveAccount();
    }
    // this.retrieveProfiles();
  }

  public retrieveProfiles(): void {
    axiosInstance.get('management/info').then(res => {
      if (res.data && res.data.activeProfiles) {
        this.store.commit(
          'setRibbonOnProfiles',
          res.data['display-ribbon-on-profiles']
        );
        this.store.commit('setActiveProfiles', res.data['activeProfiles']);
      }
    });
  }

  public retrieveAccount(): void {
    this.store.commit('authenticate');

    axiosInstance
      .get('api/account')
      .then(response => {
        const account = response.data;
        if (account) {
          this.store.commit('authenticated', account);
          if (this.store.getters.currentLanguage !== account.langKey) {
            this.store.commit('currentLanguage', account.langKey);
          }
          if (sessionStorage.getItem('requested-url')) {
            const reqUrl: string =
              sessionStorage.getItem('requested-url') != null
                ? sessionStorage.getItem('requested-url')
                : '';
            this.router.replace(reqUrl);
            sessionStorage.removeItem('requested-url');
          }
        } else {
          this.store.commit('logout');
          this.router.push('/');
          sessionStorage.removeItem('requested-url');
        }
        this.translationService.refreshTranslation(
          this.store.getters.currentLanguage
        );
      })
      .catch(() => {
        this.store.commit('logout');
        this.router.push('/');
      });
  }

  public hasAnyAuthority(authorities: string[]): boolean {
    if (typeof authorities === 'string') {
      authorities = [authorities];
    }
    if (!this.authenticated || !this.userAuthorities) {
      return false;
    }

    for (let i = 0; i < authorities.length; i++) {
      if (this.userAuthorities.includes(authorities[i])) {
        return true;
      }
    }

    return false;
  }

  public get authenticated(): boolean {
    return this.store.getters.authenticated;
  }

  public get userAuthorities(): string[] {
    return this.store.getters.account.authorities;
  }
}
