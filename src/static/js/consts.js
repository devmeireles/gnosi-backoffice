import _ from 'lodash';

const consts = {
  ENDPOINTS: {
    LOGIN: `${window.DM_ENV.API_URL}/auth/login`,
    CATEGORIES_LIST: `${window.DM_ENV.API_URL}/category`,
    CATEGORIES_SAVE: `${window.DM_ENV.API_URL}/category`,
  },
  ROUTES: {
    AUTH: { NAME: 'auth', PATH: '/' },
    APP: { NAME: 'app', PATH: 'app' },
    LOGIN: { NAME: 'login', PATH: 'login' },
    DASHBOARD: { NAME: 'app.dashboard', PATH: 'dashboard', SINGLE: 'dashboard' },
    CATALOGUES: { NAME: 'app.catalogues', PATH: 'catalogues', SINGLE: 'catalogue' },
    CATEGORIES: { NAME: 'app.categories', PATH: 'categories', SINGLE: 'category' },
  },
};

_.forEach(consts, (item, idx) => {
  consts[idx] = Object.freeze(consts[idx]);
});

export default consts;
