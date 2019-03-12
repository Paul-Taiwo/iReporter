import express from 'express';
import Auth from '../controllers/auth';
import ValidateSignUp from '../middlewares/validateSignUp';
import ValidateLogin from '../middlewares/validateLogin';

const Router = express.Router();

Router.post('/auth/signup', ValidateSignUp.validate, Auth.register);
Router.post('/auth/login', ValidateLogin.validate, Auth.login);

export default Router;
