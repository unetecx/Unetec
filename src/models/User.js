import mongoose  from "mongoose";

const User = mongoose.model('User', {
    nome: String,
    escolaridade: String,
    email: String,
    senha: String,
});

export default User;