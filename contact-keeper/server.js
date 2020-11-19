const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect database
connectDB()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to contact keeper' })
})

const apiVersion = 'v1'

// Define Routes
app.use(`/api/${apiVersion}/users`, require('./routes/users'))
app.use(`/api/${apiVersion}/auth`, require('./routes/auth'))
app.use(`/api/${apiVersion}/contacts`, require('./routes/contacts'))

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
