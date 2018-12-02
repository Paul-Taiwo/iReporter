import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import log from 'fancy-log';

import indexRoutes from './routes';
import recordRoutes from './routes/records';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(logger('dev'));

app.use('/api/v1/', indexRoutes);
app.use('/api/v1/records', recordRoutes);


app.all('*', (req, res) => res.status(404).json({
  status: 'error',
  message: 'Not found',
}));

app.listen(8080, () => log.info(`Listening at port ${8080}`));

export default app;
