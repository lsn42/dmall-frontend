<template>
  <nav class="search">
    <img src="@/assets/image/tmall/logo.png" />
    <div class="container">
      <form action="/product" method="get">
        <div class="search-input-container">
          <input
            class="search-input"
            type="text"
            name="product_name"
            placeholder="搜索 天猫 商品/品牌/店铺"
            maxlength="50"
          />
          <input class="search-button" type="submit" value="搜索" />
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
export default {
  name: "Search",
  props: ["categories"],
  components: {
    "quick-search": {
      props: ["label", "url"],
      template: `<a :href="url">{{label.split("/")[0]}}</a>`,
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  width: 61.803%;
  height: 130px;
  margin: auto;
  display: flex;
  img {
    float: left;
    width: 240px;
    height: 130px;
  }
  .container {
    width: 625px;
    padding-top: 38px;
    float: left;
    padding-left: 110px;
    form {
      border: 2px solid #ff0036;
      border-right: 0;
      .search-input-container {
        height: 36px;
        clear: both;
        .search-input {
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
        .search-button {
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