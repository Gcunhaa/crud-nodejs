const { User } = require('../models');
const { getAdressData } = require('../utils')

const createUser = async (name, birthdate, document, acceptedTerms, accessCount, zipcode) => {
    try {
        const addressData = await getAdressData(zipcode);
        return await User.create({ name: name, birthdate: birthdate, document: document, acceptedTerms: acceptedTerms, accessCount: accessCount, street: addressData['logradouro'], neighborhood: addressData['bairro'], city: addressData['localidade'], state: addressData['uf'] });
    } catch (e) {
        throw new Error(e.message)
    }
};

const updateUserById = async (id, name, birthdate, document, acceptedTerms, accessCount, zipcode) => {
    try {
        const addressData = await getAdressData(zipcode);
        return await User.update({ name: name, birthdate: birthdate, document: document, acceptedTerms: acceptedTerms, accessCount: accessCount, street: addressData['logradouro'], neighborhood: addressData['bairro'], city: addressData['localidade'], state: addressData['uf'] }, { where: { id: id } });
    } catch (e) {
        throw new Error(e.message)
    }
};

const retriveAllUsers = async () => {
    try {
        return await User.findAll();
    } catch (e) {
        throw new Error(e.message)
    }
}

const retriveUsersByName = async (name) => {
    try {
        return await User.findAll({ where: { name: name } });
    } catch (e) {
        throw new Error(e.message)
    }
}

const retriveUserById = async (id) => {
    try {
        return await User.findOne({ where: { id: id } });
    } catch (e) {
        throw new Error(e.message)
    }
}

const deleteUserById = async (id) => {
    try {
        return await User.destroy({ where: { id: id } });
    } catch (e) {
        throw new Error(e.message)
    }
}


module.exports = { createUser, retriveAllUsers, retriveUserById, retriveUsersByName, deleteUserById, updateUserById };