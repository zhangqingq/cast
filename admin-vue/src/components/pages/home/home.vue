<template>
  <!-- Container 布局容器 -->
  <el-container>
    <!-- 头部部分 -->
    <el-header>
      <!-- 借用 element-ui 框架的 Layout 布局 -->
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img src="../../../assets/images/logo.png" alt>
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
    </el-header>
    <el-container>
      <!-- 左侧侧边栏部分 -->
      <el-aside width="200px">
        <!-- 使用 element-ui 框架的 NavMenu 导航菜单 组件 -->
        <!-- 
              default-active  默认激活选中的选项
              unique-opened	  是否只保持一个子菜单的展开
        -->
        <el-menu default-active="2" class="el-menu-vertical-demo" unique-opened="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">角色列表</el-menu-item>
              <el-menu-item index="2-2">权限列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">商品列表</el-menu-item>
              <el-menu-item index="3-2">分类参数</el-menu-item>
              <el-menu-item index="3-3">商品分类</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">订单列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">数据报表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
  <!-- 中间内容部分 -->
</template>

<script>
export default {};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
}

.el-aside {
  background-color: #d3dce6;
}

.el-main {
  background-color: #e9eef3;
}

.el-card__body {
  padding: 0;
}
h2 {
  margin: 0;
  line-height: 60px;
  text-align: center;
  color: #fff;
}
.logon {
  line-height: 60px;
  font-weight: 600;
  text-align: right;
  font-size: 20px;
  margin-right: 0;
}

/* 侧边栏部分 */
.el-container {
  height: 100%;
}
.el-aside {
    height: 100%;
    background-color: #fff;
}
.el-menu-item-group__title {
    padding: 0;
}
</style>
