<template>
  <div class="login_container">
    <div class="login_box">

      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="logo">
      </div>

      <!-- 登录表单 :model绑定数据对象，:rules绑定验证规则对象，ref引用-->
      <el-form label-width="0px" :model="loginForm" :rules="rules" ref="loginFormRef" class="login_form">
        <!-- 用户名 prop属性用于指定对应的验证规则-->
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" v-model="loginForm.username">
            <i slot="prefix" class="iconfont icon-user"></i>
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="loginForm.password">
            <i slot="prefix" class="iconfont icon-3702mima"></i>
          </el-input>
        </el-form-item>
        <!-- 按钮-->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loginForm: {
                    username: "",
                    password: ""
                },
                rules: {
                    //表单验证规则
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 4, max: 10, message: '长度在 4 到 10 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur'}
                    ],
                }
            }
        },
        methods: {

            //登录
            login() {
                let that = this;
                //提交登录前对数据进行预验证,回调函数中的valid参数表示是否通过验证
                /*that.$refs['loginFormRef'].validate(function (valid) {
                    if (!valid) {
                        return;
                    }
                    that.axios.post('/login', that.loginForm)
                        .then(response => {
                            let res = response.data;
                            console.log(res);
                            if (res.meta.status !== 200) {
                                return that.$message.error("用户名或密码错误");
                            }
                            that.$message({
                                message: "登录成功",
                                type: "success"
                            });
                            window.sessionStorage.setItem("token", res.data.token)
                            that.$router.push("/home");
                        })
                        .catch(error => {
                            console.log(error);
                        })
                });*/

                /**
                 * 当使用匿名函数时，this引用的是外部的Vue实例
                 */
                that.$refs['loginFormRef'].validate(valid => {
                    if (!valid) {
                        return;
                    }
                    this.axios.post('/login', this.loginForm)
                        .then(response => {
                            let res = response.data;
                            console.log(res);
                            if (res.meta.status !== 200) {
                                return this.$message.error("用户名或密码错误");
                            }
                            this.$message({
                                message: "登录成功",
                                type: "success"
                            });
                            //将token保存到sessionStorage中
                            window.sessionStorage.setItem("token", res.data.token)
                            this.$router.push("/home");
                        })
                        .catch(error => {
                            console.log(error);
                        })
                })
            },

            reset() {
                //重置对应引用的表单
                this.$refs['loginFormRef'].resetFields();
            }
        }
    }
</script>

<style lang="less" scoped>
  .login_container {
    background-color: #2b4b6b;
    height: 100%;
  }

  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar_box {
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }

  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .btns {
    display: flex;
    justify-content: flex-end;
  }
</style>
