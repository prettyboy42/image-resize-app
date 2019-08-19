import { axiosInstance } from '../axios';
import VueI18n from 'vue-i18n';
import { Store } from 'vuex';
import { RootState } from 'src/store/app-store/types';

export default class TranslationService {
  private store: Store<RootState>;
  private i18n: VueI18n;

  public constructor(store: Store<RootState>, i18n: VueI18n) {
    this.store = store;
    this.i18n = i18n;
  }

  public refreshTranslation(newLanguage: string) {
    let currentLanguage = this.store.getters.currentLanguage;
    currentLanguage = newLanguage ? newLanguage : 'en';
    if (this.i18n && !this.i18n.messages[currentLanguage]) {
      this.i18n.setLocaleMessage(currentLanguage, {});
      axiosInstance.get('i18n/' + currentLanguage + '.json').then(res => {
        if (res.data) {
          this.i18n.setLocaleMessage(currentLanguage, res.data);
          this.i18n.locale = currentLanguage;
          this.store.commit('currentLanguage', currentLanguage);
        }
      });
    } else if (this.i18n) {
      this.i18n.locale = currentLanguage;
      this.store.commit('currentLanguage', currentLanguage);
    }
  }
}
