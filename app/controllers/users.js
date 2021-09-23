const {validationResult } = require('express-validator');


const createUser = async (req, res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {name, birthdate, document, acceptedTerms, accessCount, zipcode} = req.body;
    res.send('Foi');
}

const getUsers = async (req, res, next)=>{
    res.send('Foi');
}

const updateUser = async (req, res, next)=>{
    res.send('foi');
}

const deleteUser = async (req, res, next)=>{
    res.send('foi');
}

const getUserById = async (req, res, next)=>{
    res.send("foi");
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
}