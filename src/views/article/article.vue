<template>
    <div>
        <div>文章&博客</div>
        <div style="margin-top: 40px">
            <!--<el-button @click="addArticle()">添加文章</el-button>-->
            <div class="articles-area">
                <el-card style="text-align: left">
                    <div v-for="article in articleList" :key="article.id">
                        <div style="float:left;width:85%;height: 150px;">
                            <router-link class="article-link" :to="'/article/'+article.id"><span style="font-size: 20px"><strong>{{article.title}}</strong></span></router-link>
                            <el-divider content-position="left">{{article.gmtCreate}}</el-divider>
                            <span class="article-content" :to="{path:'jotter/article',query:{id: article.id}}"><p>{{article.content}}</p></span>
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
        <el-pagination
                :current-page="page"
                :page-size="limit"
                :total="total"
                style="padding: 30px 0; text-align: center;"
                layout="total, prev, pager, next, jumper"
                @current-change="getAllarticleList"
        />
    </div>
</template>

<script>
    import article from "@/api/article";
    export default {
        name: "index",
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
            getAllarticleList(page=1) {
                this.page = page
                article.getArticlePageList(this.page,this.limit)
                    .then(resp => {
                        //console.log(resp.data)
                        console.log(resp.data)
                        this.articleList = resp.data.data.records
                        this.total = resp.data.data.total
                    })
            }
        }
    }
</script>

<style scoped>
    .articles-area {
        width: 990px;
        height: 750px;
        margin-left: 30px;
        margin-right: auto;
    }

    .article-link {
        text-decoration: none;
        color: #606266;
    }

    .article-link:hover {
        color: #409EFF;
    }

    /*设置文章列表卡片文字只显示两行*/
    .article-content {
        overflow:hidden;

        text-overflow:ellipsis;

        display:-webkit-box;

        -webkit-box-orient:vertical;

        -webkit-line-clamp:2;
    }
</style>
