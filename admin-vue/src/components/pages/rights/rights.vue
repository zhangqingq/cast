<template>
  <el-card>
    <!-- 1，面包屑导航 -->
    <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>-->
    <myBread firstNav="权限管理" lastNav="权限列表"/>

    <!-- 权限数据信息表格 -->
    <el-table :data="rightArr" border style="width: 100%">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="authName" label="权限名称" width="180"></el-table-column>
      <el-table-column prop="path" label="路径" width="180"></el-table-column>
      <el-table-column label="层级">
        <template slot-scope="scope">
          <span v-if="scope.row.level === '0'">一级</span>
          <span v-else-if="scope.row.level === '1'">二级</span>
          <span v-else>三级</span>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      rightArr: []
    };
  },
  methods: {
    async render() {
      //   页面渲染
      var res = await this.$http.request({
        url: "rights/list",
        method: "get",
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      var { meta, data } = res.data;
      if (meta.status === 200) {
        this.rightArr = data;
        // console.log(this.rightArr);
      } else {
        this.$message.error(meta.msg);
      }
    }
  },
  mounted() {
    this.render();
  }
};
</script>

<style>
.el-breadcrumb {
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
}
</style>
