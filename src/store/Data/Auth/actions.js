import axios from 'axios';
import consts from '@/static/js/consts';
import LocalStorageService from '@/services/LocalStorageService';

export default {
  login({ commit }, payload) {
    return axios
      .post(consts.ENDPOINTS.LOGIN, payload)
      .then((response) => {
        LocalStorageService.set('token', response.data.token);
        commit('setToken', response.data.token);
        return response;
      });
  },
};
