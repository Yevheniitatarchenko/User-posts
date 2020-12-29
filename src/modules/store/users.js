/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import router from '../router';
import UsersService from '../services/user.service';

const usersService = new UsersService();

const state = {
  users: [],
};

/* eslint-disable no-shadow */
const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },
};

const getters = {};
const actions = {
  get_users: async ({
    commit,
  }) => {
    try {
      const res = await usersService.get_users();
      const users = res.data;
      commit('SET_USERS', users);
      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  // eslint-disable-next-line no-unused-vars
};

export default {
  state,
  mutations,
  getters,
  actions,
};
