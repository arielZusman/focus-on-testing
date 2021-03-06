const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const session = require('express-session');

const app = express();
const http = require('http').createServer(app);

const authRoutes = require('./api/auth/auth.routes');
const userRoutes = require('./api/user/user.routes');
const carRoutes = require('./api/car/car.routes');
const reviewRoutes = require('./api/review/review.route');

const logger = require('./services/logger.service');

app.use(bodyParser.json());
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    })
);

if (process.env.NODE_ENV !== 'production') {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', /http:\/\/localhost/],
        credentials: true
    };
    app.use(cors(corsOptions));
}

// routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/car', carRoutes);
app.use('/api/review', reviewRoutes);

app.use(express.static(path.resolve(__dirname, 'public')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
}

const port = process.env.PORT || 3000;
http.listen(port, () => {
    logger.info('Server is running on port: ' + port);
});
