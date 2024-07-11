const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');
const adminAuth = require('../Middleware/adminAuth');


router.post('/', adminAuth, async (req, res) => {
    const { title, image, price, beds, baths } = req.body;
    try {
        const newListing = new Listing({ title, image, price, beds, baths });
        await newListing.save();
        res.status(201).json(newListing);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error adding listing" });
    }
});
router.delete('/:id', adminAuth, async (req, res) => {
    try {
        const listingId = req.params.id;
        const deletedListing = await Listing.findByIdAndDelete(listingId);
        if (!deletedListing) {
            return res.status(404).json({ message: "Listing not found" });
        }
        res.json({ message: "Listing deleted successfully", deletedListing });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
