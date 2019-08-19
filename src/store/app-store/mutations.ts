import { MutationTree } from 'vuex';
import { RootState } from './types';
import { StoreActions } from './constants';

export const mutations: MutationTree<RootState> = {
  [StoreActions.UPDATE_DRAWER_STATE]: (state, opened) => {
    state.drawerState = opened;
  },
  [StoreActions.INVERT_DRAWER_STATE]: state => {
    state.drawerState = !state.drawerState;
  },
  initAlert(state) {
    state.dismissSecs = 0;
    state.dismissCountDown = 0;
    state.alertType = '';
    state.alertMessage = {};
  },
  setAlertType(state, alertType) {
    state.alertType = alertType;
  },
  setAlertMessage(state, alertMessage) {
    state.dismissSecs = 5;
    state.dismissCountDown = 5;
    state.alertMessage = alertMessage;
  },
  countDownChanged(state, newCountDown) {
    state.dismissCountDown = newCountDown;
  },
  currentLanguage(state, newLanguage) {
    state.currentLanguage = newLanguage;
  },
  authenticate(state) {
    state.logon = true;
  },
  authenticated(state, identity) {
    state.userIdentity = identity;
    state.authenticated = true;
    state.logon = false;
  },
  [StoreActions.ACT_LOGOUT](state) {
    state.userIdentity = null;
    state.authenticated = false;
    state.logon = false;
  },
  setActiveProfiles(state, profile) {
    state.activeProfiles = profile;
  },
  setRibbonOnProfiles(state, ribbon) {
    state.ribbonOnProfiles = ribbon;
  }
};
