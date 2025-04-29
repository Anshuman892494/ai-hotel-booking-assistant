// DOM Elements
const chatMessages = document.getElementById('chat-messages');
const typingIndicator = document.getElementById('typing');
const userInput = document.getElementById('user-input');
const voiceBtn = document.getElementById('voice-btn');
const bookingModal = document.getElementById('booking-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

// API Configuration
const RAPID_API_KEY = '8001931ae7msh517772b847e7f4ep1f8a08jsn19860684ae41';
// const API_SECRET = 'eBPNFeLGQL3OdU0O';
// let accessToken = 'ZovY1Abuulvjbss6hFVZFiwG8rQx';

// Sample hotel data with North Indian hotels
const sampleHotelData = {
    popular_destinations: [
        // Punjab Hotels
        // Punjab Hotels
        { 
            name: "Hyatt Regency Amritsar", 
            location: "Amritsar, Punjab", 
            price: 16000, 
            currency: "INR", 
            rating: 4.7, 
            amenities: ["Golden Temple View", "Luxury", "Spa", "Rooftop Dining"], 
            image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" 
        },
        { 
            name: "Radisson Blu Jalandhar", 
            location: "Jalandhar, Punjab", 
            price: 7500, 
            currency: "INR", 
            rating: 4.3, 
            amenities: ["Business Center", "Pool", "Restaurant"], 
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" 
        },
        { 
            name: "Taj Swarna Amritsar", 
            location: "Amritsar, Punjab", 
            price: 12000, 
            currency: "INR", 
            rating: 4.6, 
            amenities: ["Luxury", "Spa", "Fine Dining"], 
            image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" 
        },
        { 
            name: "WelcomHotel Mohali", 
            location: "Mohali, Punjab", 
            price: 6500, 
            currency: "INR", 
            rating: 4.2, 
            amenities: ["Business Hotel", "Conference Rooms", "Bar"], 
            image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be" 
        },
        { 
            name: "Park Plaza Ludhiana", 
            location: "Ludhiana, Punjab", 
            price: 5500, 
            currency: "INR", 
            rating: 4.1, 
            amenities: ["City Center", "Restaurant", "Fitness Center"], 
            image: "https://images.unsplash.com/photo-1581313902468-0cd306cfdfed4" 
        },
        
        // Haryana Hotels
        { 
            name: "The Oberoi Gurgaon", 
            location: "Gurgaon, Haryana", 
            price: 18000, 
            currency: "INR", 
            rating: 4.8, 
            amenities: ["Luxury", "Spa", "Golf Course"], 
            image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be" 
        },
        { 
            name: "Lemon Tree Premier Gurgaon", 
            location: "Gurgaon, Haryana", 
            price: 6000, 
            currency: "INR", 
            rating: 4.2, 
            amenities: ["Business Hotel", "Restaurant", "Fitness Center"], 
            image: "https://images.unsplash.com/photo-1581313902468-0cd306cfdfed4" 
        },
        { 
            name: "The Westin Sohna Resort", 
            location: "Sohna, Haryana", 
            price: 11000, 
            currency: "INR", 
            rating: 4.5, 
            amenities: ["Resort", "Spa", "Pool", "Nature Views"], 
            image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" 
        },
        { 
            name: "Radisson Blu Faridabad", 
            location: "Faridabad, Haryana", 
            price: 7000, 
            currency: "INR", 
            rating: 4.3, 
            amenities: ["Business Hotel", "Conference Rooms", "Restaurant"], 
            image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" 
        },
        
        // Delhi Hotels
        { 
            name: "The Leela Palace New Delhi", 
            location: "New Delhi", 
            price: 22000, 
            currency: "INR", 
            rating: 4.9, 
            amenities: ["Luxury", "Spa", "Fine Dining", "Pool"], 
            image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" 
        },
        { 
            name: "ITC Maurya", 
            location: "New Delhi", 
            price: 15000, 
            currency: "INR", 
            rating: 4.7, 
            amenities: ["Luxury", "Business Center", "Multiple Restaurants"], 
            image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" 
        },
        { 
            name: "The Lalit New Delhi", 
            location: "New Delhi", 
            price: 8000, 
            currency: "INR", 
            rating: 4.4, 
            amenities: ["Central Location", "Conference Rooms", "Spa"], 
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" 
        },
        { 
            name: "The Imperial New Delhi", 
            location: "New Delhi", 
            price: 18000, 
            currency: "INR", 
            rating: 4.8, 
            amenities: ["Heritage", "Luxury", "Fine Dining", "Pool"], 
            image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" 
        },
        { 
            name: "The Claridges New Delhi", 
            location: "New Delhi", 
            price: 12000, 
            currency: "INR", 
            rating: 4.5, 
            amenities: ["Luxury", "Garden", "Restaurants", "Spa"], 
            image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be" 
        },
        
        // Chandigarh Hotels
        { 
            name: "Taj Chandigarh", 
            location: "Chandigarh", 
            price: 10000, 
            currency: "INR", 
            rating: 4.5, 
            amenities: ["Luxury", "Spa", "Fine Dining"], 
            image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" 
        },
        { 
            name: "JW Marriott Chandigarh", 
            location: "Chandigarh", 
            price: 9500, 
            currency: "INR", 
            rating: 4.6, 
            amenities: ["Luxury", "Pool", "Spa", "Business Center"], 
            image: "https://images.unsplash.com/photo-1581313902468-0cd306cfdfed4" 
        },
        { 
            name: "Hotel Mountview", 
            location: "Chandigarh", 
            price: 6000, 
            currency: "INR", 
            rating: 4.0, 
            amenities: ["City Center", "Restaurant", "Garden"], 
            image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" 
        },
        
        // Rajasthan Hotels
        { 
            name: "Rambagh Palace", 
            location: "Jaipur, Rajasthan", 
            price: 32000, 
            currency: "INR", 
            rating: 4.8, 
            amenities: ["Former Royal Residence", "Luxury", "Spa"], 
            image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" 
        },
        { 
            name: "Umaid Bhawan Palace", 
            location: "Jodhpur, Rajasthan", 
            price: 40000, 
            currency: "INR", 
            rating: 4.9, 
            amenities: ["Royal Palace", "Luxury", "Museum", "Spa"], 
            image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be" 
        },
        { 
            name: "The Oberoi Udaivilas", 
            location: "Udaipur, Rajasthan", 
            price: 35000, 
            currency: "INR", 
            rating: 4.9, 
            amenities: ["Lake View", "Luxury", "Boat Rides", "Spa"], 
            image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" 
        },
        { 
            name: "Taj Lake Palace", 
            location: "Udaipur, Rajasthan", 
            price: 38000, 
            currency: "INR", 
            rating: 4.8, 
            amenities: ["Lake Palace", "Luxury", "Boat Transfer", "Spa"], 
            image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" 
        },
        { 
            name: "ITC Rajputana", 
            location: "Jaipur, Rajasthan", 
            price: 9000, 
            currency: "INR", 
            rating: 4.6, 
            amenities: ["Heritage", "Business Center", "Restaurants"], 
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" 
        },
        
        // Uttar Pradesh Hotels
        { 
            name: "The Oberoi Amarvilas", 
            location: "Agra, Uttar Pradesh", 
            price: 45000, 
            currency: "INR", 
            rating: 4.9, 
            amenities: ["Taj Mahal View", "Luxury", "Private Pool"], 
            image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" 
        },
        { 
            name: "Radisson Blu Lucknow", 
            location: "Lucknow, Uttar Pradesh", 
            price: 7000, 
            currency: "INR", 
            rating: 4.3, 
            amenities: ["Business Hotel", "Restaurant", "Pool"], 
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" 
        },
        { 
            name: "Taj Ganges Varanasi", 
            location: "Varanasi, Uttar Pradesh", 
            price: 12000, 
            currency: "INR", 
            rating: 4.5, 
            amenities: ["Ganges View", "Luxury", "Spa", "Cultural Tours"], 
            image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" 
        },
        { 
            name: "Courtyard by Marriott Agra", 
            location: "Agra, Uttar Pradesh", 
            price: 8500, 
            currency: "INR", 
            rating: 4.4, 
            amenities: ["Taj View", "Business Hotel", "Pool"], 
            image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be" 
        },
        
        // Himachal Pradesh Hotels
        { 
            name: "Wildflower Hall", 
            location: "Shimla, Himachal Pradesh", 
            price: 28000, 
            currency: "INR", 
            rating: 4.7, 
            amenities: ["Mountain View", "Luxury", "Spa", "Adventure Activities"], 
            image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" 
        },
        { 
            name: "The Oberoi Cecil", 
            location: "Shimla, Himachal Pradesh", 
            price: 18000, 
            currency: "INR", 
            rating: 4.6, 
            amenities: ["Heritage", "Luxury", "Mountain Views", "Spa"], 
            image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" 
        },
        { 
            name: "Span Resort & Spa", 
            location: "Manali, Himachal Pradesh", 
            price: 12000, 
            currency: "INR", 
            rating: 4.5, 
            amenities: ["Mountain Resort", "Spa", "Adventure Activities"], 
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" 
        },
        
        // Uttarakhand Hotels
        { 
            name: "Taj Corbett Resort & Spa", 
            location: "Jim Corbett, Uttarakhand", 
            price: 19000, 
            currency: "INR", 
            rating: 4.6, 
            amenities: ["Jungle Safari", "Luxury", "Spa", "Private Cottages"], 
            image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" 
        },
        { 
            name: "The Claridges Naini Retreat", 
            location: "Nainital, Uttarakhand", 
            price: 15000, 
            currency: "INR", 
            rating: 4.5, 
            amenities: ["Lake View", "Heritage", "Nature Walks", "Spa"], 
            image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" 
        },
        
        // Jammu & Kashmir Hotels
        { 
            name: "The Lalit Grand Palace", 
            location: "Srinagar, Jammu & Kashmir", 
            price: 22000, 
            currency: "INR", 
            rating: 4.7, 
            amenities: ["Dal Lake View", "Heritage Palace", "Houseboats", "Spa"], 
            image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be" 
        },
        { 
            name: "Khyber Himalayan Resort & Spa", 
            location: "Gulmarg, Jammu & Kashmir", 
            price: 25000, 
            currency: "INR", 
            rating: 4.8, 
            amenities: ["Ski-in/Ski-out", "Luxury", "Spa", "Mountain Views"], 
            image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" 
        },
        { 
            name: "Hyatt Regency Amritsar", 
            location: "Amritsar, Punjab", 
            price: 16000, 
            currency: "INR", 
            rating: 4.7, 
            amenities: ["Golden Temple View", "Luxury", "Spa", "Rooftop Dining"], 
            image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" 
        },
        { 
            name: "Radisson Blu Jalandhar", 
            location: "Jalandhar, Punjab", 
            price: 7500, 
            currency: "INR", 
            rating: 4.3, 
            amenities: ["Business Center", "Pool", "Restaurant"], 
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" 
        },
        { 
            name: "Taj Swarna Amritsar", 
            location: "Amritsar, Punjab", 
            price: 12000, 
            currency: "INR", 
            rating: 4.6, 
            amenities: ["Luxury", "Spa", "Fine Dining"], 
            image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" 
        },
        
        // Haryana Hotels
        { 
            name: "The Oberoi Gurgaon", 
            location: "Gurgaon, Haryana", 
            price: 18000, 
            currency: "INR", 
            rating: 4.8, 
            amenities: ["Luxury", "Spa", "Golf Course"], 
            image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be" 
        },
        { 
            name: "Lemon Tree Premier Gurgaon", 
            location: "Gurgaon, Haryana", 
            price: 6000, 
            currency: "INR", 
            rating: 4.2, 
            amenities: ["Business Hotel", "Restaurant", "Fitness Center"], 
            image: "https://images.unsplash.com/photo-1581313902468-0cd306cfdfed4" 
        },
        
        // Delhi Hotels
        { 
            name: "The Leela Palace New Delhi", 
            location: "New Delhi", 
            price: 22000, 
            currency: "INR", 
            rating: 4.9, 
            amenities: ["Luxury", "Spa", "Fine Dining", "Pool"], 
            image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" 
        },
        { 
            name: "ITC Maurya", 
            location: "New Delhi", 
            price: 15000, 
            currency: "INR", 
            rating: 4.7, 
            amenities: ["Luxury", "Business Center", "Multiple Restaurants"], 
            image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" 
        },
        { 
            name: "The Lalit New Delhi", 
            location: "New Delhi", 
            price: 8000, 
            currency: "INR", 
            rating: 4.4, 
            amenities: ["Central Location", "Conference Rooms", "Spa"], 
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" 
        },
        
        // Chandigarh Hotels
        { 
            name: "Taj Chandigarh", 
            location: "Chandigarh", 
            price: 10000, 
            currency: "INR", 
            rating: 4.5, 
            amenities: ["Luxury", "Spa", "Fine Dining"], 
            image: "https://images.unsplash.com/photo-1582719471386-5d6891411a1a" 
        },
        
        // Rajasthan Hotels
        { 
            name: "Rambagh Palace", 
            location: "Jaipur, Rajasthan", 
            price: 32000, 
            currency: "INR", 
            rating: 4.8, 
            amenities: ["Former Royal Residence", "Luxury", "Spa"], 
            image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" 
        },
        { 
            name: "Umaid Bhawan Palace", 
            location: "Jodhpur, Rajasthan", 
            price: 40000, 
            currency: "INR", 
            rating: 4.9, 
            amenities: ["Royal Palace", "Luxury", "Museum", "Spa"], 
            image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be" 
        },
        
        // Uttar Pradesh Hotels
        { 
            name: "The Oberoi Amarvilas", 
            location: "Agra, Uttar Pradesh", 
            price: 45000, 
            currency: "INR", 
            rating: 4.9, 
            amenities: ["Taj Mahal View", "Luxury", "Private Pool"], 
            image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482" 
        },
        { 
            name: "Radisson Blu Lucknow", 
            location: "Lucknow, Uttar Pradesh", 
            price: 7000, 
            currency: "INR", 
            rating: 4.3, 
            amenities: ["Business Hotel", "Restaurant", "Pool"], 
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945" 
        }
    ]
};

// App State
let savedHotels = [];
let currentBookingHotel = null;

// Initialize the app
function init() {
    displayMainMenu();
    setupVoiceRecognition();
}

// Voice Recognition Setup
function setupVoiceRecognition() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = function() {
            voiceBtn.classList.add('listening');
            createMessage("Listening... Speak now about your hotel needs.", false);
        };

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            userInput.value = transcript;
            sendMessage();
        };

        recognition.onerror = function(event) {
            console.error('Voice recognition error', event.error);
            createMessage("Sorry, I couldn't understand your voice command. Please try again.", false);
        };

        recognition.onend = function() {
            voiceBtn.classList.remove('listening');
        };

        voiceBtn.addEventListener('click', () => {
            recognition.start();
        });
    } else {
        voiceBtn.style.display = 'none';
        console.log("Voice recognition not supported in this browser");
    }
}

// Message Functions
function createMessage(content, isUser = false, options = []) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    if (isUser) messageDiv.classList.add('user-message');
    messageDiv.innerHTML = content;

    if (options.length > 0) {
        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('options-container');
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.classList.add('option-btn');
            btn.innerHTML = `${opt.icon ? opt.icon : ''} ${opt.text}`;
            btn.onclick = () => handleOptionClick(opt.action, opt.data);
            optionsContainer.appendChild(btn);
        });
        messageDiv.appendChild(optionsContainer);
    }

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
    typingIndicator.style.display = 'flex';
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTyping() {
    typingIndicator.style.display = 'none';
}

// UI Functions
function displayMainMenu() {
    createMessage(`🏨 Welcome to your AI Hotel Booking Assistant! How can I help you find your perfect stay?`, false, [
        { text: 'Search Hotels', icon: '<i class="fas fa-search"></i>', action: 'search_hotels' },
        { text: 'View Saved Hotels', icon: '<i class="fas fa-heart"></i>', action: 'view_saved' },
        { text: 'Popular Destinations', icon: '<i class="fas fa-map-marker-alt"></i>', action: 'popular_destinations' }
    ]);
}

// Hotel Search Functions
async function searchHotels(location, checkIn = null, checkOut = null, guests = 2) {
    showTyping();

    try {
        let hotels = [];

        // Try RapidAPI first
        try {
            const response = await fetch(`https://booking-com.p.rapidapi.com/v1/hotels/search?checkin_date=${checkIn || '2023-12-15'}&checkout_date=${checkOut || '2023-12-20'}&dest_type=city&units=metric&order_by=popularity&dest_id=${encodeURIComponent(location)}&filter_by_currency=INR&locale=en-gb&adults_number=${guests || 2}`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': RAPID_API_KEY,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
                }
            });

            if (response.ok) {
                const data = await response.json();
                if (data.result && data.result.length > 0) {
                    hotels = data.result.slice(0, 5).map(hotel => ({
                        name: hotel.hotel_name,
                        location: `${hotel.city}, India`,
                        price: hotel.min_total_price || 'Price not available',
                        currency: hotel.currencycode || 'INR',
                        rating: hotel.review_score / 2 || (Math.random() * 2 + 3).toFixed(1),
                        amenities: hotel.room_amenities || ["Free WiFi", "24h Reception"],
                        image: hotel.max_photo_url || 'https://via.placeholder.com/300'
                    }));
                }
            }
        } catch (apiError) {
            console.error("RapidAPI error:", apiError);
        }

        // Fallback to sample data if API fails or returns no results
        if (hotels.length === 0) {
            console.log("Using sample data as fallback");
            hotels = sampleHotelData.popular_destinations.filter(h => 
                h.location.toLowerCase().includes(location.toLowerCase())
            );
        }

        hideTyping();

        if (hotels.length === 0) {
            createMessage(`🔍 No hotels found in ${location}. Try another destination.`, false, [
                { text: 'Try Another Search', icon: '<i class="fas fa-search"></i>', action: 'search_hotels' },
                { text: 'Main Menu', icon: '<i class="fas fa-home"></i>', action: 'main' }
            ]);
            return;
        }

        // Display hotel results
        const hotelsList = hotels.slice(0, 5).map(hotel => `
            <div class="hotel-card">
                <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
                <h3>${hotel.name}</h3>
                <p>📍 ${hotel.location}</p>
                <p class="price">${hotel.currency} ${hotel.price} per night</p>
                <p class="rating">⭐ ${hotel.rating}/5.0</p>
                <div class="amenities">${hotel.amenities.slice(0, 4).map(a => `<span class="amenity">${a}</span>`).join(' ')}</div>
                <button class="book-btn" onclick="showBookingForm('${hotel.name.replace(/'/g, "\\'")}', ${hotel.price}, '${hotel.currency}')">
                    <i class="fas fa-calendar-check"></i> Book Now
                </button>
            </div>
        `).join('');

        createMessage(`🏨 Hotels in ${location}:<br>${hotelsList}`, false, [
            { text: 'View More', icon: '<i class="fas fa-arrow-down"></i>', action: 'view_more', data: { location, hotels } },
            { text: 'Search Again', icon: '<i class="fas fa-search"></i>', action: 'search_hotels' },
            { text: 'Main Menu', icon: '<i class="fas fa-home"></i>', action: 'main' }
        ]);

    } catch (error) {
        console.error("Error in searchHotels:", error);
        hideTyping();
        createMessage(`⚠️ Sorry, we encountered an error. Here are some sample hotels:`, false);
        displaySampleHotels();
    }
}

function displaySampleHotels() {
    const hotels = sampleHotelData.popular_destinations.slice(0, 3);
    const hotelsList = hotels.map(hotel => `
        <div class="hotel-card">
            <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
            <h3>${hotel.name}</h3>
            <p>📍 ${hotel.location}</p>
            <p class="price">${hotel.currency} ${hotel.price}</p>
            <p class="rating">⭐ ${hotel.rating}/5.0</p>
            <button class="book-btn" onclick="showBookingForm('${hotel.name.replace(/'/g, "\\'")}', ${hotel.price}, '${hotel.currency}')">
                <i class="fas fa-calendar-check"></i> Book Now
            </button>
        </div>
    `).join('');

    createMessage(`🏨 Popular Hotels:<br>${hotelsList}`, false, [
        { text: 'Search Hotels', icon: '<i class="fas fa-search"></i>', action: 'search_hotels' },
        { text: 'Main Menu', icon: '<i class="fas fa-home"></i>', action: 'main' }
    ]);
}

// Booking Functions
function showBookingForm(hotelName, price, currency) {
    const hotel = sampleHotelData.popular_destinations.find(h => h.name === hotelName);
    
    currentBookingHotel = hotel;
    
    modalTitle.textContent = `Book ${hotelName}`;
    modalBody.innerHTML = `
        <div class="booking-form">
            <div>
                <label>Check-in Date</label>
                <input type="date" id="checkin-date" required>
            </div>
            <div>
                <label>Check-out Date</label>
                <input type="date" id="checkout-date" required>
            </div>
            <div>
                <label>Number of Guests</label>
                <select id="guests">
                    <option value="1">1 Guest</option>
                    <option value="2" selected>2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                </select>
            </div>
            <div>
                <label>Total Price</label>
                <p class="price">${currency} ${price} per night</p>
            </div>
            <button class="option-btn" onclick="confirmBooking()">
                <i class="fas fa-check"></i> Confirm Booking
            </button>
        </div>
    `;
    
    // Set default dates (today + 2 days)
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextDay = new Date(today);
    nextDay.setDate(nextDay.getDate() + 2);
    
    document.getElementById('checkin-date').valueAsDate = tomorrow;
    document.getElementById('checkout-date').valueAsDate = nextDay;
    
    bookingModal.style.display = 'block';
}

function confirmBooking() {
    const checkIn = document.getElementById('checkin-date').value;
    const checkOut = document.getElementById('checkout-date').value;
    const guests = document.getElementById('guests').value;
    
    if (!checkIn || !checkOut) {
        alert('Please select both check-in and check-out dates');
        return;
    }
    
    // Calculate total price (simple calculation)
    const nights = Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
    const totalPrice = currentBookingHotel.price * nights;
    
    modalBody.innerHTML = `
        <div class="confirmation-message">
            <i class="fas fa-check-circle"></i>
            <h3>Booking Confirmed!</h3>
            <p>Your booking at ${currentBookingHotel.name} is confirmed.</p>
            <p><strong>Dates:</strong> ${checkIn} to ${checkOut} (${nights} nights)</p>
            <p><strong>Guests:</strong> ${guests}</p>
            <p><strong>Total Price:</strong> ${currentBookingHotel.currency} ${totalPrice}</p>
            <button class="option-btn" onclick="closeModal()">
                <i class="fas fa-thumbs-up"></i> Great!
            </button>
        </div>
    `;
    
    // In a real app, you would send this data to your backend
    console.log('Booking confirmed:', {
        hotel: currentBookingHotel.name,
        checkIn,
        checkOut,
        guests,
        totalPrice
    });
}

function closeModal() {
    bookingModal.style.display = 'none';
}

// Event Handlers
function handleOptionClick(action, data = null) {
    showTyping();

    setTimeout(() => {
        hideTyping();

        switch (action) {
            case 'main':
                displayMainMenu();
                break;

            case 'search_hotels':
                createMessage(`🌍 Enter a city to search for hotels (e.g., "Delhi" or "Amritsar"):`, false, [
                    { text: 'Back', icon: '<i class="fas fa-arrow-left"></i>', action: 'main' }
                ]);
                break;

            case 'popular_destinations':
                displaySampleHotels();
                break;

            case 'view_saved':
                if (savedHotels.length === 0) {
                    createMessage(`❤ You haven't saved any hotels yet!`, false, [
                        { text: 'Browse Hotels', icon: '<i class="fas fa-hotel"></i>', action: 'main' }
                    ]);
                } else {
                    const savedList = savedHotels.map(h =>
                        `<div class="hotel-card">
                            <img src="${h.image}" alt="${h.name}" class="hotel-image">
                            <h3>${h.name}</h3>
                            <p>📍 ${h.location}</p>
                            <p class="price">${h.currency} ${h.price}</p>
                            <button class="book-btn" onclick="showBookingForm('${h.name.replace(/'/g, "\\'")}', ${h.price}, '${h.currency}')">
                                <i class="fas fa-calendar-check"></i> Book Now
                            </button>
                        </div>`
                    ).join('');

                    createMessage(`❤ Your saved hotels:<br>${savedList}`, false, [
                        { text: 'Browse More', icon: '<i class="fas fa-hotel"></i>', action: 'main' }
                    ]);
                }
                break;

            case 'view_more':
                if (data && data.hotels) {
                    const moreHotels = data.hotels.slice(5, 10).map(hotel => `
                        <div class="hotel-card">
                            <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
                            <h3>${hotel.name}</h3>
                            <p>📍 ${hotel.location}</p>
                            <p class="price">${hotel.currency} ${hotel.price}</p>
                            <p class="rating">⭐ ${hotel.rating}/5.0</p>
                            <button class="book-btn" onclick="showBookingForm('${hotel.name.replace(/'/g, "\\'")}', ${hotel.price}, '${hotel.currency}')">
                                <i class="fas fa-calendar-check"></i> Book Now
                            </button>
                        </div>
                    `).join('');

                    createMessage(`🏨 More hotels in ${data.location}:<br>${moreHotels}`, false, [
                        { text: 'Search Again', icon: '<i class="fas fa-search"></i>', action: 'search_hotels' },
                        { text: 'Main Menu', icon: '<i class="fas fa-home"></i>', action: 'main' }
                    ]);
                }
                break;

            default:
                if (action.startsWith('save_')) {
                    const hotelName = action.replace('save_', '').replace(/_/g, ' ');
                    const hotel = sampleHotelData.popular_destinations
                        .find(h => h.name.toLowerCase() === hotelName.toLowerCase());

                    if (hotel && !savedHotels.some(h => h.name === hotel.name)) {
                        savedHotels.push(hotel);
                        document.querySelector('.saved-hotels').innerHTML = `<i class="fas fa-heart"></i> Saved Hotels (${savedHotels.length})`;
                        createMessage(`❤ Saved ${hotel.name} to your favorites!`, false, [
                            { text: 'View Saved', icon: '<i class="fas fa-heart"></i>', action: 'view_saved' },
                            { text: 'Main Menu', icon: '<i class="fas fa-home"></i>', action: 'main' }
                        ]);
                    }
                }
                break;
        }
    }, 1000);
}

function sendMessage() {
    const question = userInput.value.trim();
    if (!question) return;

    createMessage(question, true);
    userInput.value = '';
    showTyping();

    setTimeout(() => {
        hideTyping();

        // Check for location queries
        if (question.toLowerCase().includes('hotel') || question.toLowerCase().includes('stay')) {
            const locationMatch = question.match(/(?:in|at|near)\s+([a-zA-Z\s]+)/i);
            const dateMatch = question.match(/(\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4})|([a-zA-Z]+\s+\d{1,2})/gi);
            const guestsMatch = question.match(/(\d+)\s+(?:people|guests|persons)/i);

            if (locationMatch) {
                const location = locationMatch[1].trim();
                let checkIn = null, checkOut = null;
                const guests = guestsMatch ? parseInt(guestsMatch[1]) : 2;

                if (dateMatch && dateMatch.length >= 2) {
                    checkIn = formatDate(dateMatch[0]);
                    checkOut = formatDate(dateMatch[1]);
                }

                searchHotels(location, checkIn, checkOut, guests);
            } else {
                createMessage(`🔍 Please specify a location for your hotel search (e.g., "Hotels in Delhi" or "Find stays in Amritsar").`, false, [
                    { text: 'Popular Destinations', icon: '<i class="fas fa-map-marker-alt"></i>', action: 'popular_destinations' },
                    { text: 'Main Menu', icon: '<i class="fas fa-home"></i>', action: 'main' }
                ]);
            }
        } else {
            createMessage(`🤖 I'm your AI Hotel Booking Assistant. You can ask me about:<br>- Hotels in a specific city<br>- Hotel prices<br>- Popular destinations`, false, [
                { text: 'Search Hotels', icon: '<i class="fas fa-search"></i>', action: 'search_hotels' },
                { text: 'Main Menu', icon: '<i class="fas fa-home"></i>', action: 'main' }
            ]);
        }
    }, 1500);
}

function formatDate(dateStr) {
    // Simple date formatting
    if (dateStr.includes('/')) {
        const parts = dateStr.split('/');
        return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
    }
    return dateStr;
}

// Event Listeners
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Initialize the app
init();
