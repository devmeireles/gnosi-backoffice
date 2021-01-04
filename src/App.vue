<template>
  <div class="app">
    <Notification />
    <router-view />
  </div>
</template>

<script>
import Notification from '@/components/ui/Notification';

export default {
  name: 'App',
  components: {
    Notification,
  },
};

</script>
