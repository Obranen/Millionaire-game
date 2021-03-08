const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const corsMiddleware = require('./middleware/cors.middleware')

const app = express()
const PORT = config.get('serverPort')

app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/winners', require('./routes/winner.routes'))
app.use('/api/admin/quiz', require('./routes/quiz.routes'))

async function start() {
  try {
    await mongoose.connect(config.get('dbUrl'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    app.listen(PORT, () => console.log(`server started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()