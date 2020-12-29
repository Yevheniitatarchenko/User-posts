/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import router from '../router';
import UsersService from '../services/user.service';

const usersService = new UsersService();

const state = {
  userInfo: {},
  is_login: localStorage.getItem('token'),
  user_id: localStorage.getItem('user_id'),
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
  USER_ADD_INFO(state, user) {
    state.userInfo = user;
  },
};

const getters = {
  // eslint-disable-next-line arrow-parens
  isLoggedIn: state => state.is_login,
  isOwner: state => userId => Number(userId) === Number(state.user_id),
};
const actions = {
  user_add_info: async ({
    commit,
  },
    user) => {
    try {
      const res = await usersService.user_add_info(user);
      if (res.data.status === true) {
        const userInfo = res.data;
        localStorage.setItem('token', userInfo.is_login);
        localStorage.setItem('user_id', userInfo.id);
        router.push('/');
      }
      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  get_user: async ({
    commit,
  }, user_id) => {
    try {
      commit('USER_LOADING');
      const res = await usersService.get_user(user_id);
      const user = res.data;
      commit('USER_ADD_INFO', user);
      commit('USER_LOADING_COMPLETE');
      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  // eslint-disable-next-line no-unused-vars
  edit_user_info: async ({
    commit,
  }, user,
  ) => {
    try {
      const res = await usersService.edit_user_info(user);
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
