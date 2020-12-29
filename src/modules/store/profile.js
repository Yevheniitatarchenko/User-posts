/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import router from '../router';
import UsersService from '../services/user.service';

const usersService = new UsersService();

const state = {
  profile: {},
  showLoadingOverlay: false,
};

/* eslint-disable no-shadow */
const mutations = {
  USER_LOADING(state) {
    state.showLoadingOverlay = true;
  },
  USER_LOADING_COMPLETE(state) {
    state.showLoadingOverlay = false;
  },
  USER_ADD_INFO(state, profile) {
    state.profile = profile;
  },
};

const getters = {};
const actions = {
  get_profile: async ({
    commit,
  }, profile_id) => {
    try {
      commit('USER_LOADING');
      const res = await usersService.get_user(profile_id);
      const profile = res.data;
      commit('USER_ADD_INFO', profile);
      commit('USER_LOADING_COMPLETE');
      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
