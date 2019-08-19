import { ActionTree } from 'vuex';
import { RootState } from './types';
import { StoreActions } from './constants';

export const actions: ActionTree<RootState, RootState> = {
  updDrawerState: ({ commit }, newVal) => {
    commit(StoreActions.UPDATE_DRAWER_STATE, newVal);
  },
  invertDrawerState: ({ commit }) => {
    commit(StoreActions.INVERT_DRAWER_STATE);
  },
  logout: ({ commit }) => {
    commit(StoreActions.ACT_LOGOUT);
  }
};
