<template>
  <div class="order">
    {{ order }}
  </div>
</template>

<script>
export default {
  name: "Order",
  props: ["order"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.order {
  border: 1px solid #ccc;
}
</style>