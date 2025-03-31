// Importações
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();

// Rota inicial
app.get('/', (req, res) => {
  
});

// Credenciais do banco de dados
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

// Conectar ao MongoDB
mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.h3x40l2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        app.listen(3000)
        console.log('Conectado ao banco de dados');
    })
    .catch((err) => console.log('Erro ao conectar ao banco:', err));
