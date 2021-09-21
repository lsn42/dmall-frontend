<template>
  <div class="product">
    <UserNavigator />
    <div class="header">
      <SearchBar />
      <img :src="shop_image" />
    </div>
    <div class="main">
      <div class="column">
        <Gallery :images="gallery_images" :promise="promise" />
        <Info
          :product="product"
          :promise="promise"
          @buy="buy"
          @cart="cart"
        />
        <div class="advertisement_column"></div>
      </div>
      <div class="row">
        <div class="advertisement_row"></div>
      </div>
      <Detail class="detail" :images="detail_images" :promise="promise" />
    </div>
    <Footer />
  </div>
</template>

<script>
import * as net from "@/utils/net.js";
import UserNavigator from "@/components/UserNavigator.vue";
import SearchBar from "@/components/Product/SearchBar.vue";
import Gallery from "@/components/Product/Gallery.vue";
import Info from "@/components/Product/Info.vue";
import Detail from "@/components/Product/Detail.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      product: {},
      shop_image: "",
      gallery_images: [],
      detail_images: [],
      promise: null,
    };
  },
  components: {
    UserNavigator: UserNavigator,
    SearchBar: SearchBar,
    Gallery: Gallery,
    Info: Info,
    Detail: Detail,
    Footer: Footer,
  },
  methods: {
    buy(a) {
      console.log("buy",a);
    },
    cart() {
      console.log("cart");
    },
  },
  created() {
    this.promise = net
      .get_product(this.$route.params.id)
      .then(async (response) => {
        this.product = response.data.extend;
        for (let i in this.product.images) {
          if (this.product.images[i].type == 0) {
            this.gallery_images.push(this.product.images[i]);
          } else if (this.product.images[i].type == 1) {
            this.detail_images.push(this.product.images[i]);
          }
        }
      });
    net.get_categories().then(async (response) => {
      await this.promise;
      for (let i in response.data.extend.categories) {
        if (
          response.data.extend.categories[i].category.id ==
          this.product.product.categoryId
        ) {
          this.shop_image =
            "/api/images/item/categoryPicture/" +
            response.data.extend.categories[i].category.imageSrc;
        }
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.product {
  .header {
    .info {
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
  .main {
    width: 61.803%;
    margin: 0 auto;
    .column {
      display: flex;
    }
  }
  .detail {
    width: 61.803%;
  }
}
</style>