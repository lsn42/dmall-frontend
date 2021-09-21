<template>
  <div class="detail">
    <el-tabs v-model="active">
      <el-tab-pane label="商品详情" name="detail">
        <img v-for="i in detail_images" :key="i.id" :src="i.src" />
      </el-tab-pane>
      <el-tab-pane name="review">
        <span slot="label">
          累计评价
          <!-- <p>{{ product.reviewCount }}</p> -->
        </span>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ["images", "promise"],
  data() {
    return {
      active:"detail",
      detail_images: [],
    };
  },
  created() {
    this.promise.then(() => {
      this.detail_images = this.images;
    });
  },
};
</script>

<style lang="scss" scoped>
.detail {
  img {
    display: block;
  }
}
</style>