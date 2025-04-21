// Sample listing data (normally this would come from an API)
const listingsData = [
  {
    id: 1,
    title: "Modern Beachfront Villa",
    location: "Malibu, California",
    distance: "45 miles away",
    dates: "Nov 1-6",
    price: 350,
    rating: 4.97,
    reviews: 128,
    image: "https://placehold.co/600x400/png?text=Beachfront+Villa"
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
    image: "https://placehold.co/600x400/png?text=Mountain+Cabin"
  },
  {
    id: 3,
    title: "Downtown Luxury Loft",
    location: "New York, NY",
    distance: "5 miles away",
    dates: "Nov 10-15",
    price: 410,
    rating: 4.92,
    reviews: 217,
    image: "https://placehold.co/600x400/png?text=Luxury+Loft"
  },
  {
    id: 4,
    title: "Cozy Lakefront Cottage",
    location: "Lake Tahoe, Nevada",
    distance: "120 miles away",
    dates: "Dec 5-12",
    price: 195,
    rating: 4.85,
    reviews: 73,
    image: "https://placehold.co/600x400/png?text=Lakefront+Cottage"
  },
  {
    id: 5,
    title: "Historic Downtown Apartment",
    location: "Charleston, SC",
    distance: "32 miles away",
    dates: "Nov 18-23",
    price: 225,
    rating: 4.94,
    reviews: 168,
    image: "https://placehold.co/600x400/png?text=Historic+Apartment"
  },
  {
    id: 6,
    title: "Secluded Desert Oasis",
    location: "Sedona, Arizona",
    distance: "85 miles away",
    dates: "Jan 5-10",
    price: 290,
    rating: 4.98,
    reviews: 52,
    image: "https://placehold.co/600x400/png?text=Desert+Oasis"
  },
  {
    id: 7,
    title: "Tropical Paradise Villa",
    location: "Kauai, Hawaii",
    distance: "250 miles away",
    dates: "Dec 15-22",
    price: 520,
    rating: 4.99,
    reviews: 193,
    image: "https://placehold.co/600x400/png?text=Tropical+Villa"
  },
  {
    id: 8,
    title: "Rustic Farmhouse Getaway",
    location: "Nashville, Tennessee",
    distance: "55 miles away",
    dates: "Nov 7-12",
    price: 175,
    rating: 4.88,
    reviews: 87,
    image: "https://placehold.co/600x400/png?text=Rustic+Farmhouse"
  }
];

// Function to create listing cards
function createListingCard(listing) {
  return `
    <div class="listing-card" data-id="${listing.id}">
      <div class="listing-img">
        <img src="${listing.image}" alt="${listing.title}">
      </div>
      <div class="listing-info">
        <div class="listing-top">
          <div class="listing-location">${listing.location}</div>
          <div class="listing-rating">
            <i class="fas fa-star"></i>
            <span>${listing.rating}</span>
          </div>
        </div>
        <div class="listing-distance">${listing.distance}</div>
        <div class="listing-dates">${listing.dates}</div>
        <div class="listing-price"><span>$${listing.price}</span> night</div>
      </div>
    </div>
  `;
}

// Function to render all listings
function renderListings() {
  const container = document.getElementById('listings-container');
  container.innerHTML = '';
  
  listingsData.forEach(listing => {
    container.innerHTML += createListingCard(listing);
  });
  
  // Add event listeners to listing cards
  document.querySelectorAll('.listing-card').forEach(card => {
    card.addEventListener('click', () => {
      const listingId = card.getAttribute('data-id');
      console.log(`Listing ${listingId} clicked`);
      // Here you would navigate to the listing detail page
      // window.location.href = `/listing/${listingId}`;
    });
  });
}

// Filter buttons functionality
function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // In a real app, you would filter the listings here
      console.log(`Filter: ${button.querySelector('span').textContent}`);
      
      // For demo purposes, we'll just re-render the same listings
      renderListings();
    });
  });
}

// Initialize the application
function init() {
  renderListings();
  setupFilters();
  
  // Setup search functionality
  const searchInput = document.querySelector('.search-bar input');
  const searchButton = document.querySelector('.search-bar button');
  
  searchButton.addEventListener('click', () => {
    console.log(`Searching for: ${searchInput.value}`);
    // In a real app, you would perform the search here
  });
  
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      console.log(`Searching for: ${searchInput.value}`);
      // In a real app, you would perform the search here
    }
  });
}

// Run the initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);