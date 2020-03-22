<template>
  <div class="main">
    <div class="title">
      <a class="active" href="/login">登录</a>
      <span>·</span>
      <a href="/register">注册</a>
    </div>

    <div class="sign-up-container">
      <form :model="user">
        <div class="input-prepend restyle">
          <el-input type="text" placeholder="用户名" v-model="user.username"/>
          <i class="iconfont icon-phone"/>
        </div>
        <div class="input-prepend">
          <el-input type="password" placeholder="密码" v-model="user.password"/>
          <i class="iconfont icon-password"/>
        </div>
        <div class="btn">
          <input type="submit" class="sign-in-button" value="登录" @click="login">
        </div>
        <!--<div @click="testrouter(user.id)">跳转test</div>-->
        <!--<a :href="'/login/'+user.id" target="_blank">跳转</a>-->

        <!--跳转测试，a标签中加入：  :href="'/'"  -->
        <!--<a  @click="teststore">teststore id +1</a>-->
        <div>{{$store.state.storeId}}</div>
      </form>
    </div>
  </div>
</template>

<script>
  /*import '~/assets/css/sign.css'
  import '~/assets/css/iconfont.css'*/
  import login from "@/api/login"

  import { mapMutations } from 'vuex'

  export default {
    layout: 'sign',
    asyncData({ params, error }) {
      return login.login(params.id)
        .then(response => {
          console.log(response.data.data)
          return {data: response.data.data}
        })
    },
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
                message: '登录失败'
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
