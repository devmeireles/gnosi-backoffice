<template>
  <div class="custom-modal" :class="visible ? '' : 'hide'">
    <div class="col-md-6 mx-auto pt-6 mt-6 mx-auto">
      <div class="card border-0 mb-0">
        <div class="ml-auto">
          <button type="button" class="close pt-3 pr-2" aria-label="Close" @click="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="card-body px-lg-5 py-lg-5">
          <CategoriesForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesForm from '@/views/app/categories/form';

export default {
  name: 'Modal',
  components: {
    CategoriesForm,
  },
  data() {
    return {
      visible: false,
    };
  },
  created() {
    this.$bus.on(this.$events.OPEN_MODAL, this.show);
    this.$bus.on(this.$events.CLOSE_MODAL, this.close);
  },
  methods: {
    close() {
      this.visible = false;
      this.$bus.emit(this.$events.CLEAR_FORM);
    },

    show() {
      this.visible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
  .custom-modal {
    background: rgb(6 6 6 / 44%);
    height: 100vh;
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 9999;
    &.hide{
      display: none;
    }
    .card {
      box-shadow: 0 0 2rem 0 rgba(143, 136, 170, 0.15);
    }
  }
</style>
