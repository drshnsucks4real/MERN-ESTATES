const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: { type: String, required: true },
    image: {type: String, required: true},
    price: { type: String, required: true }, 
    beds: { type: String, required: true },
    baths: { type: String, required: true }
});

module.exports = mongoose.model('Listing', listingSchema);
