<template>
  <nav class="header">
    <img src="@/assets/image/tmall/logo.png" />
    <div class="search">
      <form @submit.prevent="search">
        <div class="container">
          <input
            class="search"
            type="text"
            placeholder="搜索 天猫 商品/品牌/店铺"
            maxlength="50"
            v-model="keyword"
          />
          <input class="button" type="submit" value="搜索" />
        </div>
      </form>
      <ul>
        <li v-for="c in categories" :key="c.category.id">
          <quick-search
            :label="c.category.name"
            :url="'/list/' + c.category.id"
          />
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import axios from "axios";
import Qs from "qs";
axios.defaults.baseURL = "/api";
////////////////////////////////////////////////////////////////////////////////
function get_categories(that) {
  that;
  return axios.get("category/productCategories");
}
function search(that, keyword) {
  that;
  let promise = axios.post(
    "product/search",
    { param: keyword },
    {
      transformRequest: [
        function (data) {
          return Qs.stringify(data);
        },
      ],
    }
  );
  return promise;
}
export default {
  name: "Header",
  data() {
    return {
      keyword: "",
      categories: {},
    };
  },
  components: {
    "quick-search": {
      props: ["label", "url"],
      template: `<a :href="url">{{label.split("/")[0]}}</a>`,
    },
  },
  methods: {
    search() {
      search(this, this.keyword).then((res) => {
        this.$router.push({
          name: "SearchResultList",
          params: {
            result: res.data.extend.pageInfo,
          },
        });
      });
    },
  },
  created() {
    get_categories(this).then((response) => {
      this.categories = response.data.extend.categories;
    });
  },
};
</script>
<style lang="scss" scoped>
.header {
  width: 61.803%;
  height: 130px;
  margin: auto;
  display: flex;
  img {
    float: left;
    width: 240px;
    height: 130px;
  }
  .search {
    width: 625px;
    padding-top: 38px;
    float: left;
    padding-left: 110px;
    form {
      border: 2px solid #ff0036;
      border-right: 0;
      .container {
        height: 36px;
        clear: both;
        .search {
          float: left;
          height: 36px;
          width: 491px;
          font: 14px "宋体";
          box-sizing: border-box;
          outline: none;
          color: #000;
          margin: 0;
          padding: 5px 3px 5px 5px;
          vertical-align: middle;
          border: 0;
        }
        .button {
          float: right;
          width: 132px;
          height: 36px;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 5px;
          background-color: #ff0036;
          cursor: pointer;
          color: #ffffff;
          border: 0;
        }
      }
    }
    ul {
      height: 24px;
      font-size: 14px;
      padding: 4px 0 0;
      margin-left: -10px;
      overflow: hidden;
      width: 100%;
      list-style: none;
      display: inline;
      li {
        font-family: "宋体", sans-serif;
        font-size: 14px;
        display: inline-block;
        line-height: 1.1;
        padding: 0 8px 0 12px;
        a {
          color: #999999;
        }
      }
      li + li {
        border-left: 1px solid #cccccc;
      }
    }
  }
}
</style>