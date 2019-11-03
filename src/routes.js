import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Login Admin do sistema, com usuario e senha
routes.post('/gympoint/login', SessionController.store);

routes.use(authMiddleware);

// Cadastro de aluno
routes.post('/gympoint/user', StudentController.store);

// Update do aluno
routes.put('/gympoint/user', StudentController.update);

export default routes;
