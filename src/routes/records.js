import express from 'express';

import RecordController from '../controllers/records';

// Validations
import RecordValidations from '../middlewares/validations/records';

const Route = express.Router();

Route.post('/', RecordValidations.createRecord, RecordController.createRecord);
Route.get('/', RecordController.getAll);
export default Route;
