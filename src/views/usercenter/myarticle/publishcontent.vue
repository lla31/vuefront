<template>
    <div>
        <div class="container">
            <el-button type="info" @click="publishArticle">发布</el-button>
            <h2>发布内容</h2>
            <el-input
                    style="width: 900px;"
                    type="textarea"
                    :rows="1"
                    placeholder="标题"
                    v-model="article.title"
                    id="input1"
                    maxlength="50"
                    show-word-limit
            >
            </el-input>
            <quill-editor
                    class="editor"
                    v-model="article.content"
                    ref="myQuillEditor"
                    :options="editorOption"
                    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                    @change="onEditorChange($event)">
            </quill-editor>
        </div>
        <template>

        </template>
    </div>
</template>

<script>
    import quilleditor from "./quilleditor";
    import article from "@/api/article";
    export default {
        name: "publishcontent",
        data(){
            return {
                article:{
                    userId:'',
                    title:'',
                    content:null,

                    admireCount:0,
                    viewCount:1
                },
                editorOption:{}
            }
        },
        methods:{
            //发布文章
            publishArticle(){
                this.article.userId = this.$store.state.storeId
                article.addArticle(this.article)
                    .then(resp => {
                        this.$router.push({path:'/usercenter/myarticle'})
                        return this.$message({
                            type: 'success',
                            message: '发布成功!'
                        })
                    })
            },
            onEditorBlur(){//失去焦点事件
            },
            onEditorFocus(){//获得焦点事件
            },
            onEditorChange(){//内容改变事件
            }
        }
    }
</script>

<style scoped>
    .container{
        position: relative;
        left: 0px;
        top: 0px;
    }
    .editor{
        width: 900px;
        height: 200px;
    }
</style>
