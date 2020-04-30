<template>
  <div>
      <h1>登录</h1>
    用户名：<input type="text" v-model="username" placeholder="请输入用户名" />
    密&emsp;码<input type="text" v-model="password" placeholder="请输入密码" />
    <Button color="blue" @click.prevent="on_submit">登录</Button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        // 指定变量
      username: "",
      password: ""
    };
  },
  methods: {
      //请求方法
    on_submit() {
        this.axios.get("http://127.0.0.1:8000/myapp/login/", {
            //传递参数
            params:{username: this.username, password: this.password}
      }).then(res=>{
          this.$Message(res.data.msg)
      });
    },


  },
  created() 
  {}
};
</script>

<style>
</style>