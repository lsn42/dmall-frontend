<template>
  <div class="cart">
    <UserNavigator />
    <SimpleNavigator />
    <Item v-for="i in items" :key="i.id" :item="i" />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "/api";
////////////////////////////////////////////////////////////////////////////////
function get_cart(that) {
  let promise = axios.get("orderItem/cart", {
    headers: {
      token: localStorage.getItem("token"),
    },
  });
  promise.catch((err) => {
    if (err.request.status == 404) {
      that.$alert("请登录！", "提示", {
        callback: () => (window.location = "/login"),
      });
    } else {
      that.$alert("未知错误");
      console.log(err);
    }
  });
  return promise;
}
function get_product_detail(that, id) {
  let promise = axios.get("product/detail/" + id);
  promise.catch((err) => {
    that.$alert("未知错误");
    console.log(err);
  });
  return promise;
}
////////////////////////////////////////////////////////////////////////////////
import UserNavigator from "@/components/UserNavigator.vue";
import SimpleNavigator from "@/components/Cart/SimpleNavigator.vue";
import Item from "@/components/Cart/Item.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      items: [],
      promises: [],
    };
  },
  components: {
    UserNavigator: UserNavigator,
    SimpleNavigator: SimpleNavigator,
    Item: Item,
    Footer: Footer,
  },
  created() {
    get_cart(this).then((res) => {
      let get = res.data.extend.items;
      for (let i in get) {
        get_product_detail(this, get[i].productId).then(async (res_d) => {
          let product = res_d.data.extend;
          let pick_image = "";
          for (let j in product.images) {
            if (product.images[j].type == 0) {
              pick_image = product.images[j].src;
            }
          }
          this.$set(this.items, i, {
            id: product.product.id,
            name: product.product.name,
            shop: product.product.title,
            img: pick_image,
            price: product.product.salePrice,
            count: get[i].count,
            max_count: product.product.count,
          });
        });
      }
    });
  },
};
</script>

<style>
</style>