export default {
  set(key, payload) {
    localStorage.setItem(key, JSON.stringify(payload));
  },
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      return false;
    }
  },
  removeStorageFrom(key) {
    localStorage.removeItem(key);
  },
};
