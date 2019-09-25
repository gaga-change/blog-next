let apiUrl = process.env.BLOG_API_URL || 'https://www.yanjd.top'

try {
  const config = require('./config_default')
  apiUrl = config.apiUrl
} catch (error) {

}

exports.apiUrl = apiUrl