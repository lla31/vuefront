import request from '../network/request'

export default {
    //课程列表的方法
    getCourseListPage(page,limit) {
        return request({
            url: '/teacherservice/frontCourse/'+page+'/'+limit,
            method: 'get'
        })
    },
    //根据课程id查询课程详情
    getCourseInfoId(id) {
        return request({
            url: '/teacherservice/frontCourse/'+id,
            method: 'get'
        })
    }
}
