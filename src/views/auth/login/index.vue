<template>
  <div class="main-content">
    <div class="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 px-5">
              <h1 class="text-white">Welcome!</h1>
              <p class="text-lead text-white">
                Use these awesome forms to login or create new account in your
                project for free.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="fill-default"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <div class="container mt--8 pb-5">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
          <div class="card bg-secondary border-0 mb-0">
            <div class="card-header bg-transparent pb-5">
            </div>
            <div class="card-body px-lg-5 py-lg-5">
              <div role="form">
                <div class="form-group mb-3">
                  <InputField
                    :placeholder="$t('username')"
                    :type="'text'"
                    :icon="'ni ni-email-83'"
                    v-model="username"
                    :error-msg="getErrors($v.username)"
                  />
                </div>
                <div class="form-group">
                  <InputField
                    :placeholder="$t('password')"
                    :type="'password'"
                    :icon="'ni ni-lock-circle-open'"
                    v-model="password"
                    :error-msg="getErrors($v.password)"
                  />
                </div>
                <div class="text-center">
                  <button type="button" class="btn btn-primary my-4" @click="login">
                    {{$t('sign-in')}}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import validationMixin from '@/mixins/ValidationMixin';
import AuthService from '@/services/AuthService';
import NotificationService from '@/services/NotificationService';
import { required, minLength } from 'vuelidate/lib/validators';
import InputField from '@/components/ui/InputField';

export default {
  name: 'Login',
  mixins: [validationMixin],
  components: {
    InputField,
  },
  data: () => ({
    loading: false,
    username: 'master2',
    password: 'aVeryStrogPassw0rd!',
  }),
  validations: {
    username: { required },
    password: { required, minLength: minLength(6) },
  },
  methods: {
    async login() {
      this.validate();
      if (!this.$v.$invalid) {
        try {
          this.loading = true;
          await AuthService.login(this.username, this.password);
          this.$router.push({ name: this.$consts.ROUTES.DASHBOARD.NAME });
        } catch (err) {
          NotificationService.showSnackbar(err.response.data.error || err.response.data.data, 'danger');
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>
