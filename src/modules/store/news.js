// import _ from 'lodash';
import NewsService from '../services/news.service';

const newsService = new NewsService();

const state = {
  news: [],
};

/* eslint-disable no-shadow */
const mutations = {
  SET_NEWS(state, news) {
    state.news = news;
  },
  ADD_NEWS(state, news) {
    state.news.push(news);
  },
  EDIT_NEWS(state, news) {
    state.news = state.news.map((item) => (item.id === news.id ? news : item));
    // state.news = _.unionBy([news], state.news, 'id');
  },
};

const getters = {
  // eslint-disable-next-line arrow-parens
};
const actions = {
  // eslint-disable-next-line no-empty-pattern
  add_new: async (
    { commit },
    newForm,
  ) => {
    try {
      const res = await newsService.add_new(newForm);
      commit('ADD_NEWS', newForm);
      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  get_news: async ({
    commit,
  }) => {
    try {
      const res = await newsService.get_news();
      const news = res.data;
      commit('SET_NEWS', news);
      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  // eslint-disable-next-line no-unused-vars
  edit_new: async ({ commit },
    editDate,
  ) => {
    try {
      const res = await newsService.edit_new(editDate);
      commit('EDIT_NEWS', editDate);
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
