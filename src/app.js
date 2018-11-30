import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, }));
app.use(cors());
app.use(logger('dev'));

app.get('/', (req, res) => {
    console.log('Hello World');
    console.log('This is working now');
    return res.status(200).json({
        message: 'Hello World',
    })
})

app.listen(8080, () => {
    console.log('Hey');
})