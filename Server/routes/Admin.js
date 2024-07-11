const express = require('express');
const router = express.Router();
const adminAuth = require('../Middleware/adminAuth');
const User = require('../models/User');

// GET /api/admin/users - Get all users (Admin route)
router.get('/users', adminAuth, async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// DELETE /api/admin/users/:id - Delete a user by ID (Admin route)
router.delete('/users/:id', adminAuth, async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully", deletedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
