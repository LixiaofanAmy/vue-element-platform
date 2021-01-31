<template>
  <div class="main-box">
    <div class="search">
      <div class="search-title">查询条件</div>
      <div class="search-form">
        <slot name="form"></slot>
      </div>
    </div>
    <div class="button">
      <slot name="button"></slot>
    </div>
    <div class="result">
      <slot name="result"></slot>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="currentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainBox',
  props: ['total'],
  methods: {
    currentChange(pageNum) {
      console.log(pageNum)
      this.$emit('tablehanddler', pageNum)
    }
  }
}
</script>

<style scoped>
.main-box {
  padding: 20px;
}
.search-title {
  padding: 10px 0;
  font-size: 14px;
  color: #475669;
}
.search-form {
  padding: 20px;
  background-color: #f7f8fb;
}
.button {
  padding: 20px 0;
}
.pagination {
  padding-top: 10px;
  text-align: right;
}
</style>