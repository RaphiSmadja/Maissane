const { User } = require('../models');

const UserController = {
    // Récupérer la liste des utilisateurs
    async getAllUsers(req, res) {
        try {
            const users = await User.findAll();
            res.render('users', {users: users});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
        }
    },

    // Créer un nouvel utilisateur
    async createUser(req, res) {
        const { name, email, password } = req.body;
        try {
            const user = await User.create({ name, email, password });
            res.status(201).render('confirmation', {firstname: name});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
        }
    },

    // Récupérer un utilisateur par ID
    async getUserById(req, res) {
        const userId = req.params.id;
        try {
            const user = await User.findByPk(userId);
            if (!user) {
                return res.status(404).json({ error: 'Utilisateur non trouvé' });
            }
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
        }
    },

    // Mettre à jour un utilisateur par ID
    async updateUser(req, res) {
        const userId = req.params.id;
        const { name, email, password } = req.body;
        try {
            const user = await User.findByPk(userId);
            if (!user) {
                return res.status(404).json({ error: 'Utilisateur non trouvé' });
            }
            user.name = name;
            user.email = email;
            user.password = password;
            await user.save();
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'utilisateur' });
        }
    },

    // Supprimer un utilisateur par ID
    async deleteUser(req, res) {
        const userId = req.params.id;
        try {
            const user = await User.findByPk(userId);
            if (!user) {
                return res.status(404).json({ error: 'Utilisateur non trouvé' });
            }
            await user.destroy();
            res.json({ message: 'Utilisateur supprimé avec succès' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur' });
        }
    },
};

module.exports = UserController;