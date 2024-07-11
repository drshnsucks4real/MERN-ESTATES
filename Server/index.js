const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/Admin');
const adminListingsRoutes = require('./routes/adminListings');
const listingsRoutes = require('./routes/listings');
const contactRoute = require('./routes/contact');
const inquiryRoute = require('./routes/inquiry');

dotenv.config();

const app = express();

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/admin/listings', adminListingsRoutes);
app.use('/api/listings', listingsRoutes);
app.use('/api/contact', contactRoute);
app.use('/api/inquiries', inquiryRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
