<template>
  <modal
    name="add-news-form"
    :width="500"
    height="auto"
    :reset="true"
    :adaptive="true"
    :scrollable="true"
    @before-open="before_open"
    @before-close="before_close"
  >
    <div class="modal-wrapper">
      <button
        class="btn-modal-close"
        @click="closeModal()"
      />
      <div class="login__sign-up-form">
        <div class="login__form-title">
          Add news
        </div>
        <div class="login__form-group">
          <label class="login__form-label">Title</label>
          <input
            id="title"
            v-model.trim="newForm.title"
            type="text"
            placeholder="Title"
          >
        </div>
        <div class="login__form-group">
          <label class="login__form-label">Description</label>
          <input
            id="title"
            v-model.trim="newForm.description"
            type="text"
            placeholder="Description"
          >
        </div>
        <button
          @click="addNew()"
        >
          Send
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'News',
  data() {
    return {
      newForm: {
        createdDate: new Date(),
        title: '',
        description: '',
      },
    };
  },
  computed: {
    ...mapState({
      userId: (state) => state.user.user_id,
    }),
  },
  methods: {
    async addNew() {
      await this.$store.dispatch('add_new',
        {
          userId: this.userId,
          ...this.newForm,
        });
      this.closeModal();
    },
    closeModal() {
      this.$modal.hide('add-news-form');
    },
    before_open() {},
    before_close() {},
  },
};
</script>

<style scoped lang="scss">
.modal-wrapper {
  padding: 20px;
  .login__sign-up-form {
    @include basic-flex(column, center, flex-start);
    width: 100%;
  }
  .login__form-title {
    @include site-font(default, 32px, normal);
    line-height: 28px;
    color: #34495E;
    margin-bottom: 32px;
  }
  .login__form-group {
    @include basic-flex(column, center, flex-start);
    width: 100%;
    .login__form-label {
      @include site-font(default, 16px, normal);
      line-height: 25px;
      color: #34495E;
    }
    input {
      @include site-font(default, 16px, normal);
      background-color: #e6ecf0;
      line-height: 25px;
      color: #34495E;
      max-width: 438px;
      width: 100%;
      margin-bottom: 15px;
      padding: 10px;
      outline: 0;
      border: 1px solid #34495E;
      border-radius: 3px;
    }
  }
}
</style>
