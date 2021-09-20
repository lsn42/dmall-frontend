<template>
  <div class="category">
    <Navigator />
    <div class="header">
      <img src="@/assets/tmall/logo.png" />
      <Search />
    </div>
    <div class="main">
      <div v-if="is_found">
        <SortBar />
        <Show :products="products.list" />
      </div>
      <div v-else>
        <NotFound />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigator from "@/components/Navigator.vue";
import Footer from "@/components/Footer.vue";
import Search from "@/components/Search.vue";
import SortBar from "@/components/List/SortBar.vue";
import Show from "@/components/List/Show.vue";
import NotFound from "@/components/List/NotFound.vue";
const axios = require("axios");
axios.defaults.baseURL = "/api";
export default {
  data() {
    return {
      is_found: true,
      products: {},
    };
  },
  components: {
    Navigator: Navigator,
    Footer: Footer,
    Search: Search,
    SortBar: SortBar,
    Show: Show,
    NotFound: NotFound,
  },
  methods: {},
  created() {
    let url = "product/findAllByCategory/first/" + this.$route.params.id;
    axios.get(url).then((response) => {
      this.products = response.data.extend.pageInfo;
      console.log(this.products.list);
    });
  },
};
</script>
<style lang="scss" scoped>
.category {
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
}
</style>