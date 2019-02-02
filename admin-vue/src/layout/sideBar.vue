<template>
  <!-- 使用 element-ui 框架的 NavMenu 导航菜单 组件 -->
  <!-- 
              default-active  默认激活选中的选项
              unique-opened	  是否只保持一个子菜单的展开  布尔值
              router   	是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转   布尔值
  -->
  <el-menu default-active="2" class="el-menu-vertical-demo" :unique-opened="true" :router="true">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>用户管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/users">
          <i class="el-icon-menu"></i>
          用户列表
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>权限管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">
          <i class="el-icon-menu"></i>角色列表
        </el-menu-item>
        <el-menu-item index="2-2">
          <i class="el-icon-menu"></i>权限列表
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>商品管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">
          <i class="el-icon-menu"></i>商品列表
        </el-menu-item>
        <el-menu-item index="3-2">
          <i class="el-icon-menu"></i>分类参数
        </el-menu-item>
        <el-menu-item index="3-3">
          <i class="el-icon-menu"></i>商品分类
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>订单管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="4-1">
          <i class="el-icon-menu"></i>订单列表
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>数据统计</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="5-1">
          <i class="el-icon-menu"></i>数据报表
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {};
</script>

<style>
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
