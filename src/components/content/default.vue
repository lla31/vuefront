<template>
  <div class="in-wrap">
    <!-- 公共头引入 -->
    <header id="header">
      <section class="container">
        <h1 id="logo">
          <a href="#" title="科技大网校">
            <img src="~/assets/img/科技大网校2.png" width="100%" alt="科技大网校">
          </a>
        </h1>
        <div class="h-r-nsl">
          <ul class="nav">
            <router-link to="/" tag="li" active-class="current" exact>
              <a>首页</a>
            </router-link>
            <router-link :to="{path: '/course'}" tag="li">
              <a>课程</a>
            </router-link>
            <router-link to="/teacher" tag="li" active-class="current">
              <a>名师</a>
            </router-link>
            <router-link to="/article" tag="li" active-class="current">
              <a>文章</a>
            </router-link>
            <router-link to="/qa" tag="li" active-class="current">
              <a>问答</a>
            </router-link>
            <router-link
              v-if="isShow"
              to="/usercenter" tag="li" active-class="current">
              <a>用户中心</a>
            </router-link>

             <!--测试传值 -->
              <!--<span>id:{{$route.params.id}}</span>-->
            <!-- storeId 全局用户id-->
              <!--<span>storeId:{{$store.state.storeId}}</span>-->

          </ul>
          <!-- / nav -->

          <!-- /未登录显示第1 li；登录后显示第2，3 li -->
          <ul
            class="h-r-login">

            <li
              v-show="isShow2"
              id="no-login">
              <a href="/login" title="登录">
                <em class="icon18 login-icon">&nbsp;</em>
                <span class="vam ml5">登录</span>
              </a>

              <a href="/signup" title="注册">
                <span class="vam ml5">注册</span>
              </a>
            </li>

            <!-- 登录成功后 -->
            <!--<li v-show="isShow">
              欢迎[{{user.username}}]
              <img src="../../assets/img/logo/touxiang1.png">
              <a href="/">
                <span class="vam ml2" @click="imitatelogout">退出</span>
              </a>
            </li>-->
            <!--借鉴右上角图标显示 开始-->
            <li v-show="isShow"
                class="right" @mouseenter="flag = !flag" @mouseleave="flag = !flag">
              <a href="javascript:;"><i class="iconfont icon-Userselect icon"></i>欢迎，{{user.username}}</a>
              <div class="msg" v-if="flag">
                <p @click="toUsercenter()">用户中心</p>
                <a href="/">
                  <p class="exit" @click="imitatelogout()">退出</p>
                </a>
              </div>
            </li>
            <!--借鉴右上角图标显示 结束-->

            <li
              v-show="isShow"
              class="mr10 undis" id="is-login-one">
              <a href="#" title="消息" id="headerMsgCountId">
                <em class="icon18 news-icon">&nbsp;</em>
              </a>
              <q class="red-point" style="display: none">&nbsp;</q>
            </li>

            <li
              v-show="isShow"
              class="h-r-user undis" id="is-login-two">
              <a href="#" title>
                <img
                  src="~/assets/img/avatar-boy.gif"
                  width="30"
                  height="30"
                  class="vam picImg"
                  alt
                >
                <span class="vam disIb" id="userName"></span>
              </a>
              <a href="javascript:void(0)" title="退出" onclick="exit();" class="ml5">退出</a>
            </li>
            <!-- /未登录显示第1 li；登录后显示第2，3 li -->

            <!-- 搜索框 -->
          </ul>
          <aside class="h-r-search">
            <form action="#" method="post">
              <label class="h-r-s-box">
                <input type="text" placeholder="输入你想学的课程" name="queryCourse.courseName" value>
                <button type="submit" class="s-btn">
                  <em class="icon18">&nbsp;</em>
                </button>
              </label>
            </form>
          </aside>
        </div>
        <aside class="mw-nav-btn">
          <div class="mw-nav-icon"></div>
        </aside>
        <div class="clear"></div>
      </section>
    </header>
    <!-- /公共头引入 -->

    <!-- 文件夹page -->
    <!--<nuxt/>-->

    <!-- 公共底引入 -->
    <!--<footer id="footer">
      <section class="container">
        <div class>
          <h4 class="hLh30">
            <span class="fsize18 f-fM c-999">友情链接</span>
          </h4>
          <ul class="of flink-list">
            <li>
              <a href="http://www.atguigu.com/" title="科技大网校" target="_blank">科技大网校</a>
            </li>
          </ul>
          <div class="clear"></div>
        </div>
        <div class="b-foot">
          <section class="fl col-7">
            <section class="mr20">
              <section class="b-f-link">
                <a href="#" title="关于我们" target="_blank">关于我们</a>|
                <a href="#" title="联系我们" target="_blank">联系我们</a>|
                <a href="#" title="帮助中心" target="_blank">帮助中心</a>|
                <a href="#" title="资源下载" target="_blank">资源下载</a>|
                <span>服务热线：123456</span>
                <span>Email：123456.com</span>
              </section>
              <section class="b-f-link mt10">
                <span>©2020课程版权均归科技大网校所有</span>
              </section>
            </section>
          </section>
          <aside class="fl col-3 tac mt15">
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wx-icon.png" alt>
              </span>
            </section>
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wb-icon.png" alt>
              </span>
            </section>
          </aside>
          <div class="clear"></div>
        </div>
      </section>
    </footer>-->
    <!-- /公共底引入 -->
  </div>
</template>
<script>
  import "@/assets/css/reset.css";
  import "@/assets/css/theme.css";
  import "@/assets/css/global.css";
  import "@/assets/css/web.css";
  import login from "../../api/login";

  export default {
    data() {
      return{
        //右上角用户中心
        flag: false,

        isShow:false,
        isShow2:true,
        user: {}
      }
    },
    created() {
      if(this.$store.state.storeId){
        this.isShow = true
        this.isShow2 = false
      }

      this.getUserByUserId(this.$store.state.storeId)
    },
    methods: {
      toUsercenter() {
        this.$router.push({path:'/usercenter/mycourse'})
      },
      imitatelogout() {
        this.$store.commit('changeId','')
      },

      getUserByUserId(id){
        login.getUserById(id)
                .then(resp => {
                  this.user = resp.data.data.user
                })
      }
    }
  };
</script>

<style scoped>
  /*右上角用户中心*/
  .right .icon {
    margin-right: 6px;
  }
  .right .msg {
    text-align: center;
    /*position: absolute;
    top: 60px;
    left: 0px;
    display: flex;
    flex-direction: column;*/
    border-radius: 2px;
    border-bottom: 3px solid #0195ff;
    background-color: #fff;
  }
  .right .msg p {
    height: 40px;
    line-height: 40px;
    width: 105px;
    font: 15px Helvetica;
  }
  .right .msg p:hover {
    background-color: #0195ff;
  }
  /*右上角用户中心*/
</style>
