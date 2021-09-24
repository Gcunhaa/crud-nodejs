const { createUser, retriveAllUsers, retriveUsersByName, retriveUserById, deleteUserById, updateUserById } = require('../services/users');

//Conecta e sincroniza o banco de dados com os models atuais
(async () => {
    const database = require('../db');
    const User = require('../models');

    try {
        const resultado = await database.sync();
        console.log('Connected to DB succesfuly');
    } catch (error) {
        console.log(error);
    }
})();

let userId;

test('Testando a criação de usuários', async () => {
    const user = await createUser(
        'Gabriel',
        new Date('2001-04-25'),
        "545808386",
        true,
        0,
        "05653030"
    )

    userId = user.id;
    expect(user.id).toBeDefined();
});

test('Testando a atualização de usuários', async () => {
    const data = await updateUserById(
        userId,
        'Gabriel Cunha',
        new Date('2001-04-25'),
        "545808386",
        true,
        0,
        "05653030"
    )
    expect(data[0]).toBe(1);
});

test('Testando o retorno de usuários', async () => {
    const data = await retriveAllUsers()
    expect(data).not.toEqual([]);
});

test('Testando o retorno de usuário por ID', async () => {
    const data = await retriveUserById(userId);
    expect(data.name).toMatch(/Gabriel Cunha/);
    expect(data.id).toBe(userId);
});

test('Testando o retorno de usuários por nome', async () => {
    const data = await retriveUsersByName('Gabriel Cunha');
    
    expect(data).not.toEqual([]);
});

test('Testando a exclusão de usuário por id', async () => {
    const data = await deleteUserById(userId);
    expect(data).toBe(1);
});