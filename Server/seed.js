const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Listing = require('./models/Listing'); // Adjust the path as needed

dotenv.config();

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected...');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});

const listings = [
  {
    title: 'Luxury Villa',
    image: 'https://villascroatia.com/wp-content/uploads/2020/08/modern-luxury-villa-pool-medulin-croatia-13-1.jpg',
    beds: '4 Beds',
    baths: '3 Baths',
    price: '₹8,50,00,000',
    description: 'A beautiful luxury villa with modern amenities in Pune.'
  },
  {
    title: 'Modern Apartment',
    image: 'https://images.pexels.com/photos/6076854/pexels-photo-6076854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    beds: '3 Beds',
    baths: '2 Baths',
    price: '₹3,75,00,000',
    description: 'A stylish modern apartment in the heart of Mumbai.'
  },
  {
    title: 'Cozy Cottage',
    image: 'https://images.pexels.com/photos/3951745/pexels-photo-3951745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    beds: '2 Beds',
    baths: '1 Bath',
    price: '₹1,50,00,000',
    description: 'A cozy cottage perfect for a small family in Mahabaleshwar.'
  },
  {
    title: 'Beachfront Bungalow',
    image: 'https://i.pinimg.com/originals/bc/31/3a/bc313ac77338d666aadcc6a8d5750504.jpg',
    beds: '5 Beds',
    baths: '4 Baths',
    price: '₹12,00,00,000',
    description: 'A stunning bungalow with ocean views in Alibaug.'
  },
  {
    title: 'Urban Penthouse',
    image: 'https://images.pexels.com/photos/10258623/pexels-photo-10258623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    beds: '4 Beds',
    baths: '3 Baths',
    price: '₹10,00,00,000',
    description: 'A luxurious penthouse in South Mumbai.'
  },
  {
    title: 'Suburban House',
    image: 'https://images.pexels.com/photos/10258622/pexels-photo-10258622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    beds: '3 Beds',
    baths: '2 Baths',
    price: '₹2,75,00,000',
    description: 'A spacious suburban house in Thane.'
  },
  {
    title: 'City Center Studio',
    image: 'https://homerental.lt/wp-content/uploads/2020/11/20200817_161901-scaled.jpg',
    beds: '1 Bed',
    baths: '1 Bath',
    price: '₹1,00,00,000',
    description: 'A compact studio apartment in Pune city center.'
  },
  {
    title: 'Hillside Retreat',
    image: 'https://assets.architecturaldesigns.com/plan_assets/324992231/large/95042RW_02b_1616184911.jpg',
    beds: '3 Beds',
    baths: '2 Baths',
    price: '₹3,20,00,000',
    description: 'A peaceful hillside retreat in Lonavala.'
  },
  {
    title: 'Lakefront Villa',
    image: 'https://assets06.redawning.com/sites/default/files/rental_property/294420/f2c031e20a12dd820c25c9bee0a3d13b.jpeg',
    beds: '4 Beds',
    baths: '3 Baths',
    price: '₹9,00,00,000',
    description: 'A stunning villa overlooking the lake in Nashik.'
  },
  {
    title: 'Eco-Friendly Home',
    image: 'https://i.pinimg.com/originals/41/09/97/410997e6fc1203a34d35844dedbbf48f.jpg',
    beds: '3 Beds',
    baths: '2 Baths',
    price: '₹4,50,00,000',
    description: 'An eco-friendly home with solar panels in Aurangabad.'
  },
  {
    title: 'Luxury Mansion',
    image: 'https://i.pinimg.com/originals/06/1d/28/061d28036b28d360baf03cfe2963cb75.jpg',
    beds: '6 Beds',
    baths: '5 Baths',
    price: '₹15,00,00,000',
    description: 'A grand luxury mansion in Nagpur.'
  },
  {
    title: 'Penthouse Apartment',
    image: 'https://i.pinimg.com/originals/24/e8/f0/24e8f08ba83e34213572acbdb1061bf0.jpg',
    beds: '4 Beds',
    baths: '3 Baths',
    price: '₹9,50,00,000',
    description: 'A high-end penthouse apartment in Mumbai.'
  },
  {
    title: 'Heritage Bungalow',
    image: 'http://cdnassets.hw.net/5d/e7/881dfb7b494c9e0c4a44ad2f082c/d9eb27fd-a9d8-438b-aaa8-cfc64f9a0c95.jpg',
    beds: '5 Beds',
    baths: '4 Baths',
    price: '₹7,50,00,000',
    description: 'A heritage bungalow with a large garden in Pune.'
  },
  {
    title: 'Sea View Apartment',
    image: 'https://www.uniquekohsamui.com/wp-content/uploads/2019/10/Residence-Unique-Appt-I-October-2019-74.jpg',
    beds: '3 Beds',
    baths: '2 Baths',
    price: '₹6,00,00,000',
    description: 'An apartment with a stunning sea view in Navi Mumbai.'
  },
  {
    title: 'Farmhouse',
    image: 'https://st.hzcdn.com/simgs/fd21a2090454a927_9-4474/home-design.jpg',
    beds: '4 Beds',
    baths: '3 Baths',
    price: '₹5,00,00,000',
    description: 'A spacious farmhouse with modern amenities in Kolhapur.'
  }
];

const seedDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(listings);
  console.log("Database seeded!");
};

seedDB().then(() => {
  mongoose.connection.close();
});
