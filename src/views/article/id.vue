<template>
    <div>
        <!--<h1>我是详情页</h1>-->
        <!--content开始-->
        <div class="content w">
            <h1>{{ArticleDetail.title}}</h1>
            <div class="mainArticle">
                <span class="p0">发布人： {{user.username}}</span>
                <span class="p1">最后发布于： {{ArticleDetail.gmtCreate}}</span>
                <span class="p2">浏览数： {{ArticleDetail.viewCount}}</span>
                <span class="p3">点赞： {{ArticleDetail.admireCount}}</span>
                <!--图片div-->
                <div class="imgDiv">
                    <img :src="ArticleDetail.cover" width="390" height="250" alt="">
                </div>
                <!--文章主体的 文字部分-->
                <p class="p4" v-html="ArticleDetail.content"></p>
                <br>
                <p>完……</p>
                <br>

                <p class="p5">有什么想说的？</p>
                <!--评论 开始-->
                    <!--<comment></comment>-->
                <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="最多输入140字"
                        v-model="submitoneComment.oneComment"
                        @click.native="unfoldSubmitBtn"
                        id="input1"
                        maxlength="140"
                        show-word-limit
                        >
                </el-input>
                <el-button type="success" v-show="isShow" @click="submitComment()">发表评论</el-button>
                <ul class="commentList">
                    <li
                            v-for="oneComment in commentList"
                            :key="oneComment.id">
                        <span class="userNamebg"><strong>{{oneComment.username}}:</strong></span>
                        <span>{{ oneComment.oneComment }}
                            <span class="acts1">
                                <el-button type="text" @click="openTwoCommentDialog(oneComment.id)">回复</el-button>
                                <el-button type="text" @click="getChapterById(oneComment.id)">举报</el-button>
                                <el-button v-show="true" type="text" @click="removeOneComment(oneComment.id)">删除</el-button>
                            </span>
                        </span>

                        <!-- 二级评论 -->
                        <ul class="twocommentList commentList">
                            <li
                                    v-for="twoComment in oneComment.children"
                                    :key="twoComment.id">
                                <span><strong>{{twoComment.username}}:</strong></span>
                                <span>{{ twoComment.twoComment }}
                                    <span class="acts1">
                                    <el-button type="text" @click="adent(twoComment.id)">回复</el-button>
                                    <el-button type="text" @click="getChapterById(oneComment.id)">举报</el-button>
                                    <el-button v-if=" 1 ===1 " type="text" @click="removeTwoComment(twoComment.id)">删除</el-button>
                                </span>
                                </span>
                            </li>
                        </ul>

                    </li>
                </ul>
                <!--评论 结束-->

                <!--添加二级评论弹框-->
                <el-dialog :visible.sync="dialogChapterFormVisible" title="回复他">
                    <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="最多输入140字"
                            v-model="submitTwoComment.twoComment"
                            label-width="120px"
                            maxlength="140"
                            show-word-limit
                            >
                    </el-input>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogChapterFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="addTwoComment">确 定</el-button>
                    </div>
                </el-dialog>
                <!--添加二级评论弹框-->

                <!--learn more-->
                <a href="#" class="lm">learn more ……</a>
            </div>
        </div>
        <!--content结束-->
    </div>
</template>

<script>
    import article from "../../api/article";
    import Comment from "./comment"
    import login from "../../api/login"
    export default {
        name: "_id",
        components:{Comment},
        data() {
            return{
                ArticleDetail:{},
                commentList:[],
                user:{
                    username:''
                },

                isShow:false,
                submitoneComment:{},
                submitTwoComment:{},
                deleteIsShow:false,
                //二级评论弹框
                dialogChapterFormVisible: false
            }
        },
        created() {
            this.getArticleDetailById(this.$route.params.id)
            this.getAllComment(this.$route.params.id)
            //console.log(this.ArticleDetail.userId)
            //this.getUserByUserId(this.ArticleDetail.userId)
        },
        methods:{

            //打开添加二级评论弹框
            openTwoCommentDialog(oneCommentId){
                //打开弹框同时获取一级评论id
                this.submitTwoComment.oneCommentId = oneCommentId
                this.dialogChapterFormVisible = true
            },

            addTwoComment(){
                this.submitTwoComment.username = this.user.username
                this.submitTwoComment.articleId = this.$route.params.id
                this.submitTwoComment.admireCount = 1

                article.addTwoComment(this.submitTwoComment)
                    .then(resp => {
                        //关闭弹框
                        this.dialogChapterFormVisible = false
                        //清空内容
                        this.submitTwoComment.twoComment = ''
                        //刷新评论
                        this.getAllComment(this.$route.params.id)
                    })
            },
            //
            removeTwoComment(id){
                article.removeTwoComment(id)
                    .then(resp => {
                        alert("删除成功")
                        //刷新评论
                        this.getAllComment(this.$route.params.id)
                    })
            },
            //判断是否显示删除按钮
            deleteBtnIsShow(){
                console.log(this.user.username)
                if(this.user.username === this.commentList.children.username){
                    this.deleteIsShow = true
                }else{
                    this.deleteIsShow = false
                }
            },
            submitComment(){
                this.submitoneComment.username = this.user.username
                this.submitoneComment.articleId = this.$route.params.id
                this.submitoneComment.admireCount = 1
                console.log(this.submitoneComment)
                article.addOneComment(this.submitoneComment)
                    .then(resp => {
                        this.isShow = false
                        this.submitoneComment.oneComment = ''
                        //刷新评论
                        this.getAllComment(this.$route.params.id)
                    })
            },
            //
            unfoldSubmitBtn(e){
                /*var sp =document.getElementById("input1")
                if(sp){
                    if(!sp.contains(dispatchEvent().target)){
                        this.isShow = false
                    }else {
                        this.isShow = true
                    }
                }*/
                this.isShow = true
            },
            //根据作者id查询作者全部信息，并从中获取username和头像
            getUserByUserId(id){
                login.getUserById(id)
                    .then(resp => {
                        this.user = resp.data.data.user
                        console.log(this.user)
                        console.log(this.user.username)
                        //删除按钮是否显示
                        this.deleteBtnIsShow()
                    })
            },
            getArticleDetailById(id){
                article.getArticleDetailById(id)
                    .then(resp => {
                        //console.log(resp.data.data)
                        this.ArticleDetail = resp.data.data.baseArticleInfo
                        //console.log(this.ArticleDetail.userId)
                        //查询文章的作者username
                        this.getUserByUserId(this.ArticleDetail.userId)
                    })
            },
            //根据文章id查询 所有评论
            getAllComment(id){
                article.getAllComment(id)
                    .then(resp => {
                        console.log(resp.data.data.commentList)
                        this.commentList = resp.data.data.commentList
                    })
            }
        }
    }
</script>

<style scoped>
    .w{
        width: 940px;
        margin: 0 auto;
    }
    .content h1{
        text-align: center;
        font: bold 24px Georgia;
        padding: 11px 0 15px 0;
        margin-bottom: 28px;
        background: url(../../assets/img/article/splitLine2.png) no-repeat bottom center;
    }
    .content .mainArticle{
        float: left;
        width: 1000px;
    }
    .content .p1{
        color: #8c8c8c;
        font: 12px Helvetica;
    }
    .content .p2{
        color: #8c8c8c;
        font: 12px Helvetica;
    }
    .content .p3{
        color: #8c8c8c;
        font: 12px Helvetica;
    }
    /*文章主体的 文字部分*/
    .content .p4{
        color: #3e3e3e;
        font: 15px Helvetica;
    }
    /*回复提示文本*/
    .p5{
        color: #006400;
        font: 10px Helvetica;
    }
    .content .mainArticle span{
        margin: 0 20px;
    }
    .content .imgDiv{
        width: 400px;
        height: 300px;
        background: url("../../assets/img/article/imgBackGround1.png") no-repeat;
        margin: 10px 0 12px 0;
        padding-top: 5px;
    }
    /*按钮样式*/
    .content .lm{
        display: block;
        width: 177px;
        height: 31px;
        background: url(../../assets/img/article/btnLearnMore.png) no-repeat;
        text-decoration: none;
        color: #016999;
        font: 12px/35px Helvetica;
        text-indent: 2em;
        margin-bottom: 35px;
    }
    /*评论部分*/
    /*二级评论缩进*/
    .act2{
        text-indent: 40px;
    }
    .twocommentList{
        text-indent: 60px;
    }
    /*评论区用户名背景*/
    .userNamebg{
        background: url(../../assets/img/article/userNameBg1.png);
    }
    /*操作评论按钮靠右*/
    .acts1{
        /*margin-right: 200px;*/
        /*float: right;*/
        /*position: absolute;*/
        /*position:relative;*/
        /*position:fixed;*/
        position: static;
        right:200px;
    }
</style>
