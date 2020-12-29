<template>
  <div class="users">
    <div class="user__list">
      <div
        v-for="(user, key) in users"
        :key="key"
        class="user"
        @click="goToProfile(user.id)"
      >
        <div class="user__avatar">
          <Avatar
            :image="user.avatar"
            :height="60"
            :width="60"
          />
        </div>
        <div class="user_name">
          {{ user.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Avatar from '../baseComponents/Avatar.vue';

export default {
  name: 'People',
  components: {
    Avatar,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      users: (state) => state.users.users,
    }),
  },
  mounted() {
    this.$store.dispatch('get_users');
  },
  methods: {
    goToProfile(id) {
      // this.$router.push(`/profile/${id}`);
      this.$router.push(`/profile/${id}/news`);
    },
  },
};
</script>

<style scoped lang="scss">
.users {
  padding: 20px;
  height: 100%;
  .user__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-template-rows: 80px;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    justify-content: center;
    .user {
      @include basic-flex(row, flex-start, center);
      background-color: #1E272E;
      border-radius: 10px;
      padding: 10px;
      cursor: pointer;
      .user__avatar {
        @include basic-flex(row, center, center);
        border-radius: 50%;
        margin-right: 15px;
      }
      .user_name {
        @include site-font(default, 18px, normal);
        line-height: 23px;
        color: #ffffff;
      }
    }
  }
}
</style>
