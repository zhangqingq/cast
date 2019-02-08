<template>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{firstNav}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{lastNav}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    // 使不同的页面显示不同的导航；需要传入两个参数
    name: 'myBread',
    props:['firstNav','lastNav'],
}
</script>

<style>
.el-breadcrumb {
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
}
</style>
