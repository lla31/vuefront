<template>
    <div>
        <div>我的文章列表</div>
        <div style="margin-top: 40px">
            <!--<el-button @click="addArticle()">添加文章</el-button>-->
            <div class="articles-area">
                <el-card style="text-align: left">
                    <div v-for="article in articleList" :key="article.id">
                        <div style="float:left;width:85%;height: 150px;">
                            <router-link class="article-link" :to="'/article/'+article.id"><span style="font-size: 20px"><strong>{{article.title}}</strong></span></router-link>
                            <el-divider content-position="left">{{article.gmtCreate}}</el-divider>
                            <span v-html="article.content" class="article-content" :to="{path:'jotter/article',query:{id: article.id}}"><p></p></span>
                        </div>
                        <el-image
                                style="margin:50px 0px 0px 30px;width:100px;height: 100px"
                                :src="article.cover"
                                fit="cover">
                            <div slot="error" class="image-slot">
                                <i class="el-icon-picture-outline"></i>
                            </div>
                        </el-image>
                    </div>
                </el-card>
            </div>
        </div>
        <!-- 分页 -->
        <!--<el-pagination
                :current-page="page"
                :page-size="limit"
                :total="total"
                style="padding: 30px 0; text-align: center;"
                layout="total, prev, pager, next, jumper"
                @current-change="getAllarticleList"
        />-->

    </div>
</template>

<script>
    import article from "@/api/article";
    export default {
        name: "list",
        data(){
            return{
                articleList:[],
                page:1,
                limit:5, //每页记录数
                searchObj:{},
                total:0, //总记录数
            }
        },
        created() {
            this.getAllarticleList()
        },
        methods: {
            getAllarticleList() {

                article.getMyArticleById(this.$store.state.storeId)
                    .then(resp => {
                        this.articleList = resp.data.data.myArticleList
                    })
            }
        }
    }
</script>

<style scoped>

</style>
