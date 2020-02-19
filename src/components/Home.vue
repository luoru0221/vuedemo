<template>

  <el-container class="home-container">
    <!--头部-->
    <el-header>
      <div>
        <img src="../assets/heima.png" alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出登录</el-button>
    </el-header>

    <!--主体-->
    <el-container>

      <!--左边侧边栏-->
      <el-aside width="200px" :width="isCollapse?'64px':'200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!--侧边栏菜单-->
        <el-menu class="el-menu-vertical-demo" background-color="#333744" text-color="#fff"
                 active-text-color="#409EFF" v-model="menuList" :router="true"
                 :unique-opened="true" :collapse="isCollapse" :collapse-transition="false"
                 :default-active="this.$route.path">
          <!--一级菜单-->
          <el-submenu :index="menuItem.id+''" v-for="menuItem in menuList" :key="menuItem.id">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{menuItem.authName}}</span>
            </template>
            <!--二级菜单-->
            <el-menu-item :index="'/'+subItem.path" v-for="subItem in menuItem.children" :key="subItem.id">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!--右边主体-->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                menuList: [],
                isCollapse: false
            }
        },
        created() {
            this.getMenuList();
        },
        methods: {
            //退出登录
            logout() {
                //清除sessionStorage
                window.sessionStorage.clear();
                this.$router.push('/login');
            },
            //菜单水平折叠与展开切换
            toggleCollapse() {
                this.isCollapse = !this.isCollapse;
            },

            //请求左侧菜单区域选项
            getMenuList() {
                this.axios.get('/menus')
                    .then(response => {
                        let res = response.data;
                        if (res.meta.status !== 200) {
                            return this.$message.error("获取菜单失败");
                        }
                        this.menuList = res.data;
                    })
                    .catch(error => console.log(error));
            }
        }
    }
</script>

<style lang="less" scoped>

  .home-container {
    height: 100%;
  }

  .el-header {
    background-color: #373D41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #ffffff;
    font-size: 20px;

    > div {
      display: flex;
      align-items: center;

      span {
        margin-left: 10px;
      }
    }
  }

  .el-aside {
    background-color: #333744;

    .el-main {
      border-right: none;
    }
  }

  .el-main {
    background-color: #EAEDF1;
  }

  .toggle-button {
    background-color: #4A5064;
    font-size: 10px;
    line-height: 24px;
    color: #ffffff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }

</style>
