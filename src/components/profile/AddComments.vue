<template>
  <div class="add-comment">
    <div class="add-comment__input">
      <input
        v-model="formComment.text"
        :placeholder="'You comment'"
        type="text"
      >
    </div>
    <div class="add-comment__button">
      <ButtonCircle
        :icon="'send-message'"
        :height-icon="'20px'"
        :width-icon="'22px'"
        @click="sendComment()"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ButtonCircle from '../../baseComponents/ButtonCircle.vue';

export default {
  name: 'News',
  components: {
    ButtonCircle,
  },
  mixins: [],
  props: {
    postId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      formComment: {
        createdDate: new Date(),
        text: '',
      },
    };
  },
  computed: {
    ...mapState({
      userId: (state) => state.user.user_id,
      userName: (state) => state.user.userInfo.name,
    }),
  },
  mounted() {},
  methods: {
    async sendComment() {
      await this.$store.dispatch('add_comment', {
        formComment: {
          postId: this.$props.postId,
          userId: this.userId,
          userName: this.userName,
          ...this.formComment,
        },
      });
      this.formComment.text = '';
    },
  },
};
</script>

<style scoped lang="scss">
.add-comment {
  @include basic-flex(row, space-between, center);
  width: 100%;
  .add-comment__input {
    width: 90%;
    input {
      @include site-font(default, 16px, normal);
      line-height: 18px;
      color: #ffffff;
      width: 100%;
      margin-bottom: 15px;
      padding: 10px;
      outline: 0;
      border: none;
      background: transparent;
    }
  }
  .add-comment__button {
    @include basic-flex(row, flex-end, center);
    width: 10%;
    /deep/.button-circle__button--inner {
      margin-left: 3px;
    }
  }
}
</style>
