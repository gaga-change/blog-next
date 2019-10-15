import axios from 'axios'
import { apiUrl } from '../config'

const host = apiUrl

/** 解析。服务端需要全路径， */
const _ = (isServer, path) => {

  if (isServer) {
    return host + '/api' + path
  } else {
    return '/api' + path
  }
}

// 获取文章列表
export const posts = (isServer, params) => axios.get(_(isServer, '/posts'), { params })

// 标签、分类，附加最近文章
export const terms = (isServer) => Promise.all([
  axios.get(_(isServer, '/tags'), { params: { pageSize: 999 } }),
  axios.get(_(isServer, '/categories'), { params: { pageSize: 999 } }),
  axios.get(_(isServer, '/posts'), { params: { pageSize: 5 } }),
]).then(resArr => {
  return {
    tags: resArr[0].data.list,
    categories: resArr[1].data.list,
    posts: resArr[2].data.list
  }
})
// 文章详情
export const post = (isServer, id) => axios.get(_(isServer, `/posts/${id}`))