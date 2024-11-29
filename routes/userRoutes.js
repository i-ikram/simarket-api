const express = require('express');
const UserModel = require('../models/userModel'); // Ensure the path is correct
const router = express.Router();

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await UserModel.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to add a user
router.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await UserModel.createUser(name, email);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
