<template>
  <div class="input-field">
    <div class="input-group input-group-merge input-group-alternative">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <i :class=icon></i>
        </span>
      </div>
      <input
        class="form-control"
        :placeholder="placeholder"
        :type="type"
        v-model="inputValue"
      />
    </div>
    <div class="input-error mt-2" v-if="errorMsg.length > 0">
      <span class="badge badge-danger" v-for="(error, i) in errorMsg" :key="i">
        {{error}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    placeholder: {
      type: String,
      default: '',
      required: false,
    },
    type: {
      type: String,
      default: 'text',
      required: false,
    },
    icon: {
      type: String,
      default: '',
      required: false,
    },
    value: {
      type: String,
      default: '',
      required: false,
    },
    errorMsg: {
      type: [Array, Function],
      default: () => [],
      required: false,
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  watch: {
    inputValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>
