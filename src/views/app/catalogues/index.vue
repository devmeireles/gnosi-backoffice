<template>
  <div>
    <h1>INDEX from catalogues</h1>
  </div>
</template>

<script>
export default {
  name: 'Catalogues',
  created() {
    console.log(this.$store.state.Data);
  },
};
</script>
