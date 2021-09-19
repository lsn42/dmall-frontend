<template>
  <a class="item">
    <img :src="info.smallimage" :alt="info.name" />
    <div class="title">{{ info.title }}</div>
    <div class="price">{{ "￥" + info.price }}</div>
  </a>
</template>
<script>
export default {
  name: "MallFloorItem",
  props: ["info"],
};
</script>
<style lang="scss">
.item {
  width: 235px;
  height: 301px;
  margin-left: 13px;
  text-align: center;
  float: left;
  display: block;
  border-bottom: 15px solid #f5f5f5;
  position: relative;
  background-color: #fff;
  img {
    padding-top: 20px;
    width: 185px;
    height: 185px;
  }
  .title {
    display: block;
    width: 135px;
    height: 40px;
    font-size: 14px;
    color: #333;
    line-height: 20px;
    overflow: hidden;
    margin: 8px auto;
  }
  .price {
    display: block;
    font-size: 18px;
    color: #ff0036;
    line-height: 18px;
    margin: 10px auto;
  }
}
.item:hover {
  border: 1px solid #ff0036;
  cursor: pointer;
}
</style>