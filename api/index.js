import axios from 'axios'

const host = process.env.BLOG_NEXT_URL || 'http://localhost:3000'
const base = host + '/api'

// 获取文章列表
export const posts = params => axios.get(`${base}/posts`, { params })

// 标签、分类，附加最近文章
export const terms = () => axios.get(`${base}/terms`)