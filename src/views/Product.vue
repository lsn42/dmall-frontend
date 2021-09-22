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
        <Info :product="product" :promise="promise" @buy="buy" @cart="cart" />
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
import axios from "axios";
axios.defaults.baseURL = "/api";
////////////////////////////////////////////////////////////////////////////////
function get_categories(that) {
  that;
  return axios.get("category/productCategories");
}
function get_product(that, id) {
  let url = "/product/detail/" + id;
  that;
  return axios.get(url);
}
function add_to_cart(that, item) {
  let promise = axios.post("orderItem/addItem", item, {
    headers: {
      token: localStorage.getItem("token"),
    },
  });
  promise.catch((err) => {
    that.$alert("未知错误");
    console.log(err);
  });
  return promise;
}
// function buy(that) {
//   let promise = axios.post(
//     "orderItem/addItem",
//     {
//       count: 1,
//       price: 100,
//       product_id: 1,
//       message: "测试",
//     },
//     {
//       headers: {
//         token: localStorage.getItem("token"),
//       },
//     }
//   );
//   promise.catch((err) => {
//     that.$alert("未知错误");
//     console.log(err);
//   });
//   return promise;
// }
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
    buy(info) {
      console.log("buy", info);
    },
    cart(info) {
      add_to_cart(this, {
        count: info.count,
        price: this.product.product.salePrice,
        productId: this.product.product.id,
      }).then((res) => {
        if (res.data.code == 200) {
          this.$alert("添加到购物车成功！");
        } else {
          this.$alert("未知错误");
          console.log(res);
        }
      });
    },
  },
  created() {
    this.promise = get_product(this, this.$route.params.id).then(
      async (response) => {
        this.product = response.data.extend;
        for (let i in this.product.images) {
          if (this.product.images[i].type == 0) {
            this.gallery_images.push(this.product.images[i]);
          } else if (this.product.images[i].type == 1) {
            this.detail_images.push(this.product.images[i]);
          }
        }
      }
    );
    get_categories(this).then(async (response) => {
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