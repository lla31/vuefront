import axios from 'axios'
// 创建axios实例
const service = axios.create({
    baseURL: 'http://localhost:9001', // api的base_url
    timeout: 20000 // 请求超时时间
})
export default service



/*export function request(config) {
    //新建实例
    const instance = axios.create({
        baseURL: 'http://localhost:8001', // api的base_url
        timeout: 5000
    })
    //发送真正的网络请求
    return instance(config)
}*/
