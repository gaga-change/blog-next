const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
var proxy = require('http-proxy-middleware')

app
  .prepare()
  .then(() => {
    const server = express()

    server.use('/api', proxy({
      target: 'https://www.yanjd.top', changeOrigin: true
    }))

    server.get('/tags/:tag/:page', (req, res) => {
      return app.render(req, res, '/', { ...req.params })
    })

    server.get('/tags/:tag', (req, res) => {
      return app.render(req, res, '/', { ...req.params })
    })

    server.get('/categories/:categories/:page', (req, res) => {
      return app.render(req, res, '/', { ...req.params })
    })

    server.get('/categories/:categories', (req, res) => {
      return app.render(req, res, '/', { ...req.params })
    })

    server.get('/archives/:id', (req, res) => {
      return app.render(req, res, '/', { ...req.params })
    })

    server.get('/:page', (req, res) => {
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