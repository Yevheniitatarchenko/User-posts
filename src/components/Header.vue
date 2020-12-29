<template>
  <div class="header">
    <div class="main-menu">
      <router-link
        v-for="(item, key) in filteredMenuItems "
        :key="key"
        tag="a"
        :to="item.route"
        :class="['router-link']"
      >
        <!-- <SVGIcon
          class="router-link__icon"
          :name="item.icon"
          :colors="'0deg, #9B95C9, #9B95C9'"
        /> -->
        <span class="router-link__description">
          {{ item.locale }}
        </span>
      </router-link>
    </div>
    <div
      v-if="!isLoggedIn"
      class="auth-menu"
    >
      <router-link
        tag="a"
        :to="'/login'"
        :class="['router-link']"
      >
        <!-- <SVGIcon
          class="router-link__icon"
          :name="item.icon"
          :colors="'0deg, #9B95C9, #9B95C9'"
        /> -->
        <span class="router-link__description">
          sign in
        </span>
      </router-link>
    </div>
    <div
      v-if="isLoggedIn"
      class="header__user"
      @click="editProfile()"
    >
      <div class="header__user-avatar">
        <Avatar
          :image="user.avatar"
          :height="50"
          :width="50"
        />
      </div>
      <div class="header__user-name">
        {{ user.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Avatar from '../baseComponents/Avatar.vue';

export default {
  name: 'Header',
  components: {
    Avatar,
  },
  data() {
    return {
      menu: [
        {
          route: '/people',
          iconClass: 'icon_items',
          locale: 'people',
          needLogin: false,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.user.userInfo,
    }),
    ...mapGetters(['isLoggedIn']),
    filteredMenuItems() {
      // eslint-disable-next-line arrow-parens
      return this.menu.filter(item => (this.isLoggedIn ? item : !item.needLogin));
    },
  },
  methods: {
    editProfile() {
      this.$router.push(`/settings/profile/${this.user.id}`);
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  @include basic-flex(row, space-between, center);
  background-color: #32323d;
  padding: 0 20px 0 20px;
  height: 70px;
  .main-menu, .auth-menu {
    @include basic-flex(row, center, center);
    height: 100%;
    .router-link {
      @include basic-flex(row, center, center);
      @include site-font(default, 20px, 600);
      text-transform: capitalize;
      line-height: 25px;
      color: #62676C;
      text-decoration: none;
      padding: 0 20px 0 20px;
      height: 100%;
      &:hover,
      &.router-link-exact-active {
        color: #BFC1C3;
      }
    }
  }
  .header__user {
    @include basic-flex(row, flex-start, center);
    cursor: pointer;
    .header__user-avatar {
      border-radius: 50%;
      margin-right: 20px;
    }
    .header__user-name {
      @include site-font(default, 18px, 400);
      line-height: 21px;
      color: #ffffff;
    }
  }
}
</style>
