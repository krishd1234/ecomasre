// deka clouthess - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initSearch();
  initCart();
  initMobileMenu();
});

function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

function initSearch() {
  const searchToggle = document.querySelector('.search-toggle');
  const searchOverlay = document.querySelector('.search-overlay');
  const searchClose = document.querySelector('.search-close');

  if (searchToggle && searchOverlay) {
    searchToggle.addEventListener('click', () => searchOverlay.classList.add('active'));
    searchClose?.addEventListener('click', () => searchOverlay.classList.remove('active'));
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) searchOverlay.classList.remove('active');
    });

    const searchInput = searchOverlay.querySelector('input');
    searchOverlay.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') searchOverlay.classList.remove('active');
    });
  }
}

function initCart() {
  updateCartCount();
}

function updateCartCount() {
  const badge = document.querySelector('.cart-count .badge');
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem('deka_cart') || '[]');
  } catch {
    return [];
  }
}

function setCart(cart) {
  localStorage.setItem('deka_cart', JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productId, size, quantity = 1) {
  const cart = getCart();
  const product = typeof PRODUCTS !== 'undefined' ? PRODUCTS.find(p => p.id === productId) : null;
  if (!product) return false;

  const existing = cart.find(item => item.id === productId && item.size === size);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: productId, size, quantity, name: product.name, price: product.price, image: product.image });
  }
  setCart(cart);
  return true;
}

window.getCart = getCart;
window.setCart = setCart;
window.addToCart = addToCart;
