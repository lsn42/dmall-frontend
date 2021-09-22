<template>
  <div class="item">
    <div class="upper">
      <span class="shop_name">{{ item.shop }}旗舰店</span>
    </div>
    <div class="lower">
      <div class="image">
        <img :src="item.img" />
      </div>
      <div class="info">
        <p class="title">{{ item.name }}</p>
        <div class="service"></div>
      </div>
      <div class="price">
        <p>{{ item.price }}</p>
      </div>
      <div class="count">
        <el-input-number
          v-model="count"
          :min="1"
          :max="item.max_count"
          label="描述文字"
        ></el-input-number>
      </div>
      <div class="total_price">
        <p class="total">{{ item.price * item.count }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["item"],
  data() {
    return {
      count: 0,
    };
  }
};
</script>

<style lang="scss" scoped>
.item {
  border: 1px solid #ccc;
}
</style>