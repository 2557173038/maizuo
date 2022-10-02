<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="无需填写"
        :rules="[{ message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          @click="handleLogin"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      // console.log('submit', values);
    },
    handleLogin() {
      setTimeout(() => {
        localStorage.setItem("token", "后端返回的token字段");
        //    this.$route.back()//返回

        // 获取 query字段

        // 跳转到当时想要跳的页面去
        console.log(this.$route.query.redirect);
        this.$router.push(this.$route.query.redirect);
      }, 1000);
    },
  },
};
</script>
