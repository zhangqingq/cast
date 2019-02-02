<template>
  <!-- 借用 element-ui 框架的 Layout 布局 -->
  <el-row>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <img src="../assets/images/logo.png" alt>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple-light">
        <h2>电商后台管理系统</h2>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple logon">
        <el-button type="text" @click="logout">退出</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$confirm("您确定要退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });

          this.$router.push("/login");
          localStorage.removeItem("token");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  }
};
</script>

<style>
.logon span {
  font-size: 20px;
}
</style>
