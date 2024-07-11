const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

router.post('/inquiries', async (req, res) => {
  const { property, phoneNumber } = req.body;

  try {
    const newInquiry = new Inquiry({ property, phoneNumber });
    await newInquiry.save();
    res.status(201).json({ message: 'Inquiry received' });
  } catch (error) {
    console.error('Error saving inquiry:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

module.exports = router;
