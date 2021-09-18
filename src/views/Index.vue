<template>
  <div>
    <div class="header">
      <img src="@/assets/tmall_logo.png" />
      <div class="search">
        <form action="/product" method="get">
          <div class="search-input">
            <input
              class="header-search-input"
              type="text"
              name="product_name"
              placeholder="搜索 天猫 商品/品牌/店铺"
              maxlength="50"
            />
            <input class="header-search-button" type="submit" value="搜索" />
          </div>
        </form>
        <ul>
          <li v-for="c in categories.children" :key="c.id">
            <labels-under-search :label="c.label" :url="c.path" />
          </li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="nav">
        <div class="nav-title">
          <img src="@/assets/tmall-header_nav_title.png" alt="menu icon" />
          <span>商品分类</span>
        </div>
        <a href="https://chaoshi.tmall.com/" target="_blank">
          <img src="@/assets/tmall-supermarket.png" alt="tmall supermarket" />
        </a>
        <a href="https://www.tmall.hk/" target="_blank">
          <img
            src="@/assets/tmall-international.png"
            alt="tmall international"
          />
        </a>
        <a href="http://vip.tmall.com/" target="_blank">天猫会员</a>
        <a href="https://3c.tmall.com/" target="_blank">电器城</a>
        <a href="https://miao.tmall.com/" target="_blank">喵鲜生</a>
        <a href="http://yao.tmall.com/" target="_blank">医药馆</a>
        <a href="http://wt.tmall.com/" target="_blank">营业厅</a>
        <a href="https://meilihui.tmall.com/" target="_blank">魅力惠</a>
        <a href="https://www.alitrip.com/" target="_blank">飞猪旅行</a>
        <a href="https://suning.tmall.com/" target="_blank">苏宁易购</a>
      </div>
      <el-carousel class="carousel" interval="1000">
        <el-carousel-item v-for="ad in advertisements" :key="ad.id">
          <a :href="ad.url">
            <img :src="ad.pic" :alt="ad.title" />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
axios.defaults.baseURL = "/api";
export default {
  data() {
    return {
      "categories": {
        id: 0,
        level: 0,
        icon: "",
        label: "",
        name: "root",
        orderNum: 0,
        parentId: 0,
        path: "/",
        children: [
          {
            id: 1,
            level: 1,
            icon: "el-icon-tableware",
            label: "零食/茶酒/进口食品",
            name: "snack",
            orderNum: 0,
            parentId: 0,
            path: "/userList",
            children: [
              {
                id: 3,
                level: 2,
                icon: "el-icon-dish",
                label: "进口食品",
                name: "imported_food",
                orderNum: 1,
                parentId: 1,
                path: "/imported_food",
                children: [
                  {
                    id: 4,
                    level: 3,
                    icon: "el-icon-sugar",
                    label: "进口零食",
                    name: "imported_snack",
                    orderNum: 1,
                    parentId: 3,
                    path: "/imported_snack",
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            level: 2,
            icon: "el-icon-cherry",
            label: "生鲜水果",
            name: "fresh_fruit",
            orderNum: 1,
            parentId: 0,
            path: "/fresh_fruit",
            children: [
              {
                id: 5,
                level: 2,
                icon: "el-icon-apple",
                label: "新鲜蔬菜",
                name: "fresh_vegetable",
                orderNum: 1,
                parentId: 2,
                path: "/fresh_vegetable",
                children: [
                  {
                    id: 6,
                    level: 3,
                    icon: "el-icon-apple",
                    label: "土豆",
                    name: "potato",
                    orderNum: 1,
                    parentId: 50,
                    path: "/potato",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      "advertisements": [],
    };
  },
  components: {
    "labels-under-search": {
      "props": ["label", "url"],
      "template": `<a :href="url">{{label.split("/")[0]}}</a>`,
    },
  },
  methods: {},
  created() {
    axios.get("ad").then((response) => {
      console.log(response.data.extend.advertisements);
      this.advertisements = response.data.extend.advertisements;
    });
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}
body {
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  background-color: #fff;
}
a {
  text-decoration: none;
}
.header {
  width: 1200px;
  height: 130px;
  margin: auto;
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
    }
    .search-input {
      height: 36px;
      clear: both;
    }
    .header-search-input {
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
    .header-search-button {
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
    ul {
      height: 24px;
      font-size: 14px;
      padding: 4px 0 0;
      margin-left: -10px;
      overflow: hidden;
      width: 100%;
      list-style: none;
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
    }
    li + li {
      border-left: 1px solid #cccccc;
    }
  }
}
.main {
  margin-top: 0px;
  padding-top: 0px;
  .nav {
    white-space: nowrap;
    position: relative;
    font-size: 0;
    padding-top: 0;
    height: 35.5px;
    background-color: #fff;
    border-style: solid;
    border-width: 0 0 1.5px;
    border-color: #ff0036;
    width: 1200px;
    margin: auto;
    .nav-title {
      margin-left: 20px;
      background: #ff0036;
      width: 200px;
      float: left;
      height: 36px;
      img {
        vertical-align: middle;
        margin-left: 14px;
        margin-top: -5px;
      }
      span {
        display: inline-block;
        line-height: 38px;
        margin-left: 8px;
        font-size: 16px;
        font-weight: 700;
        color: #ffffff;
      }
    }
    a {
      height: 35px;
      cursor: pointer;
      float: left;
      padding: 0 8px;
      font-weight: 500;
      font-size: 16px;
      display: block;
      color: #333333;
      letter-spacing: normal;
      position: relative;
      line-height: 37px;
      img {
        width: 100px;
        height: 30px;
        margin-top: 3px;
        display: block;
      }
    }
    a:hover {
      color: #ff0036;
      text-decoration: none;
    }
  }
  .carousel {
    .el-carousel__item {
      font-size: 14px;
      line-height: 150px;
      margin: 0;
    }
  }
}
::v-deep .el-carousel__indicators {
  height: 5px;
  margin-bottom: 40px;
}
::v-deep .el-carousel__indicator {
  background: #000;
  width: 20px;
  height: 5px !important;
  cursor: pointer;
  opacity: 0.3;
  padding: 0 12px;
}
::v-deep .el-carousel__indicator.is-active {
  background: #000;
  width: 20px;
  height: 5px !important;
  cursor: pointer;
  opacity: 0.6;
  padding: 0 12px;
}
</style>