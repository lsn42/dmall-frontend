<template>
  <div class="message">
    <form action="" method="post" class="message">
      <div class="phone">
        <input
          type="tel"
          class="login-input"
          v-model="forms.message.phone"
          placeholder="请输入手机号"
        />
      </div>
      <div class="code">
        <input
          type="text"
          class="login-input"
          v-model="forms.message.code"
          placeholder="请输入验证码"
        />
        <button>获取验证码</button>
      </div>
      <input type="submit" class="login-button" value="登录" />
    </form>
  </div>
</template>

<script>
import * as net from "@/utils/net.js";
export default {
  name: "Message",
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

<style>
</style>