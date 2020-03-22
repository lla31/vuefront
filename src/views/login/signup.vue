<template>
  <el-row>
    <el-col :span="10" :offset="3">
      <el-form :model="user" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="登录名" prop="username">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="user.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="add(user)">立即创建</el-button>
          <el-button @click="resetForm(user)">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import login from "@/api/login"
    export default {
      name: "index",
      data() {
        return {
          user: {
            username: '',
            password: '',
            email:''
          },
          rules: {
            username: [
              {required: true, message: '请输入登录名', trigger: 'blur'},
              {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
            ],
            password: [
              {required: true, message: '请输入密码', trigger: 'blur'},
              {min: 3, max: 10, message: '长度在 3 到 10 个字符,至少包含大小写字母各一个', trigger: 'blur'}
            ],
            email: [
              {required: true, message: '请输入邮箱', trigger: 'blur'},
              {min: 3, max: 20, message: '请输入正确的邮箱格式', trigger: 'blur'}
            ]

          }
        };
      },
      methods: {
        add() {
          login.addUser(this.user)
            .then(resp => {
              /*window.location.href = 'http://localhost:3000/login'*/
              this.$router.push({path: '/login'})
              console.log(resp.data)
               return this.$message({
                type: 'success',
                message: '添加成功!'
              })
            })
            .catch(() => {

            })
        },
        resetForm(user) {
            this.user.password='',
            this.user.username=''
        }

      }


    }
</script>

<style scoped>

</style>
