const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/errorController')

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


//2) ROUTES
app.use('/api/v1/accounts', accountRoutes);

app.all('*', (req, res, next) => {
    let message = `Can't find ${req.originalUrl} on this server!`;
    const statusCode = 404;
    next(new AppError(message, statusCode))
});

//3) ERROR HANDLING MIDDLEWARE
app.use(globalErrorHandler);

module.exports = app;