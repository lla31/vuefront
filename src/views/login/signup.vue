<template>

  <el-row>
    <h1>立即注册</h1>
    <el-col :span="10" :offset="3">
      <el-form :model="user" :rules="rules" ref="user" label-width="100px" class="demo-ruleForm">
        <el-form-item label="登录名" prop="username">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword">
          <el-input type="password" v-model="user.checkPassword" ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="user.email"></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="sex">
          <el-select v-model="user.sex" placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
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
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.user.password !== '') {
              this.$refs.user.validateField('checkPassword');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.user.password) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };

        return {
          options: [{
            value: '男',
            label: '男'
          }, {
            value: '女',
            label: '女'
          }],

          user: {
            username: '',
            password: '',
            email:'',
            sex: '',
            isTeacher: ''
          },
          checkPassword: '',
          rules: {
            username: [
              {required: true, message: '请输入登录名', trigger: 'blur'},
              {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
            ],
            password: [
              {required: true,message: '请输入密码', validator: validatePass,trigger: 'blur'},
              {min: 3, max: 10, message: '长度在 3 到 10 个字符,至少包含大小写字母各一个', trigger: 'blur'}
            ],
            checkPassword: [
              {required: true, validator: validatePass2,trigger: 'blur'},
              {min: 3, max: 10, message: '', trigger: 'blur'}
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
          this.user.isTeacher = 0
          login.addUser(this.user)
            .then(resp => {
              /*window.location.href = 'http://localhost:3000/login'*/
              if(resp.data.code === 20000){
                this.$router.push({path: '/login'})
                return this.$message({
                  type: 'success',
                  message: '添加成功!'
                })
              }else {
                alert("用户名已被占用")
                /*return this.$message({
                  type: 'error',
                  message: '用户名已被占用'
                })*/
              }

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
