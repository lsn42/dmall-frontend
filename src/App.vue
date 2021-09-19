<template>
  <div id="app">
    <Navigator />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigator from "@/components/Navigator.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navigator: Navigator,
    Footer: Footer,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
