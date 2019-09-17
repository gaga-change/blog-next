const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const proxy = require('http-proxy-middleware')
const apiUrl = process.env.BLOG_API_URL || 'https://www.yanjd.top'

app
  .prepare()
  .then(() => {
    const server = express()

    server.use('/api', proxy({
      target: apiUrl, changeOrigin: true
    }))

    server.get('/tags/:tag/:page', (req, res) => {
      return app.render(req, res, '/', { ...req.params })
    })

    server.get('/tags/:tag', (req, res) => {
      return app.render(req, res, '/', { ...req.params })
    })

    server.get('/categories/:category/:page', (req, res) => {
      return app.render(req, res, '/', { ...req.params })
    })

    server.get('/categories/:category', (req, res) => {
      return app.render(req, res, '/', { ...req.params })
    })

    server.get('/archives/:id', (req, res) => {
      return app.render(req, res, '/detail', { ...req.params })
    })

    server.get('/page/:page', (req, res) => {
      return app.render(req, res, '/', { page: req.params.page });
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })