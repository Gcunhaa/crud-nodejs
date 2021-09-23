const express = require('express');
const {users} = require('../../controllers')

const router = express.Router();


router.get('/', users.retrieveUsers);
router.post('/', users.createUser);
router.patch('/:id',users.updateUser);
router.delete('/:id',users.deleteUser);
router.get('/:id',users.getUserById);

module.exports = router;