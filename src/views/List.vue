<template>
  <div class="list">
    <UserNavigator />
    <SearchBar />
    <div class="main">
      <div v-if="is_found">
        <SortBar />
        <div class="show">
          <Item v-for="p in products.list" :key="p.id" :product="p" />
        </div>
      </div>
      <div v-else>
        <NotFound />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "/api";
////////////////////////////////////////////////////////////////////////////////
function get_all_product_by_first_category_id(that, id) {
  that;
  return axios.get("/product/findAllByCategory/first/" + id);
}
import UserNavigator from "@/components/UserNavigator.vue";
import SearchBar from "@/components/List/SearchBar.vue";
import SortBar from "@/components/List/SortBar.vue";
import Item from "@/components/List/Item.vue";
import NotFound from "@/components/List/NotFound.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      is_found: true,
      products: {},
    };
  },
  components: {
    UserNavigator: UserNavigator,
    Footer: Footer,
    SearchBar: SearchBar,
    SortBar: SortBar,
    Item: Item,
    NotFound: NotFound,
  },
  methods: {},
  created() {
    get_all_product_by_first_category_id(this, this.$route.params.id).then(
      (res) => {
        this.products = res.data.extend.pageInfo;
        console.log(this.products);
      }
    );
  },
};
</script>
<style lang="scss" scoped>
.list {
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
    margin: 0 auto;
    width: 61.803%;
    .show {
      display: flex;
      flex-flow: row wrap;
      width: 1210px;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
}
</style>