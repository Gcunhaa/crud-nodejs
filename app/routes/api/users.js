const express = require('express');
const { users } = require('../../controllers')
const { checkSchema } = require('express-validator');
const { dateDiffInDays } = require('../../utils');


const router = express.Router();


router.post('/', checkSchema({
    name: {
        isString: true,
        isLength: {
            errorMessage: 'O nome deve conter entre 2 e 100 caracteres.',
            options: {
                min: 2,
                max: 100
            }
        }
    },
    document: {
        isString: true,
    },
    birthdate: {
        isDate: true,
        custom: {
            options: (value, { req, location, path }) => {
                if (dateDiffInDays(new Date(Date.now()), new Date(value)) < 365 * 18) {
                    throw new Error('O usuário deve possuir 18 anos ou mais para cadastrar-se.')
                }
                return true;
            },

        },
    },
    zipcode: {
        isString: {
            errorMessage: 'O CEP deve ser uma string.'
        },
    },
    acceptedTerms: {
        isBoolean: {
            errorMessage: 'Os termos devem ser de tipo booleano.'
        },
    },
    accessCount: {
        isNumeric: {
            errorMessage: 'A contagem de acesso deve indicar um número.'
        }
    }

}), users.postUser);

router.get('/', users.getUsers);
router.put('/:id', checkSchema({
    name: {
        isString: true,
        isLength: {
            errorMessage: 'O nome deve conter entre 2 e 100 caracteres.',
            options: {
                min: 2,
                max: 100
            }
        }
    },
    document: {
        isString: true,
    },
    birthdate: {
        isDate: true,
        custom: {
            options: (value, { req, location, path }) => {
                if (dateDiffInDays(new Date(Date.now()), new Date(value)) < 365 * 18) {
                    throw new Error('O usuário deve possuir 18 anos ou mais para cadastrar-se.')
                }
                return true;
            },

        },
    },
    zipcode: {
        isString: {
            errorMessage: 'O CEP deve ser uma string.'
        },
    },
    acceptedTerms: {
        isBoolean: {
            errorMessage: 'Os termos devem ser de tipo booleano.'
        },
    },
    accessCount: {
        isNumeric: {
            errorMessage: 'A contagem de acesso deve indicar um número.'
        }
    }

}), users.updateUser);
router.delete('/:id', users.deleteUser);
router.get('/:id', users.getUserById);

module.exports = router;