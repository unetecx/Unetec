import mongoose from "mongoose";



const conectarMongo = ()=>{
  // Credenciais do banco de dados
  const dbUser = process.env.DB_USER;
  const dbPass = process.env.DB_PASS;

  // Conectando ao MongoDB
  mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@unetec.lgkphvk.mongodb.net/?retryWrites=true&w=majority&appName=UNETECC`)
      .then(() => {
        console.log('Conectado ao banco de dados');
    })
    .catch((err) => console.log('Erro ao conectar ao banco:', err));
}

//Exportando mongoose

export default conectarMongo;






