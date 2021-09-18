<template>
  <el-container>
    <el-header class="header">
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
            <aa :label="c.label" :url="c.path"/>
          </li>
        </ul>
      </div>
    </el-header>
    <el-main> </el-main>
    <el-footer> </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      categories: {
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
    };
  },
  components: {
    aa: {
      props: ["label","url"],
      template: `<a :href="url">{{label.split("/")[0]}}</a>`,
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 1270px;
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
</style>