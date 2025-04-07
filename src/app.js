// Importações
import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import rota from './routes/router.js';
import conectarMongo from './config/config.js';

// Criando o app antes da conexão
const app = express();
const port = 3000;


//conectando ao banco
conectarMongo();

// Configurando JSON
app.use(express.json());


//Configurando cors
app.use(cors()); 

// Indica porta do servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

//Utilizando as rotas
app.use(rota);

