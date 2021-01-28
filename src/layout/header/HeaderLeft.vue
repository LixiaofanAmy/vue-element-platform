<template>
  <div class="header-left">
    <span class="company-logo"><img :src="companyLogo"></span>
    <span class="company-name">李小凡Amy家</span>
  </div>
</template>
<script>
export default {
  name: 'HeaderLeft',
  data () {
    return {
      companyLogo: require('@/assets/logo.png')
    }
  }
}
</script>
<style scoped>
.header-left {
  display: flex;
  width: 200px;
  height: 40px;
  padding: 20px;
  line-height: 40px;
  font-size: 14px;
  color: #fff;
  background-color: rgb(44, 62, 80);
}
.company-logo img {
  width: 40px;
  height: 40px;
  border-radius: 4px; 
}
.company-name {
  padding-left: 10px;
}
</style>