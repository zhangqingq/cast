<template>
  <!-- 
  登录页面：
    1，实现静态页面
    2，实现表单验证
    3，实现登录请求
  -->
  <div id="login">
    <el-form label-position="top" label-width="80px" :model="loginDate" :rules="rules">
      <h2>用户登录</h2>
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="loginDate.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginDate.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login" id="loginBtn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginDate: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" },
        { min: 6,  message: "密码长度最少为 6 个字符", trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      this.$http
        .request({
          url: "/login",
          method: "post",
          data: {
            username: this.loginDate.username,
            password: this.loginDate.password
          }
        })
        .then(res => {
          console.log(res);
          var { meta, data } = res.data;
          if (meta.status === 200) {
            this.$message({
              message: meta.msg,
              type: "success"
            });
            // this.$router.push("/home");
            this.$router.push('/home')
          } else {
            this.$message.error(meta.msg);
          }
        });
    }
  }
};
</script>

<style>
#login {
  padding: 40px 0;
  height: 100%;
  width: 100%;
  background-color: #324152;
}
.el-form {
  position: relative;
  width: 500px;

  margin: 0 auto;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  top: 50%;
  transform: translateY(-50%);
}
#loginBtn {
  width: 100%;
}
</style>
