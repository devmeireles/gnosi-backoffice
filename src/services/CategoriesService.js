import store from '@/store';

export default {
  async list() {
    const response = await store.dispatch('Data/Categories/list');
    return response.data.data;
  },

  async save(title, description) {
    const response = await store.dispatch('Data/Categories/save', {
      title, description,
    });

    return response;
  },
};
