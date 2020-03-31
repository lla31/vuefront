import request from '../network/request'

export default {
    //获取轮播图
    getLunbotu() {
        return request({
            url: '/teacherservice/edu-lunbotu/getLunbotuUrl',
            method: 'get',
        })
    },

}
