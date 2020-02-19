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
        <el-table-column label="状态" prop="mg_state">
          <template>
            <el-switch v-model="value">
            </el-switch>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页-->
      <el-pagination>
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
                query: '',
                pagenum: 1,
                pagesize: 5
            }
        },
        created() {
            this.getUsers();
        },
        methods: {
            /*获取用户数据*/
            getUsers() {
                this.axios.get('/users', {
                    params: {
                        query: this.query,
                        pagenum: this.pagenum,
                        pagesize: this.pagesize
                    }
                }).then(response => {
                    let res = response.data;
                    console.log(res);
                    if (res.meta.status !== 200) {
                        return this.$message.error("获取用户列表失败");
                    }
                    this.users = res.data.users;
                })
            }
        }
    }
</script>

<style scoped>

</style>
