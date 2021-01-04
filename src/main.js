import Vue from 'vue';
import 'vue-use-vuex';
import VueBus from 'vue-bus';
import VueI18n from 'vue-i18n';
import router from '@/router';
import App from '@/App';
import store from '@/store';
import translations from '@/lang';
import consts from '@/static/js/consts';
import events from './static/js/events';
import TranslationService from './services/TranslationService';

Vue.config.productionTip = false;

const registerConsts = Object.defineProperty(Vue.prototype, '$consts', {
  get() {
    return consts;
  },
});

const registerEvents = Object.defineProperty(Vue.prototype, '$events', {
  get() {
    return events;
  },
});

Vue.use(VueBus);
Vue.use(registerConsts);
Vue.use(registerEvents);
Vue.use(VueI18n);

const i18n = TranslationService.initI18n(translations, 'en');

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
