<template>
  <div :style="css_var" class="menu">
    <el-menu :collapse="true">
      <el-submenu
        v-for="(c, index1) in categories"
        :key="index1"
        :index="index1.toString()"
      >
        <template slot="title">
          <i>
            <a :href="'/list/' + c.category.id">{{ c.category.name }}</a>
          </i>
        </template>
        <div class="container">
          <div
            class="submenu"
            v-for="(cc, index2) in categories[index1].children"
            :key="index2"
          >
            <el-breadcrumb separator=">">
              <el-breadcrumb-item>{{ cc.category.name }}</el-breadcrumb-item>
              <el-breadcrumb-item>
                <div
                  class="subsubmenu"
                  v-for="(ccc, index3) in categories[index1].children[index2]
                    .children"
                  :key="index3"
                >
                  {{ ccc.name }}
                </div>
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: ["categories"],
  computed: {
    css_var() {
      return { "--item_height": (500/this.categories.length)+"px" };
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  width: 200px;
  height: 500px;
  margin: 0 auto;
  a {
    text-decoration: none;
    font-style: normal;
    color: #fff;
    font-size: 14px;
  }
}
::v-deep .el-menu {
  width: 200px;
  height: var(--item_height);
}
::v-deep .el-submenu {
  width: 200px;
  height: var(--item_height);
  text-align: left;
  background-color: rgba(0, 0, 0, 0.55);
}
::v-deep .el-submenu__title {
  width: 200px;
  height: var(--item_height);
  line-height: var(--item_height);
}
</style>