<template>
  <div class="index">
    <UserNavigator />
    <Search :categories="categories" />
    <div class="main">
      <DomainNavigator />
      <div class="display">
        <Menu :categories="categories" class="category" />
        <el-carousel class="ads" height="500">
          <el-carousel-item v-for="ad in advertisements" :key="ad.id">
            <a :href="ad.url">
              <img :src="ad.pic" :alt="ad.title" />
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="floors">
        <MallFloor v-for="f in floors" :key="f.category.id" :info="f" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "/api";
////////////////////////////////////////////////////////////////////////////////
function get_advertisements(that) {
  that;
  return axios.get("ad");
}
function get_floors(that) {
  that;
  return axios.get("product/findProductsByCategory");
}
function get_categories(that) {
  that;
  return axios.get("category/productCategories");
}
import UserNavigator from "@/components/UserNavigator.vue";
import Search from "@/components/Index/Search.vue";
import DomainNavigator from "@/components/Index/DomainNavigator.vue";
import Menu from "@/components/Index/Menu.vue";
import MallFloor from "@/components/Index/MallFloor.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      categories: [],
      advertisements: [],
      floors: [],
    };
  },
  components: {
    UserNavigator: UserNavigator,
    Search: Search,
    DomainNavigator: DomainNavigator,
    Menu: Menu,
    MallFloor: MallFloor,
    Footer: Footer,
  },
  methods: {},
  created() {
    get_advertisements(this).then((response) => {
      this.advertisements = response.data.extend.advertisements;
    });
    get_floors(this).then((response) => {
      this.floors = response.data.extend.floors;
    });
    get_categories(this).then((response) => {
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
.main {
  margin-top: 0px;
  padding-top: 0px;

  .display {
    width: 61.803%;
    height: 500px;
    margin: 0 auto;
    .category {
      position: absolute;
      z-index: 1;
      margin-top: 0px;
      margin-right: 0px;
    }
    .ads {
      position: absolute;
      z-index: 0;
      width: 1230px;
      margin-top: 0px;
      margin-right: 200px;
    }
  }
  .floors {
    width: 1230px;
    margin: 0 auto;
    padding-top: 35px;
    background-color: #f5f5f5;
    padding-bottom: 10px;
  }
}
::v-deep .el-carousel__container {
  height: 500px;
}
</style>