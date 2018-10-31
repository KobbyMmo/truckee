
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

import  'dotenv/config';
import './config/db.config';

const app = express();
app.disable('x-powered-by');
import cors from 'cors';

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(`/${process.env.API_VERSION}/static`, express.static(path.join(__dirname, '/../public')))

//Configure routes
import routes from './config/routes.config'
routes(app);


//Base route for checking api is online
app.use(`/${process.env.API_VERSION}/ping`, (req, res) => res.send('Api up and running'));


//404 handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});


//error handler
app.use((err, req, res, next) => {
    console.log(err);
    res
        .status(err.status || 500)
        .json({ error: err.message });
});


module.exports = app;
