<template>
  <div class="login">
    <el-form class="login-form" :model="loginForm">
      <div class="login-title">后台管理系统</div>
      <el-form-item prop="mobileNo" label="用户名">
        <el-input v-model="loginForm.mobileNo" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item class="login-btn-wrap">
        <el-button class="login-btn" type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        mobileNo: '',
        password: ''
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.commit('changeToken', '')
    })
  },
  methods: {
    login () {
      this.$store.commit('changeToken', 'auth-token1')
      this.$router.push('/views')
    }
  }
}
</script>
<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(44, 62, 80);
}
.login-form {
  width: 300px;
  padding: 70px 60px 70px 60px;
  border-radius: 10px;
  box-shadow: 2px 1px 6px 0px rgba(0, 0, 0, 0.2);
  background-color: #fff;
}
.login-title {
  padding-bottom: 25px;
  font-size: 24px;
  color: #2c3e50;
}
.login-btn-wrap {
  padding-top: 20px;
}
.login-btn {
  width: 100%;
}
</style>