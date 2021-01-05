import _ from 'lodash';

const events = {
  SHOW_SNACKBAR: 'show_snackbar',
  OPEN_MODAL: 'open_modal',
  CLOSE_MODAL: 'close_modal',
  UPDATE_TABLE: 'update_table',
  CLEAR_FORM: 'clear_form',
};

_.forEach(events, (item, idx) => {
  events[idx] = Object.freeze(events[idx]);
});

export default events;
