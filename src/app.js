import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import log from 'fancy-log';
import expressValidator from 'express-validator';

import indexRoutes from './usingJSObject/routes';
import recordRoutes from './usingJSObject/routes/records';

import dbRoute from './usingDB/routes/auth';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(expressValidator());
app.use(logger('dev'));

const PORT = process.env.PORT || 8080;

app.use('/api/v1/', indexRoutes);
app.use('/api/v1/red-flags', recordRoutes);

app.use('/api/v1/', dbRoute);

app.all('*', (req, res) => res.status(404).json({
  status: 404,
  error: 'Bad request',
}));

app.listen(PORT, () => log.info('Listening at port', PORT));

export default app;
