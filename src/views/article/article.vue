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
                                fit="cover"></el-image>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
    import article from "../../api/article";
    export default {
        name: "index",
        data(){
            return{
                articleList:[]
            }
        },
        created() {
            this.getAllarticleList()
        },
        methods: {
            getAllarticleList() {
                article.getAllarticleList()
                    .then(resp => {
                        //console.log(resp.data)
                        this.articleList = resp.data.data.articleList
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

    .article-content {
        overflow:hidden;

        text-overflow:ellipsis;

        display:-webkit-box;

        -webkit-box-orient:vertical;

        -webkit-line-clamp:2;
    }
</style>
