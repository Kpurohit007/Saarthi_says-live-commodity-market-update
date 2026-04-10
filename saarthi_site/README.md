# 🌾 Saarthi Says — Trusted Agricultural Services

A professional agricultural trading website with live commodity market prices, research insights, and contact features.

**Live site**: [saarthi-says.github.io](https://saarthi-says.github.io) *(after deploying with GitHub Pages)*

---

## 📁 Project Structure

```
saarthi_site/
├── index.html          # Main HTML — all 4 pages (SPA)
├── css/
│   └── style.css       # All styles, variables, responsive layout
├── js/
│   ├── data.js         # Commodity price data (23 commodities)
│   └── app.js          # Navigation, ticker, market grid, contact form
├── images/
│   ├── logo.png        # Saarthi Says logo
│   ├── banner.png      # Hero banner image
│   └── toor-report.jpg # Toor Dal market report screenshot
└── README.md
```

---

## 🚀 Deploy on GitHub Pages (Free Hosting)

1. Create a new GitHub repository named `saarthi-says` (or any name)
2. Upload all files maintaining the folder structure above
3. Go to **Settings → Pages → Source → main branch → / (root)**
4. Your site will be live at `https://yourusername.github.io/saarthi-says`

---

## ✨ Features

- **4 Pages**: Home, Market Prices, Commodity Insights, Contact Us
- **Live scrolling ticker** with all commodity prices
- **23 Commodities** across Pulses, Cereals, Oilseeds & Spices
- **Tabbed filtering** on market prices page
- **Toor Dal full research report** (Apr–Jun 2026 outlook)
- **Contact form** that opens pre-filled email to Saarthi.says@gmail.com
- Fully **responsive** (mobile + desktop)
- No backend needed — pure HTML/CSS/JS

---

## 🎨 Brand Colors

| Color        | Hex       | Usage              |
|--------------|-----------|--------------------|
| Deep Green   | `#006B35` | Primary, navbar    |
| Mid Green    | `#008A45` | Accents, hover     |
| Amber        | `#F5A623` | CTA, highlights    |
| Charcoal     | `#1A2518` | Dark sections      |

---

## 📦 To Update Prices

Edit `/js/data.js` — each commodity entry looks like:

```js
{ 
  name: 'Toor Dal (Arhar)', 
  hindi: 'तूर दाल', 
  cat: 'pulse',          // pulse | cereal | oilseed | spice
  price: '₹6,850', 
  unit: 'per quintal', 
  range: '₹6,500–7,200', 
  change: '+2.3%', 
  dir: 'up',             // up | down | neutral
  trend: 'Apr–Jun lean season' 
}
```

---

## 📧 Contact

**Email**: Saarthi.says@gmail.com  
**Coverage**: Gulbarga · Akola · Latur · Bidar · Mumbai · Delhi
