const express = require('express');
const router = express.Router();

// Sample listings data (in a real app, this would come from a database)
const listings = [
  {
    id: 1,
    title: "Modern Beachfront Villa",
    location: "Malibu, California",
    distance: "45 miles away",
    dates: "Nov 1-6",
    price: 350,
    rating: 4.97,
    reviews: 128,
    image: "https://placehold.co/600x400/png?text=Beachfront+Villa",
    description: "Stunning beachfront villa with panoramic ocean views. Wake up to the sound of waves and enjoy direct beach access.",
    amenities: ["Beach access", "Pool", "Hot tub", "Wifi", "Kitchen", "Free parking", "Washer/dryer"]
  },
  {
    id: 2,
    title: "Mountain Cabin Retreat",
    location: "Aspen, Colorado",
    distance: "68 miles away",
    dates: "Oct 25-30",
    price: 275,
    rating: 4.89,
    reviews: 95,
    image: "https://placehold.co/600x400/png?text=Mountain+Cabin",
    description: "Cozy cabin nestled in the mountains with breathtaking views. Perfect for a relaxing getaway in nature.",
    amenities: ["Mountain view", "Fireplace", "Wifi", "Kitchen", "Free parking", "Hiking trails"]
  },
  // More listings would be here in a real application
];

// Get all listings
router.get('/', (req, res) => {
  res.json(listings);
});

// Get listing by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const listing = listings.find(listing => listing.id === id);
  
  if (!listing) {
    return res.status(404).json({ message: 'Listing not found' });
  }
  
  res.json(listing);
});

// Search listings
router.get('/search/:query', (req, res) => {
  const query = req.params.query.toLowerCase();
  const results = listings.filter(listing => 
    listing.title.toLowerCase().includes(query) || 
    listing.location.toLowerCase().includes(query)
  );
  
  res.json(results);
});

// Filter listings by price range
router.get('/filter/price', (req, res) => {
  const { min, max } = req.query;
  
  if (!min || !max) {
    return res.status(400).json({ message: 'Min and max price required' });
  }
  
  const minPrice = parseInt(min);
  const maxPrice = parseInt(max);
  
  const results = listings.filter(listing => 
    listing.price >= minPrice && listing.price <= maxPrice
  );
  
  res.json(results);
});

module.exports = router;