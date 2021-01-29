<template>
  <div class="layout-container">
    <div class="layout-aside">
      <layout-aside></layout-aside>
    </div>
    <div class="layout-container layout-container-direction layout-container-flex">
      <div class="layout-header">
        <layout-header></layout-header>
      </div>
      <div class="layout-main">
        <layout-main></layout-main>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutAside from '@/layout/menu'
import LayoutHeader from '@/layout/header'
import LayoutMain from '@/layout/main'
export default {
  name: 'Layout',
  components: {
    LayoutHeader,
    LayoutAside,
    LayoutMain
  }
}
</script>

<style scoped>
.layout-container {
  height: 100%;
  display: flex;
}
.layout-container-direction {
  flex-direction: column;
}
.layout-container-flex {
  flex: 1;
}
.layout-aside {
  width: 200px;
  background-color: #34495e;
}
.layout-header {
  height: 80px;
}
.layout-main {
  flex: 1;
  overflow: hidden;
}
</style>
