<template>
  <div class="header-right">
    <span class="platform-name">后台管理系统</span>
    <span class="role">
      <i class="role-phone">18688886666</i>
      <i class="role-type">平台管理员</i>
    </span>
    <span class="logout-btn" @click="logout">退出</span>
  </div>
</template>
<script>
export default {
  methods: {
    logout () {
      this.$store.commit('changeToken', '')
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.header-right {
  flex: 1;
  display: flex;
  padding: 0 20px;
  border-bottom: 1px solid #E4E7ED;
  line-height: 80px;
}
.platform-name {
  flex: 1;
  font-size: 18px;
  color: rgb(52, 73, 94);
}
.role {
  padding-left: 20px;
  padding-right: 40px;
  font-size: 14px;
  color: #99a3ae;
  background: url('./../images/role.png') no-repeat left center;
}
.role i {
  font-style: normal;
}
.role-phone {
  padding-right: 5px;
}
.logout-btn {
  padding-left: 20px;
  font-size: 14px;
  color: #99a3ae;
  background: url('./../images/logout.png') no-repeat left center;
}
</style>