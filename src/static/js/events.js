import _ from 'lodash';

const events = {
  SHOW_SNACKBAR: 'show_snackbar',
};

_.forEach(events, (item, idx) => {
  events[idx] = Object.freeze(events[idx]);
});

export default events;
