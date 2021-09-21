<template>
  <div class="search">
  </div>
</template>
<script>
const axios = require("axios");
axios.defaults.baseURL = "/api";
export default {
  name: "Search",
  props: ["size"],
};
</script>
<style lang="scss" scoped>
.search {
  width: 625px;
  padding-top: 38px;
  float: left;
  padding-left: 110px;
  
}
</style>