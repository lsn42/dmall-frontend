<template>
  <div class="item">
    <div class="upper">
      <el-checkbox v-model="is_selected"></el-checkbox>
      <span class="shop_name"></span>
      <span class="wangwang"></span>
      <span class="coupon"></span>
    </div>
    <div class="lower">
      <div class="image"></div>
      <div class="info">
        <p class="title"></p>
        <div class="service"></div>
      </div>
      <div class="favor"></div>
      <div class="price">
        <p class="origin"></p>
        <p class="sale"></p>
      </div>
      <div class="count">
        <el-input-number
          v-model="num"
          @change="handleChange"
          :min="1"
          :max="10"
          label="描述文字"
        ></el-input-number>
      </div>
      <div class="total_price">
        <p class="total"></p>
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
  props: ["info", "is_selected", "status"],
  methods: {
    destory() {
      this.status = "delete";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>