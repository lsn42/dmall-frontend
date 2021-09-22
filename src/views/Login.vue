<template>
  <div class="login">
    <PlainNavigator />
    <div class="login-main">
      <div class="background">
        <a
          href="https://pages.tmall.com/wow/a/act/tmall/33107/pha"
          target="_blank"
        >
          <img src="@/assets/image/tmall/login/background.png" alt="背景图" />
        </a>
      </div>
      <div class="container">
        <div class="container-inner">
          <div class="display">
            <el-tabs v-model="login_type">
              <el-tab-pane label="密码登录" name="password">
                <Password :status="status" @submit="password_submit" />
              </el-tab-pane>
              <el-tab-pane label="短信验证" name="message">
                <Message :status="status" @submit="message_submit" />
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
    <PlainFooter />
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
axios.defaults.baseURL = "/api";
////////////////////////////////////////////////////////////////////////////////
function login(that, form) {
  let promise = axios.post("login", form, {
    transformRequest: [
      function (data) {
        return Qs.stringify(data);
      },
    ],
  });
  promise.catch((err) => {
    that.$alert("未知错误");
    console.log(err.request);
  });
  return promise;
}
////////////////////////////////////////////////////////////////////////////////
import PlainNavigator from "@/components/Login/PlainNavigator.vue";
import Password from "@/components/Login/Password.vue";
import Message from "@/components/Login/Message.vue";
import PlainFooter from "@/components/Login/PlainFooter.vue";
////////////////////////////////////////////////////////////////////////////////
export default {
  data() {
    return {
      status: {
        is_failed: false,
        fail_msg: "",
      },
      is_normal: true,
      login_type: "password",
    };
  },
  methods: {
    password_submit(form) {
      login(this, form).then((res) => {
        if (res.data.code == 200) {
          localStorage.setItem("token", res.data.extend.token);
          localStorage.setItem("user_name", form.name);
          this.status.is_failed = false;
          this.status.fail_msg = "";
          this.$alert("登录成功！", "提示", {
            callback: () => (window.location = "/"),
          });
        } else if (res.data.code == 100) {
          this.status.is_failed = true;
          this.status.fail_msg = res.data.msg;
        } else {
          this.$alert("未知错误");
          console.log(res);
        }
      });
    },
    message_submit(form) {
      console.log(form);
      this.$alert("功能开发中！");
    },
  },
  components: {
    PlainNavigator: PlainNavigator,
    Password: Password,
    Message: Message,
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