<template>
  <el-container class="layout-container">
    <el-header class="layout-header" height="80px">
      <header-left></header-left>
      <header-right></header-right>
    </el-header>
    <el-container>
      <el-aside class="layout-aside" width="240px">
        <left-menu></left-menu>
      </el-aside>
      <el-main>
        <right-main></right-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HeaderLeft from '@/layout/header/HeaderLeft.vue'
import HeaderRight from '@/layout/header/HeaderRight.vue'
import LeftMenu from '@/layout/menu'
import RightMain from '@/layout/main'
export default {
  name: 'Layout',
  components: {
    HeaderLeft,
    HeaderRight,
    LeftMenu,
    RightMain
  }
}
</script>

<style scoped>
.layout-container {
  height: 100%;
}
.layout-header {
  display: flex;
  padding: 0;
}
.layout-aside {
  background-color: #34495e;
}
</style>
