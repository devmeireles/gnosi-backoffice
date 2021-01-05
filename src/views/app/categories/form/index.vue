<template>
  <div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Title</label>
      <InputField
        :placeholder="$t('title')"
        :type="'text'"
        v-model="title"
        :error-msg="getErrors($v.title)"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Description</label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        v-model="description"
      ></textarea>
    </div>

    <div class="form-group row">
      <div class="ml-auto pr-3">
        <button class="btn btn-icon btn-primary" type="button" @click="save()">
          <span class="btn-inner--icon"><i class="fas fa-save"></i></span>
          <span class="btn-inner--text">Save</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import validationMixin from '@/mixins/ValidationMixin';
import { required, minLength } from 'vuelidate/lib/validators';
import CategoriesService from '@/services/CategoriesService';
import InputField from '@/components/ui/InputField';

export default {
  name: 'CategoriesForm',
  mixins: [validationMixin],
  components: {
    InputField,
  },
  data() {
    return {
      title: '',
      description: '',
    };
  },
  validations: {
    title: { required, minLength: minLength(3) },
    description: { required, minLength: minLength(6) },
  },
  methods: {
    async save() {
      this.validate();
      if (!this.$v.$invalid) {
        try {
          this.loading = true;
          await CategoriesService.save(this.title, this.description);
          this.$bus.emit(this.$events.UPDATE_TABLE);
          this.$bus.emit(this.$events.CLOSE_MODAL);
        } catch (err) {
          console.log(err);
        } finally {
          this.loading = false;
        }
      }
    },

    close() {
      this.$v.$reset();
      this.title = '';
      this.description = '';
    },
  },
  created() {
    this.$bus.on(this.$events.CLEAR_FORM, this.close);
  },
};
</script>
