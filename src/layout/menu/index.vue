<template>
  <el-menu class="menu" :router="true" :default-active="nodeCode" text-color="#99a3ae" active-text-color="#fff" background-color="#34495e">
    <menu-item :menuTree="menuTree"></menu-item>
  </el-menu>
</template>
<script>
import menuTree from './menu.js'
import MenuItem from './MenuItem.vue'
export default {
  name: 'Menu',
  computed: {
    menuTree () {
      return this.$store.state.menuTree
    },
    nodeCode () {
      return this.$store.state.nodeCode
    }
  },
  components: {
    MenuItem,
  },
  mounted () {
    this.$store.commit('changeMenuTree', menuTree)
    const oMenu = this.getDefaultMenu()
    this.$store.commit('changeFirstMenu', oMenu)
  },
  methods: {
    getDefaultMenu () {
      const findMenuUrl = (oMenu) => {
        if (oMenu.childNodes.length === 0) {
          return oMenu
        } else {
          return findMenuUrl(oMenu.childNodes[0])
        }
      }
      return findMenuUrl(this.menuTree[0])
    }
  }
}
</script>
<style scoped>
.menu {
  border-right: 0;
}
</style>