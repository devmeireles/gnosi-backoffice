import store from '@/store';

export default {
  async login(username, password) {
    const response = await store.dispatch('Data/Auth/login', {
      username, password,
    });

    // await this.validateToken();

    return response;
  },
};
