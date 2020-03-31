<template>
    <div  class="prism-player" id="J_prismPlayer"></div>
</template>

<script>
    import vod from "@/api/vod"
    //import "@/assets/css/aliplayer-min.css";
    //import Aliplayer from "@/assets/js/aliplayer-min"
    export default {
        name: "vid1",
        mounted() {

            //判断vid和playAuth是否存在
            //if(this.vid && this.playAuth){
                /* eslint-disable no-undef */
                /*const player = new Aliplayer({
                    //组件名称
                    id: 'J_prismPlayer',

                    //播放凭证 播放
                    // vid: this.vid, // 视频id
                    // playauth: this.playAuth, // 播放凭证
                    vid: "6ebb119e92d0445384477f4281e643fb",
                    playauth: 'eyJTZWN1cml0eVRva2VuIjoiQ0FJUzN3SjFxNkZ0NUIyeWZTaklyNWJBRGU3YnFKSVMzNnE2V243QmszSWlPT1ppdUkzWjFEejJJSDFFZm5sb0FPa2FzUHd6bFd0UjZmd2Vsck1xRnNJYkdSS1lOcElwdjhrTXExUC9KcExGc3QySjZyOEpqc1VmN2MwRThWaXBzdlhKYXNEVkVma3VFNVhFTWlJNS8wMGU2TC8rY2lyWVhEN0JHSmFWaUpsaFE4MEtWdzJqRjFSdkQ4dFhJUTBRazYxOUszemRaOW1nTGlidWkzdnhDa1J2MkhCaWptOHR4cW1qL015UTV4MzFpMXYweStCM3dZSHRPY3FjYThCOU1ZMVdUc3Uxdm9oemFyR1Q2Q3BaK2psTStxQVU2cWxZNG1YcnM5cUhFa0ZOd0JpWFNaMjJsT2RpTndoa2ZLTTNOcmRacGZ6bjc1MUN0L2ZVaXA3OHhtUW1YNGdYY1Z5R0ZOLzhtNU9aUXJ6emFveGdMT2VxQVJtWGpJRFRiS3VTbWhnL2ZIY1dPRGxOZjljY01YSnFBWFF1TUdxSGV2WDNvQW1UUGxuN0YvbmVpZjVzallBSjVsSHA3TWVNR1YrRGVMeVF5aDBFSWFVN2EwNDRrTUNrS3I4Y3NNUWFnQUdpaUJQV3hIZ2J4aDk3NVM2V2lzbWxsZXd0NmNLNUdvM0xoakFvaEFlNS9PYmpuc1N5MHMxMFF2eldHek9NejVYbk5wR2Q4c29MOGtSQzc1a3BpWHF1RWFQOWZmOUVpZWIzNXNTRS9aNFBrWGdEVnlOVXJZeVQxL2NkeHI3ejZuR3lYVFcwRFVWYWZqZ1N5a2ZiL0cvUFBEMVhKUHpnVHREbXJOcG5HWHIrd3c9PSIsIkF1dGhJbmZvIjoie1wiQ0lcIjpcInhWQUswWUdXMXFobkg0NjlJSEI2VnhDemxkSXJOOEMvcGVYWk9mR0x3UVJjUHhramowS3VDcDczeDJFWWlybWRcXHJcXG5cIixcIkNhbGxlclwiOlwiOUEvV2dFYS9SOVRqcFFYRGRuYVVDdVZwZlpiYy85VDdselV1SkdYQmdRbz1cXHJcXG5cIixcIkV4cGlyZVRpbWVcIjpcIjIwMjAtMDMtMzFUMDg6Mzg6MzNaXCIsXCJNZWRpYUlkXCI6XCI2ZWJiMTE5ZTkyZDA0NDUzODQ0NzdmNDI4MWU2NDNmYlwiLFwiUGxheURvbWFpblwiOlwidi55aXR1b3NoaS5pY3VcIixcIlNpZ25hdHVyZVwiOlwiVFdXREFYRDQ4QncwZmp0SGRYUzAzUnJUNjRnPVwifSIsIlZpZGVvTWV0YSI6eyJTdGF0dXMiOiJOb3JtYWwiLCJWaWRlb0lkIjoiNmViYjExOWU5MmQwNDQ1Mzg0NDc3ZjQyODFlNjQzZmIiLCJUaXRsZSI6IuinhumikTQiLCJDb3ZlclVSTCI6Imh0dHA6Ly92LnlpdHVvc2hpLmljdS82ZWJiMTE5ZTkyZDA0NDUzODQ0NzdmNDI4MWU2NDNmYi9zbmFwc2hvdHMvM2QzNTI1ZmM3MmViNDE2MjllZmM5NmU4Y2QzYzI5OGQtMDAwMDEuanBnIiwiRHVyYXRpb24iOjUuOH0sIkFjY2Vzc0tleUlkIjoiU1RTLk5VdUZUb0VNM2hoUVhYcHdydzRpTldIcjYiLCJQbGF5RG9tYWluIjoidi55aXR1b3NoaS5pY3UiLCJBY2Nlc3NLZXlTZWNyZXQiOiJCS2kzWnZocUY4WUNlMU5oNmZwNXYxZjZHelpURUFWekFKWW1XekQ1cHp4MyIsIlJlZ2lvbiI6ImNuLXNoYW5naGFpIiwiQ3VzdG9tZXJJZCI6MTU1NjQ2NDMxMTk1MzI4Nn0=',

                    //视频地址 播放
                    //source: 'http://v.yituoshi.icu/sv/44085f07-1712b29bfea/44085f07-1712b29bfea.mp4',


                    width: '100%',
                    autoplay: true,
                    height: '500px',

                    // 以下可选设置
                    cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png', // 封面
                    //是否用h5播放器
                    //useH5Prism: true,
                    // 如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
                    //encryptType: '1',
                    // 返回音频还是视频
                    mediaType: 'video',

                }, function(player) {
                    console.log('播放器创建成功')
                });*/
            //}

        },
        data() {
            return{
                vid:"",
                playAuth:''
            }
        },
        created() {
            this.getPlayVideoAuth(this.$route.params.id)
        },
        methods: {
            /*play: function(){
                const player = this.$refs.player.instance
                player && player.play()
            },
            pause: function() {
                const player = this.$refs.player.instance
                player && player.pause()
            },
            replay: function() {
                const player = this.$refs.player.instance
                player && player.replay()
            },*/
            //创建播放器
            createPlayer() {
                const player = new Aliplayer({
                    //组件名称
                    id: 'J_prismPlayer',

                    //播放凭证 播放
                     vid: this.vid, // 视频id
                     playauth: this.playAuth, // 播放凭证
                    //vid: "6ebb119e92d0445384477f4281e643fb",
                    //playauth: 'eyJTZWN1cml0eVRva2VuIjoiQ0FJUzN3SjFxNkZ0NUIyeWZTaklyNWJBRGU3YnFKSVMzNnE2V243QmszSWlPT1ppdUkzWjFEejJJSDFFZm5sb0FPa2FzUHd6bFd0UjZmd2Vsck1xRnNJYkdSS1lOcElwdjhrTXExUC9KcExGc3QySjZyOEpqc1VmN2MwRThWaXBzdlhKYXNEVkVma3VFNVhFTWlJNS8wMGU2TC8rY2lyWVhEN0JHSmFWaUpsaFE4MEtWdzJqRjFSdkQ4dFhJUTBRazYxOUszemRaOW1nTGlidWkzdnhDa1J2MkhCaWptOHR4cW1qL015UTV4MzFpMXYweStCM3dZSHRPY3FjYThCOU1ZMVdUc3Uxdm9oemFyR1Q2Q3BaK2psTStxQVU2cWxZNG1YcnM5cUhFa0ZOd0JpWFNaMjJsT2RpTndoa2ZLTTNOcmRacGZ6bjc1MUN0L2ZVaXA3OHhtUW1YNGdYY1Z5R0ZOLzhtNU9aUXJ6emFveGdMT2VxQVJtWGpJRFRiS3VTbWhnL2ZIY1dPRGxOZjljY01YSnFBWFF1TUdxSGV2WDNvQW1UUGxuN0YvbmVpZjVzallBSjVsSHA3TWVNR1YrRGVMeVF5aDBFSWFVN2EwNDRrTUNrS3I4Y3NNUWFnQUdpaUJQV3hIZ2J4aDk3NVM2V2lzbWxsZXd0NmNLNUdvM0xoakFvaEFlNS9PYmpuc1N5MHMxMFF2eldHek9NejVYbk5wR2Q4c29MOGtSQzc1a3BpWHF1RWFQOWZmOUVpZWIzNXNTRS9aNFBrWGdEVnlOVXJZeVQxL2NkeHI3ejZuR3lYVFcwRFVWYWZqZ1N5a2ZiL0cvUFBEMVhKUHpnVHREbXJOcG5HWHIrd3c9PSIsIkF1dGhJbmZvIjoie1wiQ0lcIjpcInhWQUswWUdXMXFobkg0NjlJSEI2VnhDemxkSXJOOEMvcGVYWk9mR0x3UVJjUHhramowS3VDcDczeDJFWWlybWRcXHJcXG5cIixcIkNhbGxlclwiOlwiOUEvV2dFYS9SOVRqcFFYRGRuYVVDdVZwZlpiYy85VDdselV1SkdYQmdRbz1cXHJcXG5cIixcIkV4cGlyZVRpbWVcIjpcIjIwMjAtMDMtMzFUMDg6Mzg6MzNaXCIsXCJNZWRpYUlkXCI6XCI2ZWJiMTE5ZTkyZDA0NDUzODQ0NzdmNDI4MWU2NDNmYlwiLFwiUGxheURvbWFpblwiOlwidi55aXR1b3NoaS5pY3VcIixcIlNpZ25hdHVyZVwiOlwiVFdXREFYRDQ4QncwZmp0SGRYUzAzUnJUNjRnPVwifSIsIlZpZGVvTWV0YSI6eyJTdGF0dXMiOiJOb3JtYWwiLCJWaWRlb0lkIjoiNmViYjExOWU5MmQwNDQ1Mzg0NDc3ZjQyODFlNjQzZmIiLCJUaXRsZSI6IuinhumikTQiLCJDb3ZlclVSTCI6Imh0dHA6Ly92LnlpdHVvc2hpLmljdS82ZWJiMTE5ZTkyZDA0NDUzODQ0NzdmNDI4MWU2NDNmYi9zbmFwc2hvdHMvM2QzNTI1ZmM3MmViNDE2MjllZmM5NmU4Y2QzYzI5OGQtMDAwMDEuanBnIiwiRHVyYXRpb24iOjUuOH0sIkFjY2Vzc0tleUlkIjoiU1RTLk5VdUZUb0VNM2hoUVhYcHdydzRpTldIcjYiLCJQbGF5RG9tYWluIjoidi55aXR1b3NoaS5pY3UiLCJBY2Nlc3NLZXlTZWNyZXQiOiJCS2kzWnZocUY4WUNlMU5oNmZwNXYxZjZHelpURUFWekFKWW1XekQ1cHp4MyIsIlJlZ2lvbiI6ImNuLXNoYW5naGFpIiwiQ3VzdG9tZXJJZCI6MTU1NjQ2NDMxMTk1MzI4Nn0=',

                    //视频地址 播放
                    //source: 'http://v.yituoshi.icu/sv/44085f07-1712b29bfea/44085f07-1712b29bfea.mp4',


                    width: '100%',
                    autoplay: true,
                    height: '500px',

                    // 以下可选设置
                    cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png', // 封面
                    //是否用h5播放器
                    //useH5Prism: true,
                    // 如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
                    //encryptType: '1',
                    // 返回音频还是视频
                    mediaType: 'video',

                }, function(player) {
                    console.log('播放器创建成功')
                });
            },

            getPlayVideoAuth(vid) {
                vod.getPlayVideoAuth(vid)
                    .then(response => {
                        //console.log(response.data)
                        this.vid = this.$route.params.id
                        console.log(this.vid)
                        this.playAuth = response.data.data.playAuth
                        console.log(this.playAuth)
                        //创建播放器
                        this.createPlayer()
                    })
            }
        },

        /*mounted() {
            var player = new Aliplayer({
                id: 'J_prismPlayer',
                width: '100%',
                autoplay: false,
                cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png',
                //播放配置
                source: 'http://v.yituoshi.icu/sv/34710eb3-1712afa4569/34710eb3-1712afa4569.mp4'
            },function(player){
                console.log('播放器创建好了。')
            });
        }*/
    }
</script>

<style scoped>

</style>
