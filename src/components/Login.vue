<template>
  <div class="login">
    <div class="login__form">
      <div class="login__sign-up-form">
        <div class="login__form-title">
          Розпочати
        </div>
        <div class="login__form-group">
          <label class="login__form-label">Ім'я</label>
          <input
            id="title"
            v-model.trim="signupForm.name"
            type="text"
            placeholder="Name"
          >
        </div>
        <!-- <div class="login__form-group">
          <label class="login__form-label">Фамілія</label>
          <input
            id="title"
            v-model.trim="signupForm.lastName"
            type="text"
            placeholder="Last name"
          >
        </div> -->
        <div class="login__form-group">
          <label class="login__form-label">Пошта</label>
          <input
            id="title"
            v-model.trim="signupForm.email"
            type="text"
            placeholder="Email"
          >
        </div>
        <div class="login__form-group">
          <label class="login__form-label">Пароль</label>
          <input
            id="title"
            v-model.trim="signupForm.password"
            type="text"
            placeholder="Password"
          >
        </div>
        <button
          @click="addComment()"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Login',
  components: {
  },
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      },
      signupForm: {
        name: '',
        lastName: '',
        email: '',
        password: '',
        is_login: true,
        status: true,
      },
    };
  },
  computed: {
    ...mapState({
      is_auth: (state) => state.user.is_auth,
    }),
    ...mapGetters(['isLoggedIn']),
  },
  methods: {
    async addComment() {
      const {
        signupForm,
      } = this;
      await this.$store.dispatch('user_add_info', {
        dateRegistration: new Date(),
        name: signupForm.name,
        lastName: signupForm.lastName,
        email: signupForm.email,
        password: signupForm.password,
        is_login: signupForm.is_login,
        status: signupForm.status,
      });
      localStorage.is_auth = this.mapGetters;
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  height: calc(100vh - 70px);
  @include basic-flex(row, space-between, center);
  .login__form {
    @include basic-flex(row, center, center);
    background-color: #f0f0f0;
    height: 100%;
    width: 100%;
    .login__sign-up-form {
      @include basic-flex(column, center, flex-start);
      max-width: 450px;
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
        width: 100%;
        margin-bottom: 15px;
        padding: 10px;
        outline: 0;
        border: 1px solid #34495E;
        border-radius: 3px;
      }
    }
  }
}
</style>
