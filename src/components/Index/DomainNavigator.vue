<template>
  <nav class="domain_navigator">
    <div class="title">
      <img src="@/assets/tmall/index/header_nav_title.png" alt="menu icon" />
      <span>商品分类</span>
    </div>
    <a href="https://chaoshi.tmall.com/" target="_blank">
      <img src="@/assets/tmall/index/supermarket.png" alt="supermarket" />
    </a>
    <a href="https://www.tmall.hk/" target="_blank">
      <img src="@/assets/tmall/index/international.png" alt="international" />
    </a>
    <a href="http://vip.tmall.com/" target="_blank">天猫会员</a>
    <a href="https://3c.tmall.com/" target="_blank">电器城</a>
    <a href="https://miao.tmall.com/" target="_blank">喵鲜生</a>
    <a href="http://yao.tmall.com/" target="_blank">医药馆</a>
    <a href="http://wt.tmall.com/" target="_blank">营业厅</a>
    <a href="https://meilihui.tmall.com/" target="_blank">魅力惠</a>
    <a href="https://www.alitrip.com/" target="_blank">飞猪旅行</a>
    <a href="https://suning.tmall.com/" target="_blank">苏宁易购</a>
  </nav>
</template>

<script>
export default {
  name: "DomainNavigator",
};
</script>

<style lang="scss" scoped>
.domain_navigator {
  white-space: nowrap;
  font-size: 0;
  padding-top: 0;
  height: 35.5px;
  background-color: #fff;
  border-style: solid;
  border-width: 0 0 1.5px;
  border-color: #ff0036;
  width: 61.803%;
  margin: auto;
  .title {
    margin-left: 20px;
    background: #ff0036;
    width: 200px;
    float: left;
    height: 36px;
    img {
      vertical-align: middle;
      margin-left: 14px;
      margin-top: -5px;
    }
    span {
      display: inline-block;
      line-height: 38px;
      margin-left: 8px;
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
    }
  }
  a {
    height: 35px;
    cursor: pointer;
    float: left;
    padding: 0 8px;
    font-weight: 500;
    font-size: 16px;
    display: block;
    color: #333;
    letter-spacing: normal;
    position: relative;
    line-height: 37px;
    text-decoration: none;
    img {
      width: 100px;
      height: 30px;
      margin-top: 3px;
      display: block;
    }
  }
  a:hover {
    color: #ff0036;
  }
}
</style>