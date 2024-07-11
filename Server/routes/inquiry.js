const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

router.post('/', async (req, res) => {
  const { property, phoneNumber } = req.body;
  try {
    const newInquiry = new Inquiry({ property, phoneNumber });
    await newInquiry.save();
    res.status(200).json({ message: 'The owner will get back to you soon!' });
  } catch (error) {
    console.error('Error saving inquiry:', error);
    res.status(500).json({ message: 'There was an error sending your inquiry. Please try again later.' });
  }
});

module.exports = router;
