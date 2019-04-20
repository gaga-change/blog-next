import axios from 'axios'

const host = 'http://localhost:3000'
const base = host + '/api'

// 获取文章列表
export const posts = () => axios.get(`${base}/posts?page=1&pageSize=10`)

// 标签、分类，附加最近文章
export const terms = () => axios.get(`${base}/terms`)