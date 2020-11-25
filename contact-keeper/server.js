const express = require('express')
const connectDB = require('./config/db')
const path = require('path')

const app = express()

// Connect database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))

const PORT = process.env.PORT || 5000

const apiVersion = 'v1'

// Define Routes
app.use(`/api/${apiVersion}/users`, require('./routes/users'))
app.use(`/api/${apiVersion}/auth`, require('./routes/auth'))
app.use(`/api/${apiVersion}/contacts`, require('./routes/contacts'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

app.listen(PORT, () => {
  try {
    console.log(`Server started on port ${PORT}`)
  } catch (err) {
    console.log('Server error', err)
  }
})
