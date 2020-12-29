<template>
  <div
    :class="[
      'button-circle',
    ]"
  >
    <button
      :class="[
        'button-circle__button',
      ]"
      :style="addStyleBorderButton"
      @click.prevent.stop="addClick()"
    >
      <div
        class="button-circle__button--inner"
        :style="sizeIcon"
      >
        <SVGIcon
          :name="$props.icon"
          :colors="'0deg, #fff, #fff'"
        />
      </div>
    </button>
  </div>
</template>

<script>
import SVGIcon from './SVGIcon.vue';

export default {
  name: 'SrcBaseComponentsUiButtonCircle',
  components: {
    SVGIcon,
  },
  props: {
    icon: {
      type: String,
      default: '',
    },
    circleFirstColor: {
      type: String,
      default: ' #2d96c8',
    },
    circleSecondColor: {
      type: String,
      default: ' #2d96c8',
    },
    heightIcon: {
      type: String,
      default: '20px',
    },
    widthIcon: {
      type: String,
      default: '20px',
    },
  },
  computed: {
    addStyleBorderButton() {
      return `background: linear-gradient(to bottom, ${this.$props.circleFirstColor}, ${this.$props.circleSecondColor});`;
    },
    sizeIcon() {
      return `height: ${this.$props.heightIcon}; width: ${this.$props.widthIcon};`;
    },
  },
  methods: {
    addClick() {
      this.$emit('click');
    },
  },
};
</script>
<style lang="scss" scoped>
.button-circle {
  @include basic-flex(row, center, center);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  .button-circle__button {
    @include basic-flex(row, center, center);
    border-radius: 50%;
    width: 100%;
    height: 100%;
    border: none;
    cursor: pointer;
    outline: none;
    &:hover {
      filter: brightness(115%);
    }
    .button-circle__button--inner {
      @include basic-flex(row, center, center);
    }
  }
}
</style>
