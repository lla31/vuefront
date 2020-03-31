<template>
    <div>
      <span>storeId:{{$store.state.storeId}}</span>
      <el-container>

        <el-container>
          <el-aside>
            <el-menu
              :default-active="$route.path"
              router
              @open="handleOpen"
              @select="handleSelect"
              mode="vertical"

              class="el-menu"
              background-color="#2E8B57"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-menu-item index="/usercenter/mycourse">我的课程</el-menu-item>
              <el-submenu index="2">
                <template slot="title">文章控制台</template>
                <el-menu-item index="/usercenter/myarticle">我的文章</el-menu-item>
                <el-menu-item index="/usercenter/publishcontent">发布内容</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="newtalk">消息中心</el-menu-item>
              <el-menu-item index="/usercenter/updatePassword">修改密码</el-menu-item>
            </el-menu>

          </el-aside>
        </el-container>

        <el-container class="container">
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>

      </el-container>
    </div>
</template>

<script>
    export default {
        name: "index",

    }
</script>

<style scoped>
  .el-menu{
    width: 150px;
  }
  .container{
    margin-left: auto;
  }
</style>
