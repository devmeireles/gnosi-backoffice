<template>
  <div>
    <Sidebar />
    <div id="panel" class="main-content">
      <Navbar />
    </div>
    <div style="margin-left: 250px">
      <div class="header bg-primary pb-6">
        <div class="container-fluid">
          <div class="header-body">
            <div class="row align-items-center py-4">
              <div class="col-lg-6 col-5 ml-auto text-right">
                <button
                  type="button"
                  class="btn btn-sm btn-neutral"
                  v-if="this.$route.meta.single !== 'dashboard'"
                  @click="openModal()"
                >
                  <span>
                    <i class="ni ni-fat-add"></i>
                    New {{ this.$t(getSingle()) }}
                  </span>
                </button>
                <a href="#" class="btn btn-sm btn-neutral">Filters</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid mt--6">
        <div class="col">
          <div class="card">
            <div class="card-header bg-transparent">
              <h3 class="mb-0">{{ this.$t(getBreadCrumb()) }}</h3>
            </div>
            <div class="card-body">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/shared/Sidebar';
import Navbar from '@/components/shared/Navbar';
import NotificationService from '@/services/NotificationService';

export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar,
  },
  methods: {
    getBreadCrumb() {
      return this.$route.meta.namespace;
    },

    getSingle() {
      return this.$route.meta.single;
    },

    openModal() {
      NotificationService.showModal();
    },
  },
};
</script>

<style src='@/assets/nucleo/css/nucleo.css'></style>
<style src='@/assets/argon.css'></style>
<style src='@/assets/all.min.css'></style>
