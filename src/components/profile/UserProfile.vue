<template>
  <div class="user-profile">
    <div
      v-if="showLoadingOverlay"
      class="preloader-container"
    >
      <Preloader
        :full-height="false"
        :transparent="true"
      />
    </div>
    <div
      v-if="!showLoadingOverlay"
      class="user-profile__inner"
    >
      <div class="user-profile__header">
        <div class="user__avatar">
          <Avatar
            :image="profile.avatar"
            :height="70"
            :width="70"
          />
          <div class="user__name">
            {{ profile.name }}
          </div>
        </div>
        <div class="user__description">
          {{ profile.description }}
        </div>
      </div>
      <div class="user-profile__menu">
        <Menu />
      </div>
      <div class="user-profile__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Avatar from '../../baseComponents/Avatar.vue';
import Preloader from '../../baseComponents/Preloader.vue';
import Menu from './Menu.vue';

export default {
  name: 'ProfileUser',
  components: {
    Avatar,
    Preloader,
    Menu,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      profile: (state) => state.profile.profile,
      showLoadingOverlay: (state) => state.profile.showLoadingOverlay,
    }),
  },
  mounted() {
    this.getUserProfile();
  },
  methods: {
    async getUserProfile() {
      const userId = this.$route.params.id;
      this.$store.dispatch('get_profile', userId);
    },
  },
};
</script>

<style scoped lang="scss">
.user-profile {
  height: 100%;
  .user-profile__inner {
    height: 100%;
    .user__avatar {
      @include basic-flex(row, flex-start, center);
      margin-bottom: 20px;
      padding: 15px;
      .avatar {
        margin-right: 20px;
      }
      .user__name {
        @include site-font(default, 20px, 500);
        line-height: 25px;
        color: #62676C;
      }
    }
  }
}
</style>
