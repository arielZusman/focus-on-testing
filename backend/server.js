const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const userService = require('./services/user-service')

const addCarRoutes = require('./routes/car-route')
const addReviewRoutes = require('./routes/review-route')
const addUserRoutes = require('./routes/user-route')

const app = express()
app.use(cors({
  origin: ['http://localhost:8080'],
  credentials: true // enable set cookie
}));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(session({
  secret: 'puki muki',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


addCarRoutes(app)
addReviewRoutes(app)
addUserRoutes(app)

app.post('/singup', (req, res) => {
  const nickname = req.body.nickname
  userService.addUser({ nickname })
    .then(user => res.json(user))
})

app.put('/login', (req, res) => {
  const nickname = req.body.nickname
  userService.checkLogin({ nickname })
    .then(user => {
      req.session.user = user
      res.json(user)
    })
})




const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))