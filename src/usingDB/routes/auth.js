import express from 'express';
import Auth from '../controllers/auth';
import Validate from '../middlewares/validator';

const Route = express.Router();

Route.post('/register', Validate.validate, Auth.register);

export default Route;
