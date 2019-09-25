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
export const terms = (isServer) => axios.get(_(isServer, '/terms'))

// 文章详情
export const post = (isServer, id) => axios.get(_(isServer, `/posts/${id}`))