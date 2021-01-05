<template>
  <div>
    <Modal />
    <Table
      :header="header"
      :action="'Data/Categories/list'"
    />
  </div>
</template>

<script>
import Table from '@/components/shared/table/Table';
import Modal from '@/components/ui/Modal';

export default {
  name: 'Categories',
  components: {
    Table,
    Modal,
  },
  data() {
    return {
      header: [
        {
          name: 'Name',
          field: 'name',
        },
        {
          name: 'Slug',
          field: 'slug',
        },
        {
          name: 'Description',
          field: 'description',
        },
        {
          name: 'Status',
          field: 'status',
        },
      ],
    };
  },

  methods: {
  },
};
</script>
