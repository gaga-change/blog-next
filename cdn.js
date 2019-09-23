const upload = require('qiniu-upload-dir')

const config = {
  accessKey: process.env.QINIU_ACCESS_KEY, // 密钥，在 个人中心 -> 密钥管理中 获取
  secretKey: process.env.QINIU_SECRET_KEY,
  bucket: 'yanjd', // 空间名称
  zone: 'Zone_z2', // 机房：华东 Zone_z0 、华北 Zone_z1 、华南 Zone_z2 、北美 Zone_na0
  prefix: 'blog/_next/', // 附加前缀，可以为空，或者不填
}

upload('./.next/static', config)