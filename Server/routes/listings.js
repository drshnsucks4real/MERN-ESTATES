// routes/listings.js

const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

// GET /api/listings - Get all listings (Public route)
router.get('/', async (req, res) => {
    try {
        const listings = await Listing.find();
        res.json(listings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
