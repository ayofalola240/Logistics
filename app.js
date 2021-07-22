const express = require('express');
const morgan = require('morgan');

const accountRoutes = require('./routes/accountRoutes.js');

const app = express();

//1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString;
    next();
})


// 3) ROUTES
app.use('/api/v1/accounts', accountRoutes);

module.exports = app;