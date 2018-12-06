import express from 'express';

import RecordController from '../controllers/records';

// Validations
import RecordValidations from '../middlewares/validations/records';

const Route = express.Router();

Route.post('/', RecordValidations.createRecord, RecordController.createRecord);
Route.get('/', RecordController.getAll);
Route.get('/:id', RecordValidations.checkId, RecordController.getOne);
Route.patch('/:id', RecordValidations.createRecord, RecordController.update);
Route.patch('/:id/:location', RecordController.updateLocation);
Route.delete('/:id', RecordController.delete);

Route.get('/:id');

export default Route;
