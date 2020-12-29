<template lang="html">
  <i
    :class="SVGIconClass"
    :style="SVGIconStyle"
    @mouseenter="mouseEnter()"
    @mouseleave="mouseLeave()"
  />
</template>

<script lang="js">
export default {
  name: 'SrcBaseComponentsUiSvgIcon',
  props: {
    name: {
      type: String,
      default: '',
    },
    colors: {
      type: String,
      default: '',
    },
    hoverColors: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      hover: false,
    };
  },
  computed: {
    SVGIconClass() {
      return 'svg-icon';
    },
    SVGIconStyle() {
      const {
        $props: {
          colors,
          hoverColors,
          name,
        },
        hover,
      } = this;
      const fill = hoverColors !== '' && hover ? hoverColors : colors;
      return {
        background: `linear-gradient(${fill})`,
        '-webkit-mask': `url(/assets/cors_svg/${name}.svg)`,
        mask: `url(/assets/cors_svg/${name}.svg)`,
      };
    },
  },
  mounted() {},
  methods: {
    mouseEnter() {
      this.hover = true;
    },
    mouseLeave() {
      this.hover = false;
    },
  },
};
</script>

<style scoped lang="scss">
.svg-icon {
  width: 100%;
  height: 100%;
  display: block;
  mask-size: contain !important;
  mask-repeat: no-repeat !important;
}
</style>
