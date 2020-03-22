import request from '../network/request'

export default {
  //简单登录
  login(user) {
    return request({
      url: '/teacherservice/user/login',
      method: 'post',
      data: user
    })
  },
  //添加用户
  addUser(user) {
    return request({
      url: '/teacherservice/user/addUser',
      method: 'post',
      data: user
    })
  },
  //根据id查询用户信息
  getUserById(id) {
    return request({
      url: '/teacherservice/user/getUserById/'+id,
      method: 'get',
    })
  },
  //更新用户信息
  updateUserById(id,user) {
    return request({
      url: '/teacherservice/user/updateUser/'+id,
      method: 'post',
      data: user
    })
  }

}
