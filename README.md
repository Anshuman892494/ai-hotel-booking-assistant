# 🏨 AI Hotel Booking Assistant

A fully client-side, voice-enabled hotel discovery and booking assistant built using HTML, CSS, and JavaScript. This project provides a conversational interface, modern UI components, and an interactive booking workflow designed for a smooth and intuitive user experience.

---

## ✨ Key Features

* **Voice Search Integration** – Search hotels hands-free using the Web Speech API.
* **North India Hotel Coverage** – Includes sample hotel data across Punjab, Haryana, Delhi, Rajasthan, Uttar Pradesh, and major hill stations.
* **Complete Booking Flow** – Select check-in/check-out dates, number of guests, and confirm booking.
* **Modern Hotel Cards** – Clean visual cards with images, amenities, pricing, and ratings.
* **Saved Hotels** – Bookmark favorite hotels using LocalStorage.
* **Responsive Layout** – Fully optimized for desktop and mobile screens.
* **100% Frontend Application** – No backend required.

---

## 🧭 Technologies Used

* **HTML5**
* **CSS3** (Modern gradient backgrounds and card UI)
* **JavaScript (Vanilla)**
* **Web Speech API** for voice search
* **RapidAPI** (optional) for hotel data
* **Font Awesome** for icons

---

## 🧭 How to Use

### 1. Search for Hotels

* Type a destination in the search bar, **or**
* Click the microphone icon and speak your query (e.g., “Hotels in Amritsar”).

### 2. Browse Results

* Scroll through hotel cards including pricing, amenities, ratings, and images.
* Click **Book Now** on any hotel.

### 3. Complete Booking

* Choose check-in/check-out dates.
* Select number of guests.
* Confirm to complete the booking.

### 4. Save Favorites

* Click the **bookmark icon** to save hotels locally.

---

## 🌍 Supported Locations (Sample Data)

* **Punjab:** Amritsar, Chandigarh, Ludhiana
* **Haryana:** Gurgaon, Faridabad
* **Delhi:** Multiple regions
* **Rajasthan:** Jaipur, Udaipur, Jodhpur
* **Uttar Pradesh:** Agra, Lucknow, Varanasi
* **Hill Stations:** Shimla, Manali, Nainital

---

## 🔮 Future Enhancements

* User authentication & dashboards
* Payment gateway integration
* Reviews & rating system
* Advanced filters (price, star rating)
* Interactive map view (Google Maps / Mapbox)
* Multi-language support
* PWA support & offline caching

---

## 📁 Project Structure

```
ai-hotel-assistant/
├── index.html
├── styles.css
├── app.js
├── assets/
│   ├── images/
│   └── icons/
├── data/
│   └── hotels.json
└── README.md
```

---

## 🎤 Voice Recognition Example

```js
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-IN';
recognition.interimResults = false;

micButton.addEventListener('click', () => recognition.start());

recognition.onresult = event => {
  const text = event.results[0][0].transcript;
  searchInput.value = text;
  performSearch(text);
};
```

---

## 📦 Data Source Options

* **Local JSON** for mock/hardcoded hotels
* **RapidAPI** or similar for real-time listings

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Open a Pull Request

---

## 🛡 License

This project is available under the **MIT License**.

---

## 📫 Contact

For inquiries or issues, open an issue in the repository or contact the maintainer via GitHub.

---

## 🏨 Happy Hotel Hunting!

A clean, smart, voice-enabled way to explore hotels across India.
