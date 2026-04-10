// ── SAARTHI SAYS — Main Application JS ──

// ── PAGE NAVIGATION ──
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => a.classList.remove('active'));
  const navEl = document.querySelector(`.nav-links a[data-page="${id}"]`);
  if (navEl) navEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── TICKER ──
function buildTicker() {
  const tickerEl = document.getElementById('ticker');
  const doubled = [...commodities, ...commodities];
  tickerEl.innerHTML = doubled.map(t => `
    <div class="ticker-item">
      <span class="commodity">${t.name}</span>
      <span class="price">${t.price}/qtl</span>
      <span class="change ${t.dir}">${t.dir === 'up' ? '▲' : t.dir === 'down' ? '▼' : '—'} ${t.change}</span>
    </div>
  `).join('');
}

// ── MARKET GRID ──
const catLabels  = { pulse: 'Pulse', cereal: 'Cereal', oilseed: 'Oilseed', spice: 'Spice' };
const catBadge   = { pulse: 'badge-pulse', cereal: 'badge-cereal', oilseed: 'badge-cereal', spice: 'badge-spice' };
const arrows     = { up: '▲', down: '▼', neutral: '—' };

function buildMarketGrid(filter) {
  const grid = document.getElementById('market-grid');
  const filtered = filter === 'all' ? commodities : commodities.filter(c => c.cat === filter);
  grid.innerHTML = filtered.map(c => `
    <div class="commodity-card" data-cat="${c.cat}">
      <div class="card-top">
        <div>
          <div class="card-name">${c.name}</div>
          <div class="card-name-hindi">${c.hindi}</div>
        </div>
        <span class="card-badge ${catBadge[c.cat]}">${catLabels[c.cat]}</span>
      </div>
      <div class="card-price">${c.price}</div>
      <div class="card-unit">${c.unit}</div>
      <div class="card-range">Range: ${c.range}</div>
      <div class="card-change ${c.dir}">
        <span class="change-arrow">${arrows[c.dir]}</span>
        <span>${c.change} today</span>
        <span class="card-trend">${c.trend}</span>
      </div>
    </div>
  `).join('');
}

function filterMarket(cat, btn) {
  if (btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  buildMarketGrid(cat);
}

// ── CONTACT FORM ──
function submitForm() {
  const name      = document.getElementById('cf-name').value.trim();
  const email     = document.getElementById('cf-email').value.trim();
  const phone     = document.getElementById('cf-phone').value.trim();
  const type      = document.getElementById('cf-type').value;
  const commodity = document.getElementById('cf-commodity').value;
  const message   = document.getElementById('cf-message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in Name, Email and Message.');
    return;
  }

  const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nRole: ${type}\nCommodity: ${commodity}\n\nMessage:\n${message}`;
  const mailto = `mailto:Saarthi.says@gmail.com?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;

  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  buildTicker();
  buildMarketGrid('all');
});
