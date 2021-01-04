/* eslint-disable camelcase */
class DM_Environment {
  constructor() {
    this.API_URL = 'http://localhost:3000';
  }
}

window.DM_ENV = new DM_Environment();
window.DM_Env = DM_Environment;
