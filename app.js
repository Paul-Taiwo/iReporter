import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors);
app.use(logger('dev'));


app.listen(7070, () => console.log('App listening at port 7070'));