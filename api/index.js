import axios from 'axios'

const host = 'http://localhost:3000'
const base = host + '/api'

export const posts = () => axios.get(`${base}/posts?page=1&pageSize=10`)