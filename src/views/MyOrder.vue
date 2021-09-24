<template>
  <div class="cart">
    <UserNavigator />
    <Header />
    <Order v-for="o in orders" :key="o.id" :order="o"/>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "/api";
////////////////////////////////////////////////////////////////////////////////
function get_order(that) {
  let promise = axios.get("order/allOrder", {
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
////////////////////////////////////////////////////////////////////////////////
import UserNavigator from "@/components/UserNavigator.vue";
import Header from "@/components/MyOrder/Header.vue";
import Order from "@/components/MyOrder/Order.vue";
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      orders: [],
    };
  },
  components: {
    UserNavigator: UserNavigator,
    Header: Header,
    Order: Order,
    Footer: Footer,
  },
  methods: {
  },
  created() {
    get_order(this).then((res) => {
      this.orders = res.data.extend
    });
  },
};
</script>

<style>
</style>