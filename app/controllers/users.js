const { validationResult } = require('express-validator');
const { createUser, retriveAllUsers, retriveUsersByName, retriveUserById, deleteUserById, updateUserById } = require('../services/users');

const postUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, birthdate, document, acceptedTerms, accessCount, zipcode } = req.body;

    try {
        const user = await createUser(name, birthdate, document, acceptedTerms, accessCount, zipcode);
        res.status(201).send(user);
        next();
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500) && next(err);
    }

}

const getUsers = async (req, res, next) => {


    try {
        let users;

        if (!req.query.name) {
            users = await retriveAllUsers();
        } else {
            users = await retriveUsersByName(req.query.name);
        }

        if (users.length > 0) {
            res.status(200).send(users);
        } else {
            res.status(404).send({ 'error': 'Nenhum usuário encontrado.' });
        }

        next();
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500) && next(err);
    }
}

const updateUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, birthdate, document, acceptedTerms, accessCount, zipcode } = req.body;

    try {
        const operation = await updateUserById(req.params.id, name, birthdate, document, acceptedTerms, accessCount, zipcode);
        if(operation == 1){
            res.sendStatus(200).send({ 'success': 'Usuário atualizado com sucesso.' });
        }else {
            res.status(404).send({ 'error': 'Nenhum usuário encontrado.' });
        }
        
        next();
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500) && next(err);
    }

}

const deleteUser = async (req, res, next) => {


    try {
        const operation = await deleteUserById(req.params.id);

        if (operation) {
            res.sendStatus(200).send({ 'success': 'Usuário deletado com sucesso.' });
        } else {
            res.status(404).send({ 'error': 'Nenhum usuário encontrado.' });
        }

        next();
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500) && next(err);
    }
}

const getUserById = async (req, res, next) => {

    try {
        const user = await retriveUserById(req.params.id);

        if (user) {
            res.status(200).send(user);
        } else {
            res.status(404).send({ 'error': 'Nenhum usuário encontrado.' });
        }

        next();
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500) && next(err);
    }
}

module.exports = {
    postUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
}