<template>
  <nav
    class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white"
    id="sidenav-main"
  >
    <div class="scroll-wrapper scrollbar-inner" style="position: relative">
      <div
        class="scrollbar-inner scroll-content"
        style="
          height: 884px;
          margin-bottom: 0px;
          margin-right: 0px;
          max-height: none;
        "
      >
        <!-- Brand -->
        <div class="sidenav-header align-items-center">
          <a class="navbar-brand" href="javascript:void(0)">
            <!-- <img
              src="../assets/img/brand/blue.png"
              class="navbar-brand-img"
              alt="..."
            /> -->
          </a>
        </div>
        <div class="navbar-inner">
          <!-- Collapse -->
          <div class="collapse navbar-collapse" id="sidenav-collapse-main">
            <!-- Nav items -->
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  @click=" () => {
                      $router.push({
                        name: $consts.ROUTES.DASHBOARD.NAME,
                      });
                    }"
                  >
                  <i class="ni ni-tv-2 text-primary"></i>
                  <span class="nav-link-text">Dashboard</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  @click=" () => {
                      $router.push({
                        name: $consts.ROUTES.CATEGORIES.NAME,
                      });
                    }"
                  >
                  <i class="ni ni-planet text-orange"></i>
                  <span class="nav-link-text">Categories</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  @click=" () => {
                      $router.push({
                        name: $consts.ROUTES.CATALOGUES.NAME,
                      });
                    }"
                  >
                  <i class="ni ni-send text-dark"></i>
                  <span class="nav-link-text">Catalogues</span>
                </a>
              </li>
            </ul>
            <!-- Navigation -->
          </div>
        </div>
      </div>
      <div class="scroll-element scroll-x">
        <div class="scroll-element_outer">
          <div class="scroll-element_size"></div>
          <div class="scroll-element_track"></div>
          <div class="scroll-bar" style="width: 0px"></div>
        </div>
      </div>
      <div class="scroll-element scroll-y">
        <div class="scroll-element_outer">
          <div class="scroll-element_size"></div>
          <div class="scroll-element_track"></div>
          <div class="scroll-bar" style="height: 0px; top: 0px"></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>
