<template>
    <div>
      <!--<Usercenter @sendrouterid="getrouterid"></Usercenter>-->
      <h1 :span="10" :offset="3" class="h1">修改密码</h1>
      <el-row>
        <el-col :span="10" :offset="3">
          <el-form :model="user"   label-width="100px" class="demo-ruleForm">
            <el-form-item label="登录名">
              <el-input v-model="user.username" disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="updateUserById()">立即修改</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>


    </div>

</template>

<script>
  import login from "@/api/login"
    export default {
        name: "index",
      components: {},
      data() {
        return {
          user: {
            username: '',
            password: '',
            email: ''
          }
        }
      },
      created() {
          this.init()
      },
      methods: {
        init() {
          if(this.$store.state.storeId) {//修改按钮点击 数据回显
            const id = this.$store.state.storeId
            console.log(id)
            this.getUserById(id)
          }

        },

        getUserById(id){
            login.getUserById(id)
                 .then(resp => {
                   this.user = resp.data.data.user
                 })
        },

        updateUserById() {
          login.updateUserById(this.user.id,this.user)
            .then(resp => {
              return this.$message({
                type: 'success',
                message: '修改成功!'
              })
            })
            .catch(() =>{
              alert("修改失败")
            })
        }

      }


    }
</script>

<style scoped>
  .h1{
    /*margin: 0 auto;*/
    /*text-align: center;*/
    margin-left: 200px;
    margin-bottom: 30px;
  }
</style>
