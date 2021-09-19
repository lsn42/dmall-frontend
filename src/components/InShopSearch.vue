<template>
  <div class="shop-search">
    <form action="/product" method="get">
      <div class="shop-search-input-container">
        <input
          type="text"
          class="shop-search-input"
          name="product_name"
          placeholder="搜索 天猫 商品/品牌/店铺"
          maxlength="50"
        />
      </div>
      <input type="submit" value="搜天猫" class="shop-search-tmall" />
      <input type="submit" value="搜本店" class="shop-search-shop" />
    </form>
    <ul>
      <li v-for="c in quick_categories" :key="c.category.id">
        <quick-search
          :label="c.category.name"
          :url="'/list/' + c.category.id"
        />
      </li>
    </ul>
  </div>
</template>
<script>
const axios = require("axios");
axios.defaults.baseURL = "/api";
export default {
  name: "InShopSearch",
  data() {
    return {
      quick_categories: [],
    };
  },
  components: {
    "quick-search": {
      props: ["label", "url"],
      template: `<a :href="url">{{label.split("/")[0]}}</a>`,
    },
  },
  created() {
    axios.get("category/productCategories").then((response) => {
      this.categories = response.data.extend.categories;
    });
  },
};
</script>
<style lang="scss" scoped>
.shop-search {
  float: right;
  font-family: "宋体", serif;
  position: relative;
  form {
    .shop-search-input {
      width: 455px;
      border: solid #ff0036;
      border-width: 3px 0 3px 3px;
      height: 30px;
      margin-right: 82px;
      position: relative;
      .shop-search-input {
        width: 367px;
        padding: 5px 3px 5px 5px;
        color: #000;
        margin: 0;
        height: 20px;
        line-height: 20px;
        outline: 0;
        border: none;
        font-size: 12px;
      }
    }
    .shop-search-tmall {
      position: absolute;
      top: 0;
      right: 0;
      width: 80px;
      height: 30px;
      background-color: #ff0036;
      border: 0;
      color: #ffffff;
      font-size: 16px;
      font-family: "Microsoft YaHei UI", serif;
    }

    .shop-search-shop {
      position: absolute;
      top: 0;
      right: 0;
      background-color: #333;
      color: #ffffff;
      font-size: 16px;
      font-family: "Microsoft YaHei UI", serif;
      width: 80px;
      height: 36px;
      border: 0;
    }
  }
  ul {
    padding: 6px 0 0;
    height: 16px;
    margin-left: -13px;
    font-size: 13px;
    font-family: "宋体", serif;
    overflow: hidden;
  }
  li {
    display: inline-block;
    padding: 0 12px;
    line-height: 1.1;
    a {
      color: #999;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  li + li {
    border-left: 1px solid #cccccc;
  }
}
</style>