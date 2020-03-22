<template>
  <div class="main">
    <h1>用户页</h1>
    <h1>垃圾nuxt</h1>
    <h1>id:{{$route.params.id}}</h1>
      <!-- 更多登录方式 -->
      <!--<div class="more-sign">
        <h6>社交帐号登录</h6>
        <ul>
          <li><a id="weixin" class="weixin" target="_blank" href="http://localhost:8003/api/ucenter/wx/login"><i class="iconfont icon-weixin"/></a></li>
          <li><a id="qq" class="qq" target="_blank" href="#"><i class="iconfont icon-qq"/></a></li>
        </ul>
      </div>-->
    <a :href="/center/" tag="li" active-class="current" exact>
      <a>个人中心</a>
    </a>
  </div>
</template>

<script>
/*import '~/assets/css/sign.css'
import '~/assets/css/iconfont.css'*/
import login from "@/api/login"

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
        username:'',
        password:''
      }
    }
  },
  created() {
    console.log(this.$route.params)
  },

  methods: {

  }
}
</script>
