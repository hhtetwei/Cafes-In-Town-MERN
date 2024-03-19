require('dotenv').config()
require('./src/db/server')

const express = require('express')
const app = express()

const cors = require('cors')

const cafesRouter = require('./src/routes/cafesRoutes')
const cafeDetailsRouter = require('./src/routes/cafeDetailsRoutes')
const feedbacksRouter = require('./src/routes/feedbacksRouter')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ limit: '10mb' }))
app.use('/api/cafes', cafesRouter)
app.use('/api/cafeDetails', cafeDetailsRouter)
app.use('/api/feedbacks', feedbacksRouter)

app.use('*', (req, res) => {
  res.status(404).json({
    success: 'false',
    message: 'Page not found',
    error: {
      statusCode: 404,
      message: 'You reached a route that is not defined on this server',
    },
  })
})

app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  // console.log(error)
  res.json({
    error: {
      message: error.message,
    },
  })
})
const port = 5000
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})
