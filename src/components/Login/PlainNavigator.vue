<template>
  <nav class="login-nav">
    <a href="/" target="_self">
      <img src="@/assets/image/tmall/logo2.png" />
    </a>
  </nav>
</template>

<script>
export default {
  name: "PlainNavigator",
};
</script>

<style lang="scss" scoped>
.login-nav {
  padding: 22px 0px;
  height: 44px;
  width: 1190px;
  margin: auto;
  display: flex;
  img {
    margin-top: 8px;
    width: 190px;
  }
}
</style>