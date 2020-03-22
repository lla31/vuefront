import request from '../network/request'

export default {
    //讲师列表的方法
    getTeacherListPage(page,limit) {
        return request({
            url: '/teacherservice/frontTeacher/'+page+'/'+limit,
            method: 'get'
        })
    },
    //根据讲师id查询详情
    getTeacherInfoId(id) {
        return request({
            url: '/teacherservice/frontTeacher/'+id,
            method: 'get'
        })
    }
}
