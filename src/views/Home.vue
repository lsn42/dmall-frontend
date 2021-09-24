<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-button @click="test">测试</el-button>
  </div>
</template>

<script>
import axios from "axios";
// import Qs from "qs";
axios.defaults.baseURL = "/api";
////////////////////////////////////////////////////////////////////////////////
function test(that) {
  that;
  // let promise = axios.get("getAddress/" + 445100, {
  //   headers: {
  //     token: localStorage.getItem("token"),
  //   },
  // });
  let promise = axios.get("order/allOrder", {
    headers: {
      token: localStorage.getItem("token"),
    },
  });
  // let promise = axios.post(
  //   "product/search",
  //   { param: "null" },
  //   {
  //     transformRequest: [
  //       function (data) {
  //         return Qs.stringify(data);
  //       },
  //     ],
  //   }
  // );
  promise.then((res) => {
    console.log(res.data.extend);
  });
  return promise;
}
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    test() {
      test();
    },
  },
};
</script>
