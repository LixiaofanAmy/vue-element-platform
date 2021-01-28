<template>
  <el-menu class="menu" :router="true" :default-active="nodeCode" text-color="#99a3ae" active-text-color="#fff" background-color="#34495e">
    <menu-item :menuTree="menuTree"></menu-item>
  </el-menu>
</template>
<script>
import MenuItem from './MenuItem.vue'
export default {
  name: 'Menu',
  data () {
    return {
      menuTree: []
    }
  },
  computed: {
    nodeCode () {
      return this.$store.state.nodeCode
    }
  },
  components: {
    MenuItem,
  },
  mounted () {
    this.getMenu().then(() => {
      const oMenu = this.getDefaultMenu()
      this.$store.commit('changeFirstMenu', {
        oMenu,
        path: this.$route.path
      })
    })
  },
  methods: {
    getMenu () {
      return this.axios.get('/mock/menu.json').then(res => {
        res = res.data
        if (res.code === 200) {
          this.menuTree = res.data
        }
      })
    },
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