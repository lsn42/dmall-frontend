<template>
  <div class="mall_floor">
    <div class="title">
      <span class="mark"></span>
      <div class="name">{{ info.category.name }}</div>
    </div>
    <div class="body">
      <a :href="'/list/' + info.category.id">
        <img
          :src="
            'api/images/fore/WebsiteImage/show/' +
            info.category.id +
            '.jpg'
          "
          :alt="info.category.name"
        />
      </a>
      <div class="show">
        <MallFloorItem v-for="p in info.products" :key="p.id" :info="p" />
      </div>
    </div>
  </div>
</template>
<script>
import MallFloorItem from "@/components/Index/MallFloorItem.vue";
export default {
  name: "MallFloor",
  props: ["info"],
  components: {
    MallFloorItem: MallFloorItem,
  },
};
</script>
<style lang="scss" scoped>
.mall_floor {
  margin-top: 20px;
  width: 100%;
  overflow: hidden;
  .title {
    padding: 10px 0;
    .mark {
      display: inline-block;
      width: 5px;
      height: 18px;
      line-height: 38px;
      background-color: rgb(99, 71, 237);
    }
    .name {
      display: inline-block;
      position: relative;
      bottom: 2px;
      padding-left: 10px;
      font-family: "Microsoft YaHei";
      font-size: 18px;
      color: #000000;
      margin: 0;
    }
  }
  .body {
    width: 100%;
    height: 618px;
    margin-top: 10px;
    margin: 0 auto;
    text-align: center;
    display:flex;
    img {
      float: left;
      position: relative;
      width: 235px;
      height: 618px;
      display: block;
      cursor: pointer;
    }
    .show {
      height: 618px;
      overflow: hidden;
    }
  }
}
</style>