<template>
  <el-menu
    class="menu"
    :router="true"
    :default-active="nodeCode"
    text-color="#99a3ae"
    active-text-color="#fff"
    background-color="#34495e"
  >
    <menu-item :menuTree="menuTree"></menu-item>
  </el-menu>
</template>
<script>
import MenuItem from './MenuItem.vue'
import { getMenu } from '@/apis/layout'
export default {
  name: 'Menu',
  data() {
    return {
      menuTree: []
    }
  },
  computed: {
    nodeCode() {
      return this.$store.state.nodeCode
    }
  },
  components: {
    MenuItem
  },
  mounted() {
    this.getMenu().then(() => {
      const oMenu = this.getDefaultMenu()
      this.$store.commit('changeFirstMenu', {
        oMenu,
        menuName: this.$route.name
      })
    })
  },
  methods: {
    getMenu() {
      return getMenu().then(res => {
        this.menuTree = res.data
      })
    },
    getDefaultMenu() {
      const findMenuUrl = oMenu => {
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