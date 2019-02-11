import express from 'express';

const Route = express.Router();

Route.get('/', (req, res) => res.status(200).json({
  status: 'success',
  message: 'Welcome to iReporter API',
}));

export default Route;
