import { Router } from 'express';

const routes = new Router();

// Login Admin do sistema, com usuario e senha
routes.post('/gympoint/login', (req, res) => {});

// Listagem de todos alunos
routes.get('/gympoint/users', (req, res) => {});

// Buscar um aluno
routes.get('/gympoint/user', (req, res) => {});

// Cadastro de aluno
routes.post('/gympoint/users', (req, res) => {});

// Update do aluno pelo email
routes.put('/gympoint/users', (req, res) => {});

// Deletar um aluno
routes.delete('/gympoint/users', (req, res) => {});
