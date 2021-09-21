<template>
  <div class="item">
    <div class="wrap">
      <div class="image">
        <a :href="'/product/' + product.id">
          <img :src="product.smallimage" :alt="product.name" />
        </a>
      </div>
      <div class="price">
        <div class="currency">￥</div>
        <div class="number">{{ product.price }}</div>
      </div>
      <div class="title">{{ product.title }}</div>
      <div class="shop">{{ product.id + " 旗舰店" }}</div>
      <div class="status">
        <div class="deals">{{ product.buyCount }}</div>
        <div class="review">{{ product.reviewCount }}</div>
        <div class="wangwang"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Item",
  props: ["product"],
};
</script>

<style lang="scss" scoped>
.item {
  width: 220px;
  height: 333px;
}
</style>