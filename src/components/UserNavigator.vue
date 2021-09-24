<template>
  <div class="user_navigator">
    <div class="main">
      <div class="login">
        <div v-if="is_logined">
          <em>Hi，</em>
          <a href="/user" class="user-name" target="_blank">{{ user_name }}</a>
          <a href="/login/logout">退出</a>
        </div>
        <div v-else>
          <em>喵，欢迎来天猫</em>
          <a href="/login">请登录</a>
          <a href="/register">免费注册</a>
        </div>
      </div>
      <ul class="quick">
        <li class="my_taobao">
          <el-dropdown>
            <span class="el-dropdown-link">
              我的淘宝<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <a href="/my/order">已买到的宝贝</a>
              </el-dropdown-item>
              <el-dropdown-item><a href="#">已卖出的宝贝</a></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li class="cart">
          <img src="@/assets/image/tmall/cart.png" />
          <a href="/cart">购物车</a>
        </li>
        <li class="favorite">
          <el-dropdown>
            <span class="el-dropdown-link">
              <a href="#">收藏夹</a>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <a href="#">收藏的宝贝</a>
              </el-dropdown-item>
              <el-dropdown-item><a href="#">收藏的店铺</a></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li class="separator"></li>
        <li class="mobile">
          <el-dropdown>
            <span class="el-dropdown-link">
              <img src="@/assets/image/tmall/mobile.png" />
              <a href="#" title="天猫无线">手机版</a>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <img src="/res/images/fore/WebsiteImage/qrcode.png" />
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li class="home">
          <a href="https://www.taobao.com/">淘宝网</a>
        </li>
        <li class="direct_promo">
          <el-dropdown>
            <span class="el-dropdown-link">
              <a href="#">商家支持<b></b></a>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <ul>
                  <li>
                    <h3>商家：</h3>
                    <a href="">商家中心</a>
                    <a href="">天猫规则</a>
                    <a href="">商家入驻</a>
                    <a href="">运营服务</a>
                    <a href="">商家品控</a>
                    <a href="">商家工具</a>
                    <a href="">天猫智库</a>
                    <a href="">喵言喵语</a>
                  </li>
                  <li>
                    <h3>帮助：</h3>
                    <a href="">帮助中心</a>
                    <a href="">问商友</a>
                  </li>
                </ul>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li class="site_map">
          <el-dropdown>
            <span class="el-dropdown-link">
              <a>网站导航<b></b></a>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <div class="site_hot">
                  <h2>热点推荐<span>Hot</span></h2>
                  <ul>
                    <li><a href="">天猫超市</a></li>
                    <li><a href="">喵鲜生</a></li>
                    <li><a href="">科技新品</a></li>
                    <li><a href="">女装新品</a></li>
                    <li><a href="">酷玩街</a></li>
                    <li><a href="">内衣新品</a></li>
                    <li><a href="">试美妆</a></li>
                    <li><a href="">运动新品</a></li>
                    <li><a href="">时尚先生</a></li>
                    <li><a href="">精明妈咪</a></li>
                    <li><a href="">吃乐会</a></li>
                    <li><a href="">企业采购</a></li>
                    <li><a href="">会员积分</a></li>
                    <li><a href="">天猫国际</a></li>
                    <li><a href="">品质频道</a></li>
                  </ul>
                </div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div class="site_market">
                  <h2>行业市场<span>Market</span></h2>
                  <ul>
                    <li><a href="">美妆</a></li>
                    <li><a href="">电器</a></li>
                    <li><a href="">女装</a></li>
                    <li><a href="">男装</a></li>
                    <li><a href="">女鞋</a></li>
                    <li><a href="">男鞋</a></li>
                    <li><a href="">内衣</a></li>
                    <li><a href="">箱包</a></li>
                    <li><a href="">运动</a></li>
                    <li><a href="">母婴</a></li>
                    <li><a href="">家装</a></li>
                    <li><a href="">医药</a></li>
                    <li><a href="">食品</a></li>
                    <li><a href="">配饰</a></li>
                    <li><a href="">汽车</a></li>
                  </ul>
                </div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div class="site_brand">
                  <h2>品牌风尚<span>Brand</span></h2>
                  <ul>
                    <li><a href="">尚天猫</a></li>
                    <li><a href="">大牌街</a></li>
                    <li><a href="">潮牌街</a></li>
                    <li><a href="">天猫原创</a></li>
                    <li><a href="">什么牌子好</a></li>
                  </ul>
                </div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div class="site_help">
                  <h2>服务指南<span>Help</span></h2>
                  <ul>
                    <li><a href="">帮助中心</a></li>
                    <li><a href="">品质保障</a></li>
                    <li><a href="">特色服务</a></li>
                    <li><a href="">7天退换货</a></li>
                  </ul>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserNavigator",
  data() {
    return {
      user_name: localStorage.getItem("user_name"),
      is_logined: localStorage.getItem("token") != null,
    };
  },
};
</script>
<style lang="scss" scoped>
.user_navigator {
  width: auto;
  height: 32px;
  font-family: "Microsoft YaHei UI", Tahoma, serif;
  font-size: 12px;
  background: #f2f2f2;
  border-bottom: 1px solid #e5e5e5;
  .main {
    width: 1230px;
    margin: auto;
    height: 100%;
    display: flex;
    .login {
      justify-content: flex-start;
      line-height: 32px;
      color: #999;
      margin-right: auto;
      em {
        font-style: normal;
      }
    }
    .quick {
      justify-content: flex-end;
      top: 0;
      right: 0;
      line-height: 32px;
      color: #999;
      margin-left: auto;
      li {
        float: left;
        position: relative;
        list-style: none;
      }
    }
  }
  a,
  .el-dropdown-link {
    color: #999;
    padding-left: 20px;
    font-size: 12px;
    text-decoration: none;
  }
}
</style>