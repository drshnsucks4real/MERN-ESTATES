const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: { type: String, required: true },
    image: {type: String, required: true},
    price: { type: String, required: true }, // Keep price as String to handle currency symbols and commas
    beds: { type: String, required: true },  // Keep beds as String to handle units like "4 Beds"
    baths: { type: String, required: true }  // Keep baths as String to handle units like "3 Baths"
});

module.exports = mongoose.model('Listing', listingSchema);
