<template>
  <div class="show">
    <Item v-for="p in products" :key="p.id" :product="p" />
  </div>
</template>

<script>
import Item from "@/components/List/Item.vue";
export default {
  name: "Show",
  props: ["products"],
  components: {
    Item: Item,
  },
};
</script>

<style lang="scss" scoped>
.show {
  display: inline-block;
  width: 1210px;
  padding-left: 5px;
  padding-right: 5px;
}
</style>