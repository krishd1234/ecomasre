# deka clouthess — E-commerce Website

A modern, responsive e-commerce website for the clothing brand **deka clouthess**.

## Features

- **Home page** — Hero banner, featured collections, offers, customer reviews
- **Shop page** — Categories (Men, Women, New Arrivals, Best Sellers), search & filters (price, size, category)
- **Product detail** — Images, price, size options, description, Add to Cart
- **Cart & Checkout** — Order summary, shipping form, secure checkout flow
- **About Us** — Brand story and philosophy
- **Contact Us** — Contact form and social links

## Design

- Color theme: Black, white, beige
- Fonts: Syne (display), Outfit (body)
- Mobile-friendly and responsive
- Smooth animations and transitions

## How to Run

1. Open the project folder in your file manager or IDE.
2. Serve the files with a local server (recommended for avoiding CORS with external images):

   ```bash
   npx serve .
   ```

   Or use Python:
   ```bash
   python -m http.server 8000
   ```

3. Open `http://localhost:3000` (or 8000) in your browser.

You can also open `index.html` directly in a browser, but some image loading may depend on your setup.

## File Structure

```
/
├── index.html      — Home page
├── shop.html       — Shop with filters
├── product.html    — Product detail (uses ?id=)
├── cart.html       — Cart & Checkout
├── about.html      — About Us
├── contact.html    — Contact Us
├── css/
│   └── styles.css  — Main stylesheet
├── js/
│   ├── data.js     — Products, collections, reviews
│   └── main.js     — Header, search, cart logic
└── README.md
```

## Notes

- Currency: Indian Rupee (₹). Product prices: ₹200–₹1000. Free shipping over ₹1000.
- Cart data is stored in `localStorage`.
- Checkout is a demo flow and does not process real payments.
