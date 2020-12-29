import CommentsService from '../services/comments.service';

const commentsService = new CommentsService();

const state = {
  comments: [],
};

/* eslint-disable no-shadow */
const mutations = {
  SET_COMMENTS(state, comments) {
    state.comments = comments;
  },
  ADD_COMMENTS(state, comments) {
    state.comments.push(comments);
  },
  DELETE_COMMENTS(state, id) {
    state.comments = state.comments.filter((item) => item.id !== id);
  },
};

const getters = {
  // eslint-disable-next-line arrow-parens
};
const actions = {
  add_comment: async (
    { commit },
    { formComment },
  ) => {
    try {
      const res = await commentsService.add_comment(formComment);
      const comment = res.data;
      console.log(formComment);
      commit('ADD_COMMENTS', comment);
      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  get_comment: async ({
    commit,
  }) => {
    try {
      const res = await commentsService.get_comment();
      const comments = res.data;
      commit('SET_COMMENTS', comments);
      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  remove_comment: async ({
    commit,
  }, id) => {
    try {
      commit('DELETE_COMMENTS', id);
      const res = await commentsService.remove_comment(id);
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
