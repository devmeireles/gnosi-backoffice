<template>
  <div class="table-responsive">
    <table class="table align-items-center table-flush">
      <thead class="thead-light">
        <tr>
          <th scope="col" v-for="item in header" :key="item.field">{{item.name}}</th>
        </tr>
      </thead>
      <tbody class="list">
        <tr v-for="item in items" :key="item.field">
          <td scope="col">{{item.title}}</td>
          <td scope="col">{{item.slug}}</td>
          <td scope="col">{{item.description}}</td>
          <td scope="col">{{item.status}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      items: [],
    };
  },
  props: {
    header: {
      type: [Array, Function],
      default: () => [],
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
  methods: {
    async callList() {
      const response = await this.$store.dispatch('Data/Categories/list');
      this.items = response.data.data;
    },
  },
  async created() {
    await this.callList();
    this.$bus.on(this.$events.UPDATE_TABLE, this.callList);
  },
};
</script>
