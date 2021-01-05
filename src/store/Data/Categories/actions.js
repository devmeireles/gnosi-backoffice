/* eslint-disable no-unused-vars */
import LocalStorage from '@/services/LocalStorageService';
import axios from 'axios';
import consts from '@/static/js/consts';

export default {
  async list({ commit }) {
    const response = await axios.get(consts.ENDPOINTS.CATEGORIES_LIST, {});

    return response;
  },

  async save({ commit }, payload) {
    const response = await axios.post(consts.ENDPOINTS.CATEGORIES_SAVE, payload, {
      headers: {
        Authorization: `Bearer ${LocalStorage.get('token')}`,
      },
    });

    return response;
  },
};
