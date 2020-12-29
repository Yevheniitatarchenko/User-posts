<template>
  <div class="preloader">
    <div class="preloader-jackhammer">
      <ul class="cssload-flex-container">
        <li>
          <span class="cssload-loading" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Preloader',
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
.preloader {
  @include basic-flex(row, center, center);
  background-color: rgba(#222, 0.7);
  height: 100vh;
  width: 100%;
  .preloader-jackhammer {
    * {
      box-sizing: border-box;
      -o-box-sizing: border-box;
      -ms-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
    }
    margin: 0 auto;
    max-width: 545px;
    ul li {
      list-style: none;
    }
    .cssload-flex-container {
      display: flex;
      display: -o-flex;
      display: -ms-flex;
      display: -webkit-flex;
      display: -moz-flex;
      flex-direction: row;
      -o-flex-direction: row;
      -ms-flex-direction: row;
      -webkit-flex-direction: row;
      -moz-flex-direction: row;
      flex-wrap: wrap;
      -o-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      -webkit-flex-wrap: wrap;
      -moz-flex-wrap: wrap;
      justify-content: space-around;
      li {
        padding: 10px;
        height: 97px;
        width: 97px;
        margin: 0;
        position: relative;
        text-align: center;
      }
    }
    .cssload-loading {
      display: inline-block;
      position: relative;
      width: 5px;
      height: 49px;
      background-color: #fc5c65;
      margin-top: 5px;
      border-radius: 975px;
      -o-border-radius: 975px;
      -ms-border-radius: 975px;
      -webkit-border-radius: 975px;
      -moz-border-radius: 975px;
      animation: cssload-upDown2 1.15s ease infinite;
      -o-animation: cssload-upDown2 1.15s ease infinite;
      -ms-animation: cssload-upDown2 1.15s ease infinite;
      -webkit-animation: cssload-upDown2 1.15s ease infinite;
      -moz-animation: cssload-upDown2 1.15s ease infinite;
      animation-direction: alternate;
      -o-animation-direction: alternate;
      -ms-animation-direction: alternate;
      -webkit-animation-direction: alternate;
      -moz-animation-direction: alternate;
      animation-delay: 0.29s;
      -o-animation-delay: 0.29s;
      -ms-animation-delay: 0.29s;
      -webkit-animation-delay: 0.29s;
      -moz-animation-delay: 0.29s;
      &:after, &:before {
        display: inline-block;
        position: relative;
        width: 5px;
        height: 49px;
        background: rgb(0, 0, 0);
        margin-top: 5px;
        border-radius: 975px;
        -o-border-radius: 975px;
        -ms-border-radius: 975px;
        -webkit-border-radius: 975px;
        -moz-border-radius: 975px;
        animation: cssload-upDown2 1.15s ease infinite;
        -o-animation: cssload-upDown2 1.15s ease infinite;
        -ms-animation: cssload-upDown2 1.15s ease infinite;
        -webkit-animation: cssload-upDown2 1.15s ease infinite;
        -moz-animation: cssload-upDown2 1.15s ease infinite;
        animation-direction: alternate;
        -o-animation-direction: alternate;
        -ms-animation-direction: alternate;
        -webkit-animation-direction: alternate;
        -moz-animation-direction: alternate;
        animation-delay: 0.29s;
        -o-animation-delay: 0.29s;
        -ms-animation-delay: 0.29s;
        -webkit-animation-delay: 0.29s;
        -moz-animation-delay: 0.29s;
      }
      &:after {
        position: absolute;
        content: '';
        animation: cssload-upDown 1.15s ease infinite;
        -o-animation: cssload-upDown 1.15s ease infinite;
        -ms-animation: cssload-upDown 1.15s ease infinite;
        -webkit-animation: cssload-upDown 1.15s ease infinite;
        -moz-animation: cssload-upDown 1.15s ease infinite;
        animation-direction: alternate;
        -o-animation-direction: alternate;
        -ms-animation-direction: alternate;
        -webkit-animation-direction: alternate;
        -moz-animation-direction: alternate;
        background-color: #2bcbba;
      }
      &:before {
        position: absolute;
        content: '';
        animation: cssload-upDown 1.15s ease infinite;
        -o-animation: cssload-upDown 1.15s ease infinite;
        -ms-animation: cssload-upDown 1.15s ease infinite;
        -webkit-animation: cssload-upDown 1.15s ease infinite;
        -moz-animation: cssload-upDown 1.15s ease infinite;
        animation-direction: alternate;
        -o-animation-direction: alternate;
        -ms-animation-direction: alternate;
        -webkit-animation-direction: alternate;
        -moz-animation-direction: alternate;
        left: -10px;
        background: #f7b731;
      }
      &:after {
        left: 10px;
        animation-delay: 0.58s;
        -o-animation-delay: 0.58s;
        -ms-animation-delay: 0.58s;
        -webkit-animation-delay: 0.58s;
        -moz-animation-delay: 0.58s;
      }
    }
  }
}

@keyframes cssload-upDown {
  from {
    transform: translateY(19px);
  }

  to {
    transform: translateY(-19px);
  }
}

@-o-keyframes cssload-upDown {
  from {
    -o-transform: translateY(19px);
  }

  to {
    -o-transform: translateY(-19px);
  }
}

@-ms-keyframes cssload-upDown {
  from {
    -ms-transform: translateY(19px);
  }

  to {
    -ms-transform: translateY(-19px);
  }
}

@-webkit-keyframes cssload-upDown {
  from {
    -webkit-transform: translateY(19px);
  }

  to {
    -webkit-transform: translateY(-19px);
  }
}

@-moz-keyframes cssload-upDown {
  from {
    -moz-transform: translateY(19px);
  }

  to {
    -moz-transform: translateY(-19px);
  }
}

@keyframes cssload-upDown2 {
  from {
    transform: translateY(29px);
  }

  to {
    transform: translateY(-19px);
  }
}

@-o-keyframes cssload-upDown2 {
  from {
    -o-transform: translateY(29px);
  }

  to {
    -o-transform: translateY(-19px);
  }
}

@-ms-keyframes cssload-upDown2 {
  from {
    -ms-transform: translateY(29px);
  }

  to {
    -ms-transform: translateY(-19px);
  }
}

@-webkit-keyframes cssload-upDown2 {
  from {
    -webkit-transform: translateY(29px);
  }

  to {
    -webkit-transform: translateY(-19px);
  }
}

@-moz-keyframes cssload-upDown2 {
  from {
    -moz-transform: translateY(29px);
  }

  to {
    -moz-transform: translateY(-19px);
  }
}
</style>
