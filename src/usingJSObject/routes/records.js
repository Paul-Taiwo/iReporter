import express from 'express';

import RecordController from '../controllers/records';

// Validations
import RecordValidations from '../middlewares/validations/records';

const Route = express.Router();

Route.post('/', RecordValidations.createRecord, RecordController.createRecord);
Route.get('/', RecordController.getAll);
Route.get('/:id', RecordValidations.checkId, RecordController.getOne);
Route.patch('/:id/location', RecordValidations.createRecord, RecordController.updateLocation);
Route.patch('/:id/comment', RecordValidations.createRecord, RecordController.updateLocation);
Route.delete('/:id', RecordValidations.checkId, RecordController.delete);

Route.get('/:id');

export default Route;
