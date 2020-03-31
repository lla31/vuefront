<template>
    <div id="myCourse">
        <span>我的课程有以下这些</span>
        <el-row>
            <!--<el-col :span="8" v-for="(item, index) in cartList" :key="item" :offset="index">-->
            <div style="display: inline;" v-for="item in cartList">
                <el-card class="card" :body-style="{ padding: '0px' }" style="width: 200px;margin-bottom: 20px;height: 200px;float: left;margin-right: 15px">
                    <img :src="item.cover" class="image" @click="goCourseDetailPage(item.id)">
                    <div>
                        <span>{{item.title}}</span>
                        <div class="bottom clearfix">
                            <span class="time">付费数：{{ item.buyCount }}</span>
                            <el-button type="text" class="button" @click="removeOneFromCart(item.id)">移出我的课程</el-button>
                        </div>
                    </div>
                </el-card>
            </div>
            <!--</el-col>-->
        </el-row>
    </div>
</template>

<script>
    import  {mapGetters} from 'vuex'
    import usercenter from "@/api/usercenter";
    export default {
        name: "index",
        data() {
            return{
                cartList: [],
                pagesize: 4,
                currentPage: 1,
                currentDate: {}
            }
        },
        /*computed: {
            ...mapGetters(['cartList'])
        },*/
        created() {
            this.cartList = this.$store.state.cartList
            this.getMyCourseList(this.$store.state.storeId)
        },
        methods: {
            getMyCourseList(id) {
              usercenter.getMyCourseList(id)
                .then(resp => {
                    //console.log(resp.data.data)
                    this.cartList = resp.data.data.myEduCourseList
                })
            },
            //清空购物车
            clearMyCourse() {
                this.$store.commit('clearCart')
                console.log("清空执行了")
            },
            //移除一门课程
            removeOneFromCart(id) {
                usercenter.removeOneFromMyCourse(id)
                  .then(resp => {
                      if(resp.data.code === 20000){
                          this.getMyCourseList(this.$store.state.storeId)
                          return this.$message({
                              type: 'success',
                              message: '移出成功'
                          })
                      }else {
                          return this.$message({
                              type: 'error',
                              message: '服务异常'
                          })
                      }

                  })
                  .catch(resp => {
                      return this.$message({
                          type: 'error',
                          message: '服务异常'
                      })
                  })
            },
            goCourseDetailPage(id){
                this.$router.push({path:'/course/'+id})
            }
        }
    }
</script>

<style scoped>
    /*新卡片样式 开始*/
    /*.card {
        width: 200px;
        height: 200px;
    }*/

    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 5px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 200px;
        height: 150px;
       /* display: block;*/
    }

    /*.clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }*/

    /*新卡片样式 结束*/

/*旧卡片样式*/
   /* .cover {
        width: 200px;
        height: 200px;
        margin-bottom: 7px;
        overflow: hidden;
        cursor: pointer;
    }

    img {
        width: 200px;
        height: 200px;
        !*margin: 0 auto;*!
    }

    .title {
        font-size: 14px;
        text-align: left;
    }

    .author {
        color: #333;
        width: 102px;
        font-size: 13px;
        margin-bottom: 6px;
        text-align: left;
    }

    .abstract {
        display: block;
        line-height: 17px;
    }

    a {
        text-decoration: none;
    }

    a:link, a:visited, a:focus {
        color: #3377aa;
    }
*/

</style>
