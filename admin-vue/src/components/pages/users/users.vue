<template>
  <el-card>
    <!-- 用户列表页面主要分为三个结构
            1，面包屑导航
            2，搜索框
            3，用户信息表格
            4, 分页
    -->
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索框 -->
    <el-row>
      <el-col :span="7">
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="17">&nbsp;&nbsp;
        <el-button type="success" plain>添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 用户信息表格
            在用户信息表格中需要完成以下：
                1， 表头前面的 # 号
                2， 用户状态设置
                3， 操作 【删除，修改，角色分配】
    -->
    <!-- 
        data:  数据源
    -->
    <el-table :data="tableArr" border style="width: 100%">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column label="用户状态">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
          <el-button type="success" icon="el-icon-check" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页功能 -->
    <el-pagination
      :current-page="pagenum"
      :page-sizes="[5,10]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="20"
    ></el-pagination>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      tableArr: [],
      // 当前显示的页码
      pagenum: 1,
      // 每页显示的数据条数
      pagesize: 5
    };
  },
  methods: {
    async render() {
      var res = await this.$http.request({
        url: "/users",
        method: "get",
        params: { query: "", pagenum: this.pagenum, pagesize: this.pagesize },
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });

      console.log(res);
      var { meta, data } = res.data;
      if (meta.status === 200) {
        this.tableArr = data.users;
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
