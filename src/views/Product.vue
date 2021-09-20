<template>
  <div class = "product">
    <Navigator />
    <div class="header">
      <div class="info">
        <img src="@/assets/tmall/logo.png" />
        <InShopSearch />
      </div>
      <div class="shop">
        <img
          src="http://172.16.82.15:8081/images/item/categoryPicture/65d4300d-a44a-4ce6-a344-81fedfcc7bf8.jpg"
        />
      </div>
    </div>
    <div class="main">
      <div class="info">
        <div class="gallery">
          <el-carousel indicator-position="outside" :autoplay="false">
            <el-carousel-item v-for="i in gallery_images" :key="i.id">
              <img :src="i.src" :alt="i.id" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="property">
          <div class="title"></div>
          <div class="commercial">
            <div class="commercial-advertisement">
              <img src="res/images/fore/WebsiteImage/context_ad.png" />
              <span>全天猫实物商品通用</span>
              <a href="#">
                去刮券
                <img
                  src="/res/images/fore/WebsiteImage/tmallItemContentB.png"
                />
              </a>
            </div>
            <dl class="commercial-price">
              <dt>价格</dt>
              <dd>
                <em>¥</em><span>{{ product.product.price }}</span>
              </dd>
            </dl>
            <dl class="commercial-promote_price">
              <dt>促销价</dt>
              <dd>
                <em>¥</em><span>{{ product.product.salePrice }}</span>
              </dd>
            </dl>
          </div>
          <div class="diliver"></div>
          <ul class="panel">
            <li>
              总销量<span>{{ product.buyCount }}</span>
            </li>
            <li>
              累计评价<span>{{ product.reviewCount }}</span>
            </li>
            <li class="tmall_points">
              送天猫积分<span>{{ product.buyCount / 10 }}</span>
            </li>
          </ul>
          <div class="selection">
            <dl class="count">
              <dt>数量</dt>
              <dd>
                <input
                  type="text"
                  value="1"
                  maxlength="8"
                  title="请输入购买量"
                  class="context_buymember"
                />
                <input type="hidden" id="stock" value="1000" />
                <span class="amount-btn">
                  <img
                    src="/res/images/fore/WebsiteImage/up.png"
                    class="amount_value_up"
                  />
                  <img
                    src="/res/images/fore/WebsiteImage/down.png"
                    class="amount_value-down"
                  />
                </span>
                <span class="amount_unit">件</span>
                <em>库存1000件</em>
              </dd>
            </dl>
            <div class="action">
              <form method="get" class="buy">
                <input class="context_buyNow" type="submit" value="立即购买" />
              </form>
              <form method="get" class="in_car">
                <input
                  class="context_addBuyCar"
                  type="submit"
                  value="加入购物车"
                />
              </form>
            </div>
          </div>
          <div class="clear">
            <span>服务承诺</span>
            <a href="#">正品保证</a>
            <a href="#">极速退款</a>
            <a href="#">七天无理由退换</a>
          </div>
        </div>
      </div>
      <div class="ad"></div>
      <div class="detail">
        <div class="column_left"></div>
        <div class="column">
          <el-tabs>
            <el-tab-pane label="商品详情" name="detail">
              <img v-for="i in detail_images" :key="i.id" />
            </el-tab-pane>
            <el-tab-pane name="review">
              <span slot="label">
                累计评价
                <p>{{ product.reviewCount }}</p>
              </span>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigator from "@/components/Navigator.vue";
import Footer from "@/components/Footer.vue";
import InShopSearch from "@/components/InShopSearch.vue";
const axios = require("axios");
axios.defaults.baseURL = "/api";
export default {
  data() {
    return {
      product: { product: { price: 0 } },
      gallery_images: [],
      detail_images: [],
    };
  },
  components: {
    Navigator: Navigator,
    Footer: Footer,
    InShopSearch: InShopSearch,
  },
  methods: {},
  created() {
    let url = "/product/getProductById/" + this.$route.params.id;
    axios.get(url).then((response) => {
      this.product = response.data.extend;
      for (let i in this.product.images) {
        if (this.product.images[i].type == 0) {
          this.gallery_images.push(this.product.images[i]);
        } else if (this.product.images[i].type == 1) {
          this.detail_images.push(this.product.images[i]);
        }
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.header {
  .info {
    width: 1200px;
    height: 130px;
    margin: auto;
    display: block;
    img {
      float: left;
      width: 240px;
      height: 130px;
    }
  }
}
</style>