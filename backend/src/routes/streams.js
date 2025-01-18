const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Stream = mongoose.model('Stream', {
    title: String,
    description: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
});

// Route to create a new stream
router.post('/create', (req, res) => {
    // Stream creation logic here
    res.send('Stream created');
});

// Route to get all streams
router.get('/', (req, res) => {
    // Logic to get all streams
    res.send('List of streams');
});

module.exports = router;
