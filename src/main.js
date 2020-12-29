import Vue from 'vue';
import VModal from 'vue-js-modal';
import myUpload from 'vue-image-crop-upload';
import moment from 'moment';
import Lodash from 'lodash';
import App from './App.vue';
import router from './modules/router';
import store from './modules/store';

Vue.prototype.$lodash = Lodash;
Vue.prototype.$moment = moment;

Vue.config.productionTip = false;
Vue.use(myUpload);
Vue.use(VModal);

Vue.component('myUpload', myUpload);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
