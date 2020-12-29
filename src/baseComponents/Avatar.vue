<template lang="html">
  <div
    class="avatar"
    :style="sizeAvatar"
    @click="click()"
  >
    <img
      :src="$props.image"
      class="avatar__img"
      alt
    >
  </div>
</template>

<script lang="js">
export default {
  name: 'SrcBaseComponentsUiAvatar',
  props: {
    image: {
      type: String,
      default: '',
    },
    height: {
      type: Number,
      default: 35,
    },
    width: {
      type: Number,
      default: 35,
    },
  },
  data() {
    return {};
  },
  computed: {
    sizeAvatar() {
      return `height: ${this.$props.height}px; width: ${this.$props.width}px;`;
    },
  },
  mounted() {},
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped lang="scss">
.avatar {
  display: flex;
  width: 35px;
  height: 35px;
  background-image: linear-gradient(to right, #d94fc7 0%, #ff905a 100%);
  padding: 2px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;

  img {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
}
</style>
