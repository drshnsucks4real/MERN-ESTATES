const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  property: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Inquiry', inquirySchema);
