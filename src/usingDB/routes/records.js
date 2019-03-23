import express from 'express';
import record from '../controllers/record';

const Router = express.Router();

Router.post('/interventions', record.createRecord);
Router.get('/interventions', record.getAll);

export default Router;
