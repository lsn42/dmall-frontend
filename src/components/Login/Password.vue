<template>
  <div class="password">
    <div class="failed" v-if="status.is_failed">登录失败</div>
    <form action="" method="post" @submit.prevent="submit()">
      <div class="name">
        <i class="el-icon-user" />
        <input
          type="name"
          class="login-input"
          v-model="form.name"
          placeholder="会员名/邮箱/手机号"
        />
      </div>
      <div class="password">
        <i class="el-icon-lock" />
        <input
          type="password"
          class="login-input"
          v-model="form.password"
          placeholder="密码"
        />
      </div>
      <div class="code">
        <input
          type="text"
          class="login-input"
          v-model="form.code"
          placeholder="请输入验证码"
        />
        <img src="/api/imageCode" />
      </div>
      <input type="submit" class="login-button" value="登录" />
    </form>
    <div class="bottom">
      <a href="#">忘记密码</a>
      <a href="#" @click="test">忘记会员名</a>
      <a href="/register">免费注册</a>
    </div>
  </div>
</template>

<script>
import * as net from "@/utils/net.js";
export default {
  name: "Password",
  props: ["status"],
  data() {
    return {
      form: { name: "", password: "", code: "" },
    };
  },
  methods: {
    submit() {
      net
        .login(this.form)
        .then((res) => {
          if (res.data.code == 200) {
            net.save_token(res);
            // window.location = "/";
          } else if (res.data.code == 100) {
            this.status.is_failed = true;
            this.status.fail_msg = res.data.msg;
          } else {
            this.$alert("hello");
          }
        })
        .catch((err) => {
          this.$alert(err.request);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/Login/form.scss";
.code {
  display: flex;
  input {
    flex: 1;
  }
  img {
    height: 38px;
    flex: none;
  }
}
.bottom {
  margin-top: 16px;
  margin-bottom: 0;
  margin: 8px 0;
  text-align: right;
  zoom: 1;
  a {
    color: #6c6c6c;
    font-size: 12px;
    display: inline-block;
    margin-left: 10px;
    text-decoration: none;
  }
}
</style>