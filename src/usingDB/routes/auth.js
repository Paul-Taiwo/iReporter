import express from 'express';
import Auth from '../controllers/auth';
import Validate from '../middlewares/validator';

const Route = express.Router();

Route.post('/auth/signup', Validate.validate, Auth.register);

export default Route;
