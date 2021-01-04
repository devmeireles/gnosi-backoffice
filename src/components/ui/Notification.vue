<template>
  <div class="notification w-100" v-if="snackbar">
    <div class="notification-content col-6 mx-auto">
      <div :class="['alert', color, 'fade', 'show']" role="alert">
        <span class="alert-icon">
          <i class="ni ni-notification-70"></i>
        </span>
        <span class="alert-text">{{ text }}</span>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  data() {
    return {
      color: '',
      snackbar: false,
      text: '',
    };
  },
  created() {
    this.$bus.on(this.$events.SHOW_SNACKBAR, this.show);
  },
  methods: {
    show(color, text) {
      this.text = text;
      this.color = `alert-${color}`;
      this.snackbar = true;
    },
    close() {
      this.text = '';
      this.color = '';
      this.snackbar = false;
    },
  },
};
</script>

<style lang="css" scoped>
  .notification {
    position: absolute;
    top: 0px;
    z-index: 100;
  }
</style>
