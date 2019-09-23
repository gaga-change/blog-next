/* eslint-disable */
const withLess = require('@zeit/next-less')

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => { }
}
const isProd = process.env.NODE_ENV === 'production'
module.exports = withLess({
  assetPrefix: isProd ? '//cdn.yanjd.top/blog' : '',
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
})
