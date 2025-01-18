const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Mock admin authentication for demonstration
let admin = { email: 'admin@example.com', password: '$2b$10$...' }; // Use hashed password in production

// Admin Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (email === admin.email) {
        const isMatch = await bcrypt.compare(password, admin.password);
        if (isMatch) {
            const token = jwt.sign({ email: admin.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.json({ token });
        }
    }
    res.status(401).send('Invalid credentials');
});

// Add more admin routes as needed

module.exports = router;
