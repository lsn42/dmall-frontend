<template>
  <div class="message">
    <form action="" method="post" class="message" @submit.prevent="submit">
      <div class="phone">
        <input
          type="tel"
          class="login-input"
          v-model="form.phone"
          placeholder="请输入手机号"
        />
      </div>
      <div class="code">
        <input
          type="text"
          class="login-input"
          v-model="form.code"
          placeholder="请输入验证码"
        />
        <button>获取验证码</button>
      </div>
      <input type="submit" class="login-button" value="登录" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: ["status"],
  data() {
    return {
      form: { phone: "", code: "" },
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.form);
    },
  },
};
</script>