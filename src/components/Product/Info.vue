<template>
  <div class="info">
    <div class="title">
      <div class="name">{{ info.product.name }}</div>
      <div class="title">{{ info.product.title }}</div>
    </div>
    <div class="price">
      <div class="advertisement">
        <img src="@/assets/image/tmall/product/price_ad_coupon.png" />
        <span>全天猫实物商品通用</span>
        <a href="#">
          去刮券
          <img src="@/assets/image/tmall/product/price_ad_go.png" />
        </a>
      </div>
      <dl class="price">
        <dt>价格</dt>
        <dd>
          <em>¥</em><span>{{ info.product.price }}</span>
        </dd>
      </dl>
      <dl class="promote_price">
        <dt>促销价</dt>
        <dd>
          <em>¥</em><span>{{ info.product.salePrice }}</span>
        </dd>
      </dl>
    </div>
    <div class="diliver"></div>
    <ul class="panel">
      <li>
        总销量
        <span>{{ info.buyCount }}</span>
      </li>
      <li>
        累计评价
        <span>{{ info.reviewCount }}</span>
      </li>
      <li class="tmall_points">
        送天猫积分
        <span>{{ info.buyCount / 10 }}</span>
      </li>
    </ul>
    <div class="selection">
      <dl class="count">
        <dt>数量</dt>
        <dd>
          <el-input-number
            v-model="buying.count"
            :min="1"
            :max="info.product.count"
            class="amount"
          />
          <span>件</span>
          <em>库存{{ info.product.count }}件</em>
        </dd>
      </dl>
      <div class="action">
        <form method="get" @submit.prevent="buy()">
          <input class="buy" type="submit" value="立即购买" />
        </form>
        <form method="get" @submit.prevent="cart()">
          <input class="cart" type="submit" value="加入购物车" />
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
</template>

<script>
export default {
  name: "Info",
  props: ["product", "promise"],
  data() {
    return {
      info: {
        product: {
          id: 0,
          name: "",
          title: "",
          count: 0,
          price: 0,
          salePrice: 0,
          createDate: "",
          categoryId: 0,
          score: 0,
          del: 0,
          smallimage: null,
          enabled: false,
          images: [],
        },
      },
      buying: {
        count: 0,
      },
    };
  },
  methods: {
    buy() {
      this.$emit("buy", this.buying);
    },
    cart() {
      this.$emit("cart", this.buying);
    },
  },
  created() {
    this.promise.then(() => {
      this.info = this.product;
    });
  },
};
</script>

<style lang="scss" scoped>
.info {
  float: left;
  height: 100%;
  .title {
    padding: 20px 10px 12px;
    color: #000000;
    text-align: left;
    .name {
      width: 510px;
      padding-bottom: 0.3em;
      line-height: 1;
      font-size: 16px;
      font-weight: 700;
      font-family: "Microsoft YaHei UI", serif;
      margin: 0;
    }
    .title {
      display: block;
      width: 510px;
      font-size: 14px;
      color: #ff0036;
      font-family: "Microsoft YaHei UI", serif;
    }
  }
  .price {
    background: #e9e9e9;
    position: relative;
    padding-bottom: 5px;
    padding-top: 5px;
    margin-right: 20px;
    .advertisement {
      position: relative;
      height: 35px;
      margin: 0 10px 0 8px;
      img {
        float: left;
        margin: 10px 5px 0 0;
      }
      span {
        float: left;
        font: 400 12px/35px "Microsoft YaHei UI", tahoma, arial;
        color: #666;
      }
      a {
        float: right;
        font: normal 12px/35px "Microsoft YaHei UI", tahoma, arial;
        color: #ff0036;
        cursor: pointer;
        img {
          position: relative;
          bottom: 1px;
          padding-left: 5px;
        }
      }
    }
    .price {
      margin: 0;
      dt {
        font-family: "Microsoft YaHei UI", serif;
        font-weight: normal;
        color: #999;
        font-size: 12px;
        text-align: left;
        float: left;
        width: 69px;
        height: 20px;
        line-height: 20px;
        margin-left: 8px;
      }
      dd {
        margin-left: 70px;
        height: 20px;
        line-height: 20px;
        text-align: left;
        em {
          font-family: Arial, serif;
          font-style: normal;
        }
        span {
          text-decoration: line-through;
          font-size: 14px;
          color: #333333;
          font-family: Arial, serif;
        }
      }
    }
    .promote_price {
      margin: 0;
      dt {
        font-family: "Microsoft YaHei UI", serif;
        font-weight: normal;
        color: #999;
        font-size: 12px;
        text-align: left;
        float: left;
        width: 69px;
        margin-left: 8px;
        height: 42px;
        line-height: 42px;
      }
      dd {
        margin-left: 70px;
        height: 42px;
        line-height: 42px;
        text-align: left;
        em {
          font-style: normal;
          color: #ff0036;
          font-size: 18px;
          font-family: Arial, serif;
        }
        span {
          font-style: normal;
          font-size: 30px;
          color: #ff0036;
          font-weight: bolder;
          font-family: Arial, serif;
        }
      }
    }
  }
  .panel {
    border: dotted #c9c9c9;
    border-width: 1px 0;
    margin-top: 10px;
    margin-bottom: 0;
    margin-right: 20px;
    padding: 10px 0;
    position: relative;
    li {
      font-family: "Microsoft YaHei UI", serif;
      color: #999;
      font-size: 12px;
      display: inline-block;
      width: 32%;
      text-align: center;
      line-height: 16px;
      span {
        font-family: Arial, serif;
        display: inline-block;
        color: #ff0036;
        font-weight: 700;
        margin-left: 3px;
      }
    }
    li + li {
      border-left: 1px solid #e5dfda;
    }
    .tmall_points > span {
      color: #280;
    }
  }
  .selection {
    margin: 0;
    margin-top: 20px;
    dt {
      font-family: "Microsoft YaHei UI", serif;
      font-weight: normal;
      color: #999;
      font-size: 12px;
      text-align: left;
      float: left;
      width: 69px;
      margin-left: 8px;
      height: 31px;
      line-height: 31px;
    }
    dd {
      height: 31px;
      line-height: 31px;
      .amount {
        float: left;
      }
      span {
        font-family: "Microsoft YaHei UI", serif;
        font-weight: normal;
        color: #999;
        font-size: 12px;
        text-align: left;
        float: left;
        margin-left: 10px;
      }
      em {
        font-style: normal;
        font-family: "Microsoft YaHei UI", serif;
        margin-left: 20px;
        color: #999;
        font-size: 12px;
        text-align: left;
        float: left;
      }
    }
  }
  .action {
    text-align: center;
    margin-top: 25px;
    input {
      display: inline-block;
      margin: 0 2px;
    }
    .buy {
      width: 178px;
      background-color: #ffeded;
      border: 1px solid #ff0036;
      color: #ff0036;
      font-family: "Microsoft YaHei UI", serif;
      height: 38px;
      line-height: 38px;
      font-size: 16px;
      cursor: pointer;
    }
    .cart {
      width: 178px;
      background-color: #ff0036;
      border: 1px solid #ff0036;
      color: #ffffff;
      font-family: "Microsoft YaHei UI", serif;
      height: 38px;
      line-height: 38px;
      font-size: 16px;
      cursor: pointer;
    }
  }
  .clear {
    width: 490px;
    margin: 0 20px;
    margin-top: 50px;
    text-align: left;
    span {
      display: inline-block;
      font-family: "Microsoft YaHei UI", serif;
      color: #999;
      font-size: 12px;
      text-align: left;
      padding-right: 10px;
    }
    a {
      display: inline-block;
      font-family: "Microsoft YaHei UI", serif;
      color: #666;
      font-size: 12px;
      text-align: left;
      padding-right: 30px;
      padding-bottom: 3px;
    }
    a:hover {
      text-decoration: none;
    }
  }
}
</style>