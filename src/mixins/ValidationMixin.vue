<script>

import _ from 'lodash';
import { validationMixin } from 'vuelidate';

const erroMessages = {
  required: 'error-required-field',
  minLength: 'error-min-length-error-message',
  numeric: 'error-numeric',
  maxLength: 'error-max-length-error-message',
  sameAsPassword: 'As senhas não correspondem',
  email: 'error-invalid-email',
  alphaTitle: 'error-only-numbers',
  alpha: 'error-letters',
  integer: 'integer-letters',
  strongPassword: 'password-numbers-letters',
  dataFormat: 'error-format-date',
  hourFormat: 'error-format-hour',
  sameAsPrimaryMail: 'error-same-as-primary-mail',
  url: 'error-url-pattern',
  validateDuration: 'error-wrong-time-format',
  validateDate: 'error-wrong-date',
};

export default {
  mixins: [validationMixin],
  computed: {
    getErrors() {
      return (modelInstance, fieldName = null) => {
        if (!modelInstance || !modelInstance.$dirty) return [];
        const errors = [];
        _.forEach(
          modelInstance.$params,
          (value, ruleName) => {
            if (!modelInstance[ruleName]) {
              errors.push(this.$t(erroMessages[ruleName], {
                field: fieldName || modelInstance,
                ...value,
              }));
            }
          },
        );

        return errors;
      };
    },
  },
  methods: {
    validate() {
      _.forEach(this.$v.$params, (value, key) => {
        this.$v[key].$touch();
      });
    },
  },
};
</script>
