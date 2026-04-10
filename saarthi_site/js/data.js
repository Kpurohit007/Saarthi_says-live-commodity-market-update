// ── COMMODITY MARKET DATA ──
// All prices in ₹ per quintal · Updated: April 2026
const commodities = [
  // PULSES
  { name: 'Toor Dal (Arhar)',      hindi: 'तूर दाल',       cat: 'pulse',   price: '₹6,850', unit: 'per quintal', range: '₹6,500–7,200', change: '+2.3%', dir: 'up',      trend: 'Apr–Jun lean season' },
  { name: 'Chana Dal',             hindi: 'चना दाल',       cat: 'pulse',   price: '₹5,200', unit: 'per quintal', range: '₹4,900–5,450', change: '+1.1%', dir: 'up',      trend: 'Stable demand' },
  { name: 'Moong Dal',             hindi: 'मूंग दाल',      cat: 'pulse',   price: '₹8,100', unit: 'per quintal', range: '₹7,800–8,400', change: '-0.8%', dir: 'down',    trend: 'Post-rabi softening' },
  { name: 'Masoor Dal',            hindi: 'मसूर दाल',      cat: 'pulse',   price: '₹5,650', unit: 'per quintal', range: '₹5,400–5,900', change: '+0.5%', dir: 'up',      trend: 'Import pressure easing' },
  { name: 'Urad Dal',              hindi: 'उड़द दाल',      cat: 'pulse',   price: '₹7,300', unit: 'per quintal', range: '₹7,000–7,600', change: '+1.7%', dir: 'up',      trend: 'South India demand' },
  { name: 'Rajma',                 hindi: 'राजमा',         cat: 'pulse',   price: '₹9,200', unit: 'per quintal', range: '₹8,800–9,600', change: '0.0%',  dir: 'neutral', trend: 'Steady' },
  { name: 'Moth Dal',              hindi: 'मोठ दाल',       cat: 'pulse',   price: '₹6,400', unit: 'per quintal', range: '₹6,100–6,700', change: '-1.2%', dir: 'down',    trend: 'Rajasthan harvest in' },
  { name: 'Lobia',                 hindi: 'लोबिया',        cat: 'pulse',   price: '₹5,900', unit: 'per quintal', range: '₹5,600–6,200', change: '+0.3%', dir: 'up',      trend: 'Mild uptick' },
  // CEREALS
  { name: 'Wheat',                 hindi: 'गेहूं',          cat: 'cereal',  price: '₹2,350', unit: 'per quintal', range: '₹2,200–2,500', change: '+0.9%', dir: 'up',      trend: 'MSP floor support' },
  { name: 'Basmati Rice',          hindi: 'बासमती चावल',   cat: 'cereal',  price: '₹7,800', unit: 'per quintal', range: '₹7,500–8,200', change: '+1.4%', dir: 'up',      trend: 'Export demand firm' },
  { name: 'Non-Basmati Rice',      hindi: 'सामान्य चावल',  cat: 'cereal',  price: '₹2,200', unit: 'per quintal', range: '₹2,000–2,400', change: '0.0%',  dir: 'neutral', trend: 'FCI procurement active' },
  { name: 'Maize (Corn)',          hindi: 'मक्का',          cat: 'cereal',  price: '₹1,980', unit: 'per quintal', range: '₹1,850–2,100', change: '-0.6%', dir: 'down',    trend: 'Feed demand stable' },
  { name: 'Jowar',                 hindi: 'ज्वार',          cat: 'cereal',  price: '₹2,800', unit: 'per quintal', range: '₹2,600–3,000', change: '+0.2%', dir: 'up',      trend: 'Millet push scheme' },
  { name: 'Bajra',                 hindi: 'बाजरा',          cat: 'cereal',  price: '₹2,400', unit: 'per quintal', range: '₹2,200–2,600', change: '+1.0%', dir: 'up',      trend: 'Nutri-cereal demand up' },
  { name: 'Barley',                hindi: 'जौ',             cat: 'cereal',  price: '₹1,850', unit: 'per quintal', range: '₹1,700–2,000', change: '-0.4%', dir: 'down',    trend: 'Beer/malt flat' },
  // OILSEEDS
  { name: 'Soybean',               hindi: 'सोयाबीन',       cat: 'oilseed', price: '₹4,200', unit: 'per quintal', range: '₹3,900–4,500', change: '+2.1%', dir: 'up',      trend: 'Global CBOT rally' },
  { name: 'Mustard (Rapeseed)',    hindi: 'सरसों',          cat: 'oilseed', price: '₹5,100', unit: 'per quintal', range: '₹4,800–5,400', change: '+0.7%', dir: 'up',      trend: 'Edible oil demand' },
  { name: 'Groundnut',             hindi: 'मूंगफली',        cat: 'oilseed', price: '₹5,600', unit: 'per quintal', range: '₹5,200–6,000', change: '-1.5%', dir: 'down',    trend: 'Gujarat harvest pressure' },
  { name: 'Sunflower Seed',        hindi: 'सूरजमुखी',      cat: 'oilseed', price: '₹5,900', unit: 'per quintal', range: '₹5,600–6,200', change: '+0.8%', dir: 'up',      trend: 'Import cost floor' },
  // SPICES
  { name: 'Coriander (Dhaniya)',   hindi: 'धनिया',          cat: 'spice',   price: '₹8,500', unit: 'per quintal', range: '₹8,000–9,000', change: '+3.2%', dir: 'up',      trend: 'Summer demand spike' },
  { name: 'Cumin (Jeera)',         hindi: 'जीरा',           cat: 'spice',   price: '₹22,000',unit: 'per quintal', range: '₹20,000–24,000',change: '-2.1%',dir: 'down',    trend: 'Ample Rajasthan crop' },
  { name: 'Turmeric (Haldi)',      hindi: 'हल्दी',          cat: 'spice',   price: '₹14,500',unit: 'per quintal', range: '₹13,000–16,000',change: '+1.8%',dir: 'up',      trend: 'Export demand strong' },
  { name: 'Red Chilli (Lal Mirch)',hindi: 'लाल मिर्च',     cat: 'spice',   price: '₹12,800',unit: 'per quintal', range: '₹11,500–14,000',change: '+0.5%', dir: 'up',     trend: 'Andhra harvest done' },
];
