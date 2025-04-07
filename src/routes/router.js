import {Router} from 'express';
import { login, registro } from '../controllers/usuarioController.js';

const rota = Router()

//GET routes
rota.get("/", (req, res) => {
    res.status(200).json({ msg: 'Bem vindo à nossa API!' });
})

//POST routes
rota.post('/auth/login', login);
rota.post('/auth/register', registro);

export default rota;
   
