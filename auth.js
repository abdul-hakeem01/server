const express = require('express');
const user = require('../models/user'); // Ensure the path to the user model is correct
const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = new user({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' }); // Corrected the closing braces
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
