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
        <a href="#">退出</a>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style>
</style>
