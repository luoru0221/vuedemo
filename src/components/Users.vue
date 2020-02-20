<template>
  <div>
    <!-- 导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <!--栅格系统-->
      <el-row :gutter="20">
        <el-col :span="10">
          <el-input placeholder="请输入内容" clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>

      <!-- 用户列表 -->
      <el-table border :stripe="true" :data="users">
        <el-table-column type="index"></el-table-column>
        <el-table-column label="姓名" prop="username"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="电话" prop="mobile"></el-table-column>
        <el-table-column label="角色" prop="role_name"></el-table-column>
        <!--通过作用域插槽自定义数据展示方式-->
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.mg_state">
            </el-switch>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="190px">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
            <el-tooltip class="item" effect="dark" content="分配角色" placement="top" :enterable="false">
              <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页-->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page="page.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="page.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-card>

  </div>
</template>

<script>
    export default {
        name: "Users",
        data() {
            return {
                users: [],

                page: {
                    query: '',
                    pagenum: 1,
                    pagesize: 1
                },
                total:0
            }
        },
        created() {
            this.getUsers();
        },
        methods: {
            /*获取用户数据*/
            getUsers() {
                this.axios.get('/users', {
                    params:this.page
                }).then(response => {
                    let res = response.data;
                    console.log(res);
                    if (res.meta.status !== 200) {
                        return this.$message.error("获取用户列表失败");
                    }
                    this.users = res.data.users;
                    this.total = res.data.total;
                })
            },
            //监听pageSize的改变
            handleSizeChange(newSize){
                this.page.pagesize = newSize;
                this.getUsers();
            },
            //监听pageNum的改变
            handleCurrentChange(newPageNum){
                this.page.pagenum = newPageNum;
                this.getUsers();
            },
        }
    }
</script>

<style scoped>

</style>
