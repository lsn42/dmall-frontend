<template>
  <div class="gallery">
    <img :src="current_src" />
    <el-menu
      default-active="0"
      class="select"
      mode="horizontal"
      menu-trigger="hover"
      @select="change"
    >
      <el-menu-item v-for="(i, j) in images" :key="j" :index="j.toString()">
        <img slot="title" :src="i.src" />
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: ["images", "promise"],
  data() {
    return {
      selected: 0,
      current_src: "",
    };
  },
  methods: {
    change(key) {
      this.selected = key;
      this.current_src = this.images[this.selected].src;
    },
  },
  created() {
    this.promise.then(() => {
      this.current_src = this.images[this.selected].src;
    });
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  width: 460px;
  padding: auto;
  img {
    width: 420px;
    height: 420px;
  }
  .select {
    border-bottom: none;
    width: 420px;
    margin: 0 auto;
    .el-menu-item {
      margin: 0 0 0 16px;
      padding-top: 22px;
      padding-left: 0;
      width: 60px;
      height: 100%;
    }
    .el-menu-item.is-active {
      border: none;
    }
    .is-active {
      img {
        border: 2px solid #409eff;
      }
    }
    img {
      width: 60px;
      height: 60px;
      margin-right: 0;
      margin-bottom: 0;
    }
  }
}
</style>