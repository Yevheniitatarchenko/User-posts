<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Header from './components/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      userId: (state) => state.user.user_id,
    }),
  },
  mounted() {
    this.$store.dispatch('get_user', this.userId);
  },
  methods: {
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  height: 100%;
  color: #34495E;
  background-color: #EBF1F5;
}
</style>
