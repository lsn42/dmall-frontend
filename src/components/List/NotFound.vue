<template>
  <div class="not_found">
    <h2>
      喵~没找到与{{ keyword }}相关的 商品 哦，要不您换个关键词我帮您再找找看
    </h2>
    <h3>建议您：</h3>
    <ol>
      <li>看看输入的文字是否有误</li>
      <li>调整关键词，如“全铜花洒套件”改成“花洒”或“花洒 套件”</li>
      <li>
        <input v-model="new_keyword" />
        <el-button @click="taobao">去淘宝搜索</el-button>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  props: ["keyword"],
  data() {
    return {
      new_keyword: "",
    };
  },
  methods: {
    taobao(keyword) {
      window.location.href = "https://s.taobao.com/search?q=" + keyword;
    },
  },
};
</script>

<style>
</style>