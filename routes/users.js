var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');

// Route pour obtenir la liste des utilisateurs
router.get('/', UserController.getAllUsers);

// Route pour créer un nouvel utilisateur
router.post('/', UserController.createUser);

// Route pour obtenir un utilisateur par ID
router.get('/:id', UserController.getUserById);

// Route pour mettre à jour un utilisateur par ID
router.put('/:id', UserController.updateUser);

// Route pour supprimer un utilisateur par ID
router.delete('/:id', UserController.deleteUser);


module.exports = router;
