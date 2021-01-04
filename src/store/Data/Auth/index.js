import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = () => ({
  loaded: false,
  token: 0,
  userInformation: null,
});

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
