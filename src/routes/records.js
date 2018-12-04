import express from 'express';

import RecordController from '../controllers/records';

// Validations
import RecordValidations from '../middlewares/validations/records';

const Route = express.Router();

Route.post('/', RecordValidations.createRecord, RecordController.createRecord);
Route.get('/', RecordController.getAll);
Route.get('/:id', RecordController.getOne);
Route.patch('/:id', RecordController.update);
Route.delete('/:id', RecordController.delete);

export default Route;
