import request from '../network/request'

export default {

    //根据用户id查询详情
    getMyCourseList(userId) {
        return request({
            url: '/teacherservice/my-course/getMyCourseList/'+userId,
            method: 'get'
        })
    },
    //添加一门课程到我的课程
    addOneToMyCourse(course) {
        return request({
            url: '/teacherservice/my-course/addOneToMyCourse',
            method: 'post',
            data: course
        })
    },
    //移除一门课程从我的课程
    removeOneFromMyCourse(courseId) {
        return request({
            url: '/teacherservice/my-course/removeOneFromMyCourse/'+courseId,
            method: 'delete'
        })
    }
}
