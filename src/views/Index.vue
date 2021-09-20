<template>
  <div class="index">
    <Navigator />
    <div class="header">
      <img src="@/assets/tmall/logo.png" />
      <Search />
    </div>
    <div class="main">
      <div class="nav">
        <div class="nav-title">
          <img src="@/assets/tmall/index/header_nav_title.png" alt="menu icon" />
          <span>商品分类</span>
        </div>
        <a href="https://chaoshi.tmall.com/" target="_blank">
          <img src="@/assets/tmall/index/supermarket.png" alt="tmall supermarket" />
        </a>
        <a href="https://www.tmall.hk/" target="_blank">
          <img
            src="@/assets/tmall/index/international.png"
            alt="tmall international"
          />
        </a>
        <a href="http://vip.tmall.com/" target="_blank">天猫会员</a>
        <a href="https://3c.tmall.com/" target="_blank">电器城</a>
        <a href="https://miao.tmall.com/" target="_blank">喵鲜生</a>
        <a href="http://yao.tmall.com/" target="_blank">医药馆</a>
        <a href="http://wt.tmall.com/" target="_blank">营业厅</a>
        <a href="https://meilihui.tmall.com/" target="_blank">魅力惠</a>
        <a href="https://www.alitrip.com/" target="_blank">飞猪旅行</a>
        <a href="https://suning.tmall.com/" target="_blank">苏宁易购</a>
      </div>
      <div class="menu">
        <ul class="banner_nav">
          <li v-for="c in categories" :key="c.category.id">
            <img :src="c.category.imgSrc" />
            <a :href="'/catagory/' + c.category.id">{{ c.category.name }}</a>
          </li>
        </ul>
      </div>
      <el-carousel class="carousel">
        <el-carousel-item v-for="ad in advertisements" :key="ad.id">
          <a :href="ad.url">
            <img :src="ad.pic" :alt="ad.title" />
          </a>
        </el-carousel-item>
      </el-carousel>
      <div class="floors">
        <MallFloor v-for="f in floors" :key="f.category.id" :info="f" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigator from "@/components/Navigator.vue";
import Footer from "@/components/Footer.vue";
import MallFloor from "@/components/Index/MallFloor.vue";
import Search from "@/components/Search.vue";
const axios = require("axios");
axios.defaults.baseURL = "/api";
export default {
  data() {
    return {
      categories: [],
      advertisements: [],
      floors: [],
    };
  },
  components: {
    Navigator: Navigator,
    Footer: Footer,
    MallFloor: MallFloor,
    Search: Search,
  },
  methods: {},
  created() {
    axios.get("ad").then((response) => {
      this.advertisements = response.data.extend.advertisements;
    });
    axios.get("product/findProductsByCategory").then((response) => {
      this.floors = response.data.extend.floors;
    });
    axios.get("category/productCategories").then((response) => {
      this.categories = response.data.extend.categories;
    });
  },
};
</script>

<style lang="scss" scoped>
body {
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  background-color: #fff;
}
a {
  text-decoration: none;
}
.header {
  width: 1200px;
  height: 130px;
  margin: auto;
  display: block;
  img {
    float: left;
    width: 240px;
    height: 130px;
  }
}
.main {
  margin-top: 0px;
  padding-top: 0px;
  .nav {
    white-space: nowrap;
    position: relative;
    font-size: 0;
    padding-top: 0;
    height: 35.5px;
    background-color: #fff;
    border-style: solid;
    border-width: 0 0 1.5px;
    border-color: #ff0036;
    width: 1200px;
    margin: auto;
    .nav-title {
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
      color: #333333;
      letter-spacing: normal;
      position: relative;
      line-height: 37px;
      img {
        width: 100px;
        height: 30px;
        margin-top: 3px;
        display: block;
      }
    }
    a:hover {
      color: #ff0036;
      text-decoration: none;
    }
  }
  .carousel {
    .el-carousel__item {
      font-size: 14px;
      line-height: 150px;
      margin: 0;
    }
  }
  .floors {
    width: 100%;
    padding-top: 35px;
    background-color: #f5f5f5;
    padding-bottom: 10px;
  }
}
::v-deep .el-carousel__indicators {
  height: 5px;
  margin-bottom: 40px;
}
::v-deep .el-carousel__indicator {
  background: #000;
  width: 20px;
  height: 5px !important;
  cursor: pointer;
  opacity: 0.3;
  padding: 0 12px;
}
::v-deep .el-carousel__indicator.is-active {
  background: #000;
  width: 20px;
  height: 5px !important;
  cursor: pointer;
  opacity: 0.6;
  padding: 0 12px;
}
</style>