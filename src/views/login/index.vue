<template>
  <div class="main">
    <body id="poster">
    <el-form :model="user" label-position="left" label-width="0px"
             class="demo-ruleForm login-container">
      <h1 class="login_title">用户登录</h1>
      <el-form-item>
        <el-input type="text" placeholder="用户名" v-model="user.username"/>
      </el-form-item>
      <el-form-item>
        <el-input type="password" placeholder="密码" v-model="user.password"/>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" class="loginBtn" style="width: 100%;background: #505458"
                   @click="fixlogin()">登录
        </el-button>
      </el-form-item>
    </el-form>
    </body>
    <!--样式登录-->
    <!--<el-row class="main-container">
      <el-col :lg="8" :xs="16" :md="10" :span="10">
        <div class="top">
          <i class="iconfont icon-kaoshi"></i><span class="title">科技大网校欢迎你</span>
        </div>
        <div class="bottom">
          <div class="container">
            <p class="title">账号登录</p>
            <el-form :label-position="labelPosition" label-width="80px" :model="user">
              <el-form-item label="用户名">
                <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="user.password" placeholder="请输入密码" type='password'></el-input>
              </el-form-item>
              <div class="submit">
                <el-button type="primary" class="row-login" @click="login()">登录</el-button>
              </div>
              &lt;!&ndash; <div class="options">
                <p class="find"><a href="javascript:;">找回密码</a></p>
                <div class="register">
                  <span>没有账号?</span>
                  <span><a href="javascript:;">去注册</a></span>
                </div>
              </div> &ndash;&gt;
            </el-form>
          </div>
        </div>
      </el-col>
    </el-row>-->
    <!--样式登录-->

    <!--原始登录-->
    <!--<div class="title">
      <a class="active" href="/login">登录</a>
      <span>·</span>
      <a href="/register">注册</a>
    </div>

    <div class="sign-up-container">
      <form :model="user">
        <div class="input-prepend restyle" :span="10" :offset="3">
          <el-input type="text" placeholder="用户名" v-model="user.username"/>
          <i class="iconfont icon-phone"/>
        </div>
        <div class="input-prepend" :span="10" :offset="3">
          <el-input type="password" placeholder="密码" v-model="user.password"/>
          <i class="iconfont icon-password"/>
        </div>
        <div class="btn">
          <input type="submit" class="sign-in-button" value="登录" @click="login">
        </div>
        &lt;!&ndash;<div @click="testrouter(user.id)">跳转test</div>&ndash;&gt;
        &lt;!&ndash;<a :href="'/login/'+user.id" target="_blank">跳转</a>&ndash;&gt;

        &lt;!&ndash;跳转测试，a标签中加入：  :href="'/'"  &ndash;&gt;
        &lt;!&ndash;<a  @click="teststore">teststore id +1</a>&ndash;&gt;
        <div>{{$store.state.storeId}}</div>
      </form>
    </div>-->
    <!--原始登录-->

  </div>
</template>

<script>
  /*import '~/assets/css/sign.css'
  import '~/assets/css/iconfont.css'*/
  import login from "@/api/login"

  import { mapMutations } from 'vuex'

  export default {
    layout: 'sign',
    /*asyncData({ params, error }) {
      return login.login(params.id)
        .then(response => {
          console.log(response.data.data)
          return {data: response.data.data}
        })
    },*/
    data() {
      return {
        user: {
          username:'user',
          password:'123',
          id:''
        }
      }
    },

    created() {
      console.log(this.$store.state.storeId)
    },

    methods: {
      login() {
        login.login(this.user)
          .then(resp => {
            console.log(resp.data.data.user)
            //获取user对象
            this.user = resp.data.data.user

            console.log(resp.data.data)
            //状态码20000
            console.log(resp.data.code)
            //获取user的id
            const id = this.user.id
            //1 显示id
            console.log(id)

            /*//将user的id赋值给 storeId
            this.$store.state.storeId = id
            //2 显示store中的id情况
            console.log(this.$store.state.storeId)*/

            //mutations修改store中的state对象
            this.$store.commit('changeId',this.user.id)
            console.log(this.$store.state.storeId)
            /*//跳转到首页
            this.$router.push({path:'course/{id}'})*/

            //判断是否成功
            if(resp.data.code === 20001) {
              return this.$message({
                type: 'error',
                message: '用户名或密码错误'
              })
            }else {
              window.location.href = 'http://localhost:8080/usercenter'
              /*this.$router.push({path:'localhost:3000',params:{id}})*/
              /*this.$router.push({path:'/{id}'})
              this.testrouter(id)*/
              return this.$message({
                type: 'success',
                message: '登录成功'
              })
            }
          })
          .then(() => {
          })
          .catch(resp => {})
      },

      fixlogin(){
        login.login(this.user)
          .then(resp => {
            if(resp.data.code === 20000){
              //1.获取user对象
              this.user = resp.data.data.user
              //2.获取user的id
              const id = this.user.id
              //3.mutations修改store中的state对象
              this.$store.commit('changeId',id)
              window.location.href = 'http://localhost:8080/'
              return this.$message({
                type: 'success',
                message: '登录成功'
              })
            }else {
              return this.$message({
                type: 'error',
                message: '用户名或密码错误'
              })
            }

          })
          .catch(resp => {

          })
      },
      testrouter(id) {
        console.log(id)
        this.$router.push({path:'/login/'+id})
      },

      teststore() {
        this.$store.commit('changeId')
        console.log(this.$store.state.storeId)
      }


    }

  }
</script>

<style  scoped>
  /*whitej登录样式*/
  #poster {
    background:url("../../assets/img/loginbg.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
  }

  .login-container{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .loginBtn {
    color: mediumorchid;
  }
  /*.title{
    margin: 0 auto;
  }
  .sign-up-container{
    margin: 0 auto;
  }*/

</style>
