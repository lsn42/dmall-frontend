<template>
  <div class="header">
    <a href="/" target="_self">
      <img src="@/assets/image/tmall/logo2.png" />
    </a>
    <el-steps :active="1" finish-status="success">
      <el-step title="拍下商品"></el-step>
      <el-step title="付款到支付宝"></el-step>
      <el-step title="确认收货"></el-step>
      <el-step title="评价"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  padding: 22px 0px;
  height: 44px;
  width: 1190px;
  margin: auto;
  display: flex;
  img {
    margin-top: 8px;
    width: 190px;
  }
}
</style>