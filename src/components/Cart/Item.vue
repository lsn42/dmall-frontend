<template>
  <div class="item">
    <div class="upper">
      <el-checkbox v-model="is_selected" @change="select"></el-checkbox>
      <span class="shop_name">{{ item.shop }}旗舰店</span>
      <span class="wangwang"></span>
      <span class="coupon"></span>
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
          @change="change_count"
          label="描述文字"
        ></el-input-number>
      </div>
      <div class="total_price">
        <p class="total">{{ item.price * item.count }}</p>
      </div>
      <div class="operation">
        <a>移入收藏夹</a>
        <a>删除</a>
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
      is_selected: false,
    };
  },
  methods: {
    select() {
      console.log(this.is_selected);
      // this.$emit("select");
    },
    change_count() {
      console.log(this.item.count);
      // this.$emit("change_count", this.item.count);
    },
    destory() {
      this.$emit("destory");
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  border: 1px solid #ccc;
}
</style>