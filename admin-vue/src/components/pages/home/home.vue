<template>
  <!-- Container 布局容器 -->
  <el-container>
    <!-- 头部部分 -->
    <el-header>
      <topBar/>
    </el-header>
    <el-container>
      <!-- 左侧侧边栏部分 -->
      <el-aside width="200px">
        <sideBar/>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  <!-- 中间内容部分 -->
</template>

<script>
import sideBar from "../../../layout/sideBar.vue";
import topBar from "../../../layout/topBar.vue";
export default {
  components: {
    sideBar,
    topBar
  }
};
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
</style>
