import Vue from 'vue';
import events from '@/static/js/events';

export default {
  showSnackbar(text, color) {
    Vue.bus.emit(events.SHOW_SNACKBAR, color, text);
  },
  showErrorSnackbar(text) {
    Vue.bus.emit(events.SHOW_SNACKBAR, 'error', text);
  },
};
