<template>
  <div>
    <a href="/">退出</a>
    <span>storeId:{{$store.state.storeId}}</span>

    <el-container>
      <el-header>
        <el-menu
          :default-active="$route.path"
          router
          @open="handleOpen"

          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="newtalk">消息中心</el-menu-item>
          <el-menu-item index="updatePassword">修改密码</el-menu-item>

        </el-menu>
      </el-header>
      <NuxtLink to="/usercenter/newtalk">nuxt消息中心</NuxtLink>
      <NuxtLink to="/usercenter/updatePassword">nuxt修改密码</NuxtLink>
      <NuxtLink to="/usercenter/mycourse">nuxt我的课程</NuxtLink>
        <!--<router-view></router-view>-->
      <el-main>
        <nuxt-child/>
      </el-main>

    </el-container>
</div>
</template>

<script>
    export default {
        name: "_id",
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1',
          userid:'4'
        };
      },
      created() {
          this.userid = this.$route.params.id
        console.log(this.userid)
        this.sendrouterid(this.userid)
      },
      methods: {
        sendrouterid(userid) {
          this.$emit('sendrouterid',userid)
        },
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>

</style>
