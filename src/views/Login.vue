<template>
  <div class="login">
    <PlainNavigator />
    <div class="login-main">
      <div class="background">
        <a
          href="https://pages.tmall.com/wow/a/act/tmall/33107/pha"
          target="_blank"
        >
          <img src="@/assets/tmall/login/background.png" alt="背景图" />
        </a>
      </div>
      <div class="container">
        <div class="container-inner">
          <div class="change_method">
            <div class="poptip-arrow"><em></em><span></span></div>
            <img src="@/assets/tmall/login/scan-safe.png" />
            <span>扫码登录</span>
          </div>
          <div class="display">
            <div class="normal" v-if="is_normal">
              <el-tabs v-model="login_type">
                <el-tab-pane label="密码登录" name="password">
                  <Password :status="status" @submit="password_submit" />
                </el-tab-pane>
                <el-tab-pane label="短信验证" name="message">
                  <Message :status="status" />
                </el-tab-pane>
              </el-tabs>
            </div>
            <div class="abnormal" v-else>
              <QRCode :status="status" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <PlainFooter />
  </div>
</template>

<script>
import * as net from "@/utils/net.js";
import PlainNavigator from "@/components/Login/PlainNavigator.vue";
import Password from "@/components/Login/Password.vue";
import Message from "@/components/Login/Message.vue";
import QRCode from "@/components/Login/QRCode.vue";
import PlainFooter from "@/components/Login/PlainFooter.vue";
export default {
  data() {
    return {
      status: {
        is_failed: false,
        fail_msg: "",
      },
      is_normal: true,
      login_type: "password",
      forms: {
        password: {},
        message: {},
      },
    };
  },
  methods: {
    password_submit(form) {
      net
        .login(form)
        .then((res) => {
          if (res.data.code == 200) {
            net.save_token(res);
            this.status.is_failed = false;
            this.status.fail_msg = "";
            // window.location = "/";
            this.$alert("登录成功");
          } else if (res.data.code == 100) {
            this.status.is_failed = true;
            this.status.fail_msg = res.data.msg;
          } else {
            this.$alert("未知");
            console.log(res);
          }
        })
        .catch((err) => {
          this.$alert("未知");
          console.log(err.request);
        });
    },
  },
  components: {
    PlainNavigator: PlainNavigator,
    Password: Password,
    Message: Message,
    QRCode: QRCode,
    PlainFooter: PlainFooter,
  },
};
</script>

<style lang="scss" scoped>
.login-main {
  position: relative;
  width: 100%;
  background-color: rgb(78, 56, 189);
  margin-bottom: 40px;
  .background {
    height: 600px;
  }
  .container {
    position: absolute;
    top: 91px;
    right: 147px;
    background: #fff;
    .container-inner {
      width: 350px;
      height: 400px;
      .display {
        padding: 25px;
      }
    }
  }
}
</style>