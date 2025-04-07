
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Função para login
export const login = async (req, res) => {
    const { email, senha } = req.body;

    // Validações
    if (!email) {
        return res.status(422).json({ msg: 'Email é obrigatório' });
    }
    if (!email.includes("@") || !email.includes(".")) {
        return res.status(422).json({ msg: 'Email deve conter "@" e "."' });
    }

    if (!senha) {
        return res.status(422).json({ msg: 'A senha é obrigatória!' });
    }

    // Verifica se o usuário existe
    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(422).json({ msg: 'Usuário não encontrado' });
    }

    // Verifica se a senha está correta
    const match = await bcrypt.compare(senha, user.senha);

    if (!match) {
        return res.status(422).json({ msg: 'Senha incorreta' });
    }

    // Cria o token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ msg: 'Login bem-sucedido', token });
}

// Função para registro
export const registro = async (req, res) => {
    const { nome, email, escolaridade, senha, senhaCopy } = req.body;

    // Validações
    if (!nome) {
        return res.status(422).json({ msg: 'O nome é obrigatório!' });
    } else if (/\d/.test(nome)) {
        return res.status(422).json({ msg: 'O nome não pode conter números' });
    }

    if (!email) {
        return res.status(422).json({ msg: 'Email é obrigatório' });
    }
    if (!email.includes("@") || !email.includes(".")) {
        return res.status(422).json({ msg: 'Email deve conter "@" e "."' });
    }

    if (!escolaridade) {
        return res.status(422).json({ msg: 'Escolaridade é obrigatória!' });
    } else if (/\d/.test(escolaridade)) {
        return res.status(422).json({ msg: 'O campo escolaridade não pode conter números' });
    }

    if (!senha) {
        return res.status(422).json({ msg: 'O campo senha está vazio' });
    } else if (senha !== senhaCopy) {
        return res.status(422).json({ msg: 'As senhas devem ser iguais' });
    }

    // Verifica se o email já está cadastrado
    const userExistente = await User.findOne({ email: email });

    if (userExistente) {
        return res.status(422).json({ msg: 'Email já cadastrado, utilize outro email.' });
    }

    // Cria senha criptografada
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(senha, salt);

    // Cria usuário
    const user = new User({
        nome,
        escolaridade,
        email,
        senha: passwordHash, 
    });

    try {
        await user.save();
        res.status(201).json({ msg: 'Usuário criado com sucesso' });
    } catch (error) {
        res.status(500).json({ msg: 'Erro no servidor.' });
        console.log(error);
    }
}
