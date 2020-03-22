<template>
    <div>
      <h1>我的课程有以下这些</h1>
        <span @click="clearMyCourse">清空我的课程</span>

        <el-row>
            <el-tooltip effect="dark" placement="right"
                        v-for="item in cartList"
                        :key="item.id">
                <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.title}}</p>
                <p slot="content" style="font-size: 13px;margin-bottom: 6px">
                    <span>{{item.teacherName}}</span> /
                    <span>{{item.price}}</span> /
                    <span>{{item.buyCount}}</span>
                </p>
                <p slot="content" style="width: 300px" class="abstract">{{item.abs}}</p>
                <el-card style="width: 300px;margin-bottom: 20px;height: 290px;float: left;margin-right: 15px" class="book"
                         bodyStyle="padding:10px" shadow="hover">
                    <div class="cover" @click="goCourseDetailPage(item.id)">
                        <img :src="item.cover" alt="封面">
                    </div>
                    <div class="info">
                        <div class="title">
                            <a href="">{{item.title}}</a>
                        </div>
                    </div>
                    <div class="author">{{item.teacherName}}</div>
                </el-card>
            </el-tooltip>
        </el-row>

        <el-row>
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[1,2,3,4,5,6,7,8]"
                    :page-size="pagesize"
                    :total="cartList.length">
            </el-pagination>
        </el-row>
    </div>
</template>

<script>
    import  {mapGetters} from 'vuex'
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
        },
        methods: {
            clearMyCourse() {
                this.$store.commit('clearCart')
                console.log("清空执行了")
            },
            goCourseDetailPage(id){
                this.$router.push({path:'/course/'+id})
            }
        }
    }
</script>

<style scoped>
    .cover {
        width: 200px;
        height: 200px;
        margin-bottom: 7px;
        overflow: hidden;
        cursor: pointer;
    }

    img {
        width: 200px;
        height: 200px;
        /*margin: 0 auto;*/
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
</style>
