import request from '../network/request'

export default {
    //查询所有文章
    getAllarticleList() {
        return request({
            url: '/edu_articleservice/edu-article/listarticle',
            method: 'get'
        })
    },
    //根据id查询文章 （单表）
    getArticleDetailById(id) {
        return request({
            url: '/edu_articleservice/edu-article/getarticleinfo/'+id,
            method: 'get'
        })
    },
    //根据文章id查询一、二级评论
    getAllComment(id){
        return request({
            url: '/edu_articleservice/edu-article/getArticleComment/'+id,
            method: 'get'
        })
    },
    //添加一级评论
    addOneComment(conComment){
        return request({
            url: '/edu_articleservice/edu-one-comment/addOneComment',
            method: 'post',
            data: conComment
        })
    },
    //添加二级评论
    addTwoComment(twoComment){
        return request({
            url: '/edu_articleservice/edu-two-comment/addTwoComment',
            method: 'post',
            data: twoComment
        })
    },
    //删除二级评论
    removeTwoComment(twoCommentId){
        return request({
            url: '/edu_articleservice/edu-two-comment/deleteTwoComment/'+twoCommentId,
            method: 'delete',
        })
    }
}
