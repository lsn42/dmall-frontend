<template>
  <div class="place_order">
    <Header />
    <Address :form="form" />
    <Item v-for="i in items" :key="i.id" :item="i" />
    <el-button @click="place">提交订单</el-button>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "/api";
////////////////////////////////////////////////////////////////////////////////
function place(that, order) {
  let promise = axios.post("orderItem/newOrder", order, {
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
import Header from "@/components/PlaceOrder/Header.vue";
import Address from "@/components/PlaceOrder/Address.vue";
import Item from "@/components/PlaceOrder/Item.vue";
export default {
  data() {
    return {
      form: {
        address_code: "",
        detail_address: "",
        receiver: "",
        phone: "",
      },
      items: [],
    };
  },
  components: {
    Header: Header,
    Address: Address,
    Item: Item,
  },
  methods: {
    place() {
      let l = [];
      for (let i in this.items) {
        l.push(this.items[i].order_item_id);
      }
      place(this, {
        address: this.form.address_code,
        detailAddress: this.form.detail_address,
        receiver: this.form.receiver,
        phone: this.form.phone,
        items: l,
      }).then((res) => {
        if (res.data.code == 200) {
          this.$alert("下单成功！");
        } else {
          this.$alert("未知错误");
          console.log(res);
        }
      
      });
    },
  },
  created() {
    this.items = this.$route.params.items;
  },
};
</script>

<style lang="scss" scoped>
</style>