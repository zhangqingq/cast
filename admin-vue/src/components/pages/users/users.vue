<template>
  <el-card>
    <!-- 用户列表页面主要分为三个结构
            1，面包屑导航
            2，搜索框
            3，用户信息表格
            4, 分页
    -->
    <myBread firstNav="用户管理" lastNav="用户列表" />
    <!-- 搜索框 -->
    <el-row>
      <el-col :span="7">
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="searchData"></el-button>
        </el-input>
      </el-col>
      <el-col :span="17">&nbsp;&nbsp;
        <el-button type="success" plain @click="dialogAdd = true">添加用户</el-button>
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
          <!-- {{scope.row}} -->
          <el-switch
            v-model="scope.row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="setState(scope.row.id,scope.row.mg_state)"
          ></el-switch>
          --{{scope.row.id}}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle @click="openEdit(scope.row.id)"></el-button>
          <el-button type="danger" icon="el-icon-delete" circle @click="deleteUsers(scope.row.id)"></el-button>
          <el-button type="success" icon="el-icon-check" circle @click="openRole(scope.row.id)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页功能 -->
    <!-- 
        size-change	page-size 改变时会触发的事件
        current-change	current-page 改变时会触发的事件
        current-page  当前页
    -->
    <el-pagination
      :current-page="pagenum"
      :page-sizes="[5,10]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="sizeChange"
      @current-change="pageChange"
    ></el-pagination>

    <!-- 添加用户弹框 -->
    <!-- 
        visible	是否显示 Dialog，支持 .sync 修饰符 布尔值
    -->
    <el-dialog title="添加新用户" :visible.sync="dialogAdd">
      <el-form :model="addObj">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="addObj.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="addObj.password" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="addObj.email" type="email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="addObj.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAdd = false">取 消</el-button>
        <el-button type="primary" @click="addUsers">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 操作中第一个按钮的功能 -->
    <el-dialog title="修改用户" :visible.sync="dialogEdit">
      <el-form :model="editObj">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="editObj.username" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="editObj.email" type="email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="editObj.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEdit = false">取 消</el-button>
        <el-button type="primary" @click="editUsers(editObj.id)">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 操作中第三个按钮的功能 【分配用户角色】-->
    <el-dialog title="分配角色" :visible.sync="dialogRole">
      <el-form :model="roleObj">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="roleObj.username" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="角色设置" :label-width="formLabelWidth">
          {{roleObj.rid}}
          <!-- {{roleList}} -->
          <el-select v-model="roleObj.rid" placeholder="请选择">
            <el-option :disabled="true" label="请选择角色" :value="-1"></el-option>
            <el-option
              v-for="item in roleList"
              :key="item.id"
              :label="item.roleName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogRole = false">取 消</el-button>
        <el-button type="primary" @click="usersRole(roleObj.id,roleObj.rid)">确 定</el-button>
      </div>
    </el-dialog>
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
      pagesize: 5,
      dialogAdd: false,
      addObj: {},
      formLabelWidth: "120px",
      total: 0,
      dialogEdit: false,
      editObj: {},
      roleObj: {},
      dialogRole: false,
      // 所有的角色数据
      roleList: []
    };
  },
  methods: {
    async render() {
      var res = await this.$http.request({
        url: "/users",
        method: "get",
        params: {
          query: this.search,
          pagenum: this.pagenum,
          pagesize: this.pagesize
        },
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });

      console.log(res);
      var { meta, data } = res.data;
      if (meta.status === 200) {
        this.tableArr = data.users;
        this.total = data.total;
      } else {
        this.$message.error(meta.msg);
      }
    },
    // 【添加新用户】
    // 1，点击添加用户按钮打开弹框
    // 2, 点击弹框中的确认按钮，提交用户信息
    async addUsers() {
      var res = await this.$http.request({
        url: "users",
        method: "post",
        data: {
          ...this.addObj
        },
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      console.log(res);
      var { meta } = res.data;
      if (meta.status === 201) {
        this.$message({
          message: meta.msg,
          type: "success"
        });
        // 关闭弹窗
        this.dialogAdd = false;
        // 清空弹框里面的所有数据
        this.addObj = {};
      } else {
        this.$message.error(meta.msg);
      }
    },
    // 分页按钮操作
    sizeChange(size) {
      // 当也容量 pagesize 发生改变的时候会触发的操作
      // size-change 事件 element-ui 封装的时候自带一个参数，用来监听 页容量 的变化
      this.pagesize = size;
      this.render();
    },
    pageChange(num) {
      // 当 当前页发生改变的时候触发的事件
      // current-change 事件中自带一个参数，用来监听 当前页 的改变
      this.pagenum = num;
      this.render();
    },
    // 搜索功能的实现
    searchData() {
      this.render();
    },
    // 修改用户的状态
    async setState(id, state) {
      var res = await this.$http.request({
        url: `users/${id}/state/${state}`,
        method: "put",
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      //   console.log(res);
      var { meta, data } = res.data;
      if (meta.status === 200) {
        this.$message({
          message: meta.msg,
          type: "success"
        });
      } else {
        this.$message.error(meta.msg);
      }
    },
    // 修改用户的邮箱，电话【操作中的第一个按钮的功能】
    // 1, 打开弹框，将该用户信息展示在弹框中
    async openEdit(id) {
      this.dialogEdit = true;
      var res = await this.$http.request({
        url: `users/${id}`,
        method: "get",
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      //   console.log(res);
      var { meta, data } = res.data;
      if (meta.status === 200) {
        this.editObj = data;
      } else {
        this.$message.error(meta.msg);
      }
    },
    // 2, 修改用户信息
    async editUsers(id) {
      var res = await this.$http.request({
        url: `users/${id}`,
        method: "put",
        data: {
          ...this.editObj
        },
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      console.log(res);
      var { meta } = res.data;
      if (meta.status === 200) {
        this.$message({
          message: meta.msg,
          type: "success"
        });
        //   关闭弹框
        this.dialogEdit = false;
        this.render();
      } else {
        this.$message.error(meta.msg);
      }
    },
    // 【删除单个用户信息】
    async deleteUsers(id) {
      var res = await this.$http.request({
        url: `users/${id}`,
        method: "delete",
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      var { meta } = res.data;
      if (meta.status === 200) {
        this.$message({
          message: meta.msg,
          type: "success"
        });
        this.render();
      } else {
        this.$message.error(meta.msg);
      }
    },
    // 设置用户角色
    // 1，打开弹框，将用户名和角色列表渲染在弹框中
    async openRole(id) {
      this.dialogRole = true;
      this.getRoleList();
      var res = await this.$http.request({
        url: `users/${id}`,
        method: "get",
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      //   console.log(res);
      var { meta, data } = res.data;
      if (meta.status === 200) {
        this.roleObj = data;
        console.log(this.roleObj);
      } else {
        this.$message.error(meta.msg);
      }
    },
    // 获取权限列表
    async getRoleList() {
      var res = await this.$http.request({
        url: `roles`,
        method: "get",
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      //   console.log(res);
      var { meta, data } = res.data;
      if (meta.status === 200) {
        this.roleList = data;
        console.log(data);
      } else {
        this.$message.error(meta.msg);
      }
    },
    // 设置用户角色
    async usersRole(id, rid) {
      var res = await this.$http.request({
        url: `users/${id}/role`,
        method: "put",
        data: {
          rid: rid
        },
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      //   console.log(res);
      var { meta } = res.data;
      if (meta.status === 200) {
        this.$message({
          message: meta.msg,
          type: "success"
        });
        this.dialogRole = false;
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

</style>
