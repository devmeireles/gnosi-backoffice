import Vue from 'vue';
import events from '@/static/js/events';

export default {
  showSnackbar(text, color) {
    Vue.bus.emit(events.SHOW_SNACKBAR, color, text);
  },
  showModal() {
    Vue.bus.emit(events.OPEN_MODAL);
  },
};
