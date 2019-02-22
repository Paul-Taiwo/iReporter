import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import log from 'fancy-log';

import indexRoutes from './usingJSObject/routes';
import recordRoutes from './usingJSObject/routes/records';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(logger('dev'));

const PORT = process.env.PORT || 8080;

app.use('/api/v1/', indexRoutes);
app.use('/api/v1/red-flags', recordRoutes);

app.all('*', (req, res) => res.status(404).json({
  status: 404,
  error: 'Bad request',
}));

app.listen(PORT, () => log.info('Listening at port', PORT));

export default app;
