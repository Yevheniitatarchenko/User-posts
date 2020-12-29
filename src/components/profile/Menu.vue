<template>
  <div class="user-profile__menu">
    <div
      class="menu"
      :style="`--colNum: ${mainMenu.length};`"
    >
      <router-link
        v-for="item in mainMenu"
        :key="item.route"
        :to="{ path: '/profile' + '/' + userId + '/' + item.route }"
        tag="div"
        :class="[
          'menu__tab',
          activeClass(item.route)
        ]"
        @click.native="activeMenuLink(item.route)"
      >
        <div class="menu__tab-icon">
          <SVGIcon
            :name="item.icon"
            :colors="'270deg, #6f6d99, #9d9acc'"
          />
        </div>
        {{ item.locale }}
        <div class="menu__tab-glow">
          <div class="menu__tab-glow--inner" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import SVGIcon from '../../baseComponents/SVGIcon.vue';

export default {
  name: 'Menu',
  components: {
    SVGIcon,
  },
  data() {
    return {
      userId: '1',
      activeRout: 'news',
      mainMenu: [
        {
          route: 'news',
          locale: 'news',
          icon: 'items_icon',
        },
        {
          route: 'friends',
          locale: 'friends',
          icon: 'friends_icon',
        },
      ],
    };
  },
  computed: {},
  watch: {
    '$route.params.id': 'init',
  },
  created() {
    this.init();
  },
  methods: {
    activeMenuLink(linkName) {
      this.activeRout = this.activeRout === linkName ? this.activeRout : linkName;
      return this.activeRout;
    },
    activeClass(linkName) {
      return linkName === this.activeRout ? 'active' : '';
    },
    init() {
      this.userId = this.$route.params.id;
    },
  },
};
</script>

<style lang="scss" scoped>
.user-profile__menu {
  @include basic-flex(row, center, center);
  background: #242333;
  box-shadow: 0 14px 25px rgba(#242333, 0.45);
  position: relative;
  width: 100%;

  .menu {
    display: grid;
    grid-template-columns: repeat(var(--colNum), 14.2%);
    justify-content: center;
    max-width: 1350px;
    width: 100%;
    height: 62px;
    .menu__tab {
      @include basic-flex(row, center, center);
      @include site-font(default, 16px, 700);
      text-transform: capitalize;
      line-height: 14px;
      letter-spacing: .6px;
      color: #ffffff;
      position: relative;
      height: 100%;
      user-select: none;
      &:hover,
      &.router-link-exact-active,
      &.router-link-active {
        cursor: pointer;
        color: #ffffff;
        .menu__tab-glow {
          @include position(absolute, null, 0, 0, 0);
          width: 100%;
          height: 2px;
          border-radius: 2px;
          background-image: linear-gradient(90deg, rgba(#D94FC7, 0.3) 0, rgba(#FF905A, 0.3));

          z-index: 0;
          .menu__tab-glow--inner {
            width: 60%;
            margin: 0 auto;
            height: 2px;
            border-radius: 2px;
            background-image: linear-gradient(90deg, #d94fc7, #ff905a);
          }
          &:after {
            content: '';
            @include position(absolute, -44px, 0, 0, 0);
            background-image: url("/assets/images/menu-hover-background-owner.png");
            background-position: 50% 60%;
            background-size: cover;
          }
        }
        .menu__tab-icon {
          i {
            background-image: linear-gradient(to left, #ff905a, #d94fc7) !important;
            opacity: 1;
          }
        }
      }

      .menu__tab-icon {
        margin-right: 10px;
        flex-shrink: 0;
        width: 21px;
        height: 21px;

        i {
          opacity: .5;
        }
      }
    }
  }
}

</style>
