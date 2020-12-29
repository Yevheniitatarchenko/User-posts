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
      <myUpload
        v-model="show"
        field="img"
        :width="300"
        :height="300"
        :params="params"
        :headers="headers"
        lang-type="en"
        :value.sync="show"
        img-format="png"
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
      />
      <div class="user__avatar">
        <Avatar
          :image="user.avatar"
          :height="70"
          :width="70"
          @click="toggleShow()"
        />
        <div class="user__name">
          {{ user.name }}
        </div>
      </div>
      <div class="user__description">
        {{ user.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Avatar from '../baseComponents/Avatar.vue';
import Preloader from '../baseComponents/Preloader.vue';

export default {
  name: 'Settings',
  components: {
    Avatar,
    Preloader,
  },
  data() {
    return {
      show: false,
      params: {
        token: '123456798',
        name: 'avatar',
      },
      headers: {
        smail: '*_~',
      },
      imgDataUrl: '',
      img: '',
      imageUploaded: false,
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.user.userInfo,
      userId: (state) => state.user.user_id,
      showLoadingOverlay: (state) => state.user.showLoadingOverlay,
    }),
    ...mapGetters(['isLoggedIn']),
  },
  mounted() {
    this.$store.dispatch('get_user', this.userId);
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    // eslint-disable-next-line no-unused-vars
    cropSuccess(imgDataUrl, field) {
      this.img = imgDataUrl;
      this.imageUploaded = true;
      this.onUpload();
    },
    // eslint-disable-next-line no-unused-vars
    cropUploadSuccess(jsonData, field) {
    },
    // eslint-disable-next-line no-unused-vars
    cropUploadFail(status, field) {
    },
    showUploadAvatarModal() {
      this.$modal.show('add-new-img');
    },
    async onUpload() {
      await this.$store.dispatch('edit_user_info', {
        avatar: this.img,
        id: this.user.id,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.user-profile {
  height: 100%;
  .user-profile__inner {
    padding: 15px;
    height: 100%;
    .user__avatar {
      @include basic-flex(row, flex-start, center);
      margin-bottom: 20px;
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
