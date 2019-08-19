import { GetterTree } from 'vuex';
import { RootState } from './types';

export const getters: GetterTree<RootState, RootState> = {
  getDrawerState: state => {
    return state.drawerState;
  },
  dismissSecs: state => state.dismissSecs,
  dismissCountDown: state => state.dismissCountDown,
  alertType: state => state.alertType,
  alertMessage: state => state.alertMessage,
  currentLanguage: state => state.currentLanguage,
  languages: state => state.languages,
  logon: state => state.logon,
  account: state => state.userIdentity,
  authenticated: state => state.authenticated,
  activeProfiles: state => state.activeProfiles,
  ribbonOnProfiles: state => state.ribbonOnProfiles
};
