import _ from 'lodash';

const consts = {
  ENDPOINTS: {
    LOGIN: `${window.DM_ENV.API_URL}/auth/login`,
  },
  ROUTES: {
    AUTH: { NAME: 'auth', PATH: '/' },
    APP: { NAME: 'app', PATH: 'app' },
    LOGIN: { NAME: 'login', PATH: 'login' },
    DASHBOARD: { NAME: 'app.dashboard', PATH: 'dashboard' },
    CATALOGUES: { NAME: 'app.catalogues', PATH: 'catalogues' },
    CATEGORIES: { NAME: 'app.categories', PATH: 'categories' },
  },
};

_.forEach(consts, (item, idx) => {
  consts[idx] = Object.freeze(consts[idx]);
});

export default consts;
