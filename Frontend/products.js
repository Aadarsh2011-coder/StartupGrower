// products.js — Fetch and display products from Firestore

// Firebase setup (same config as before)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBJxLH8S259toa65STB7cahCRgnJ8r2Zmg",
  authDomain: "startupgrower-bf739.firebaseapp.com",
  projectId: "startupgrower-bf739",
  storageBucket: "startupgrower-bf739.appspot.com",
  messagingSenderId: "118520060569",
  appId: "1:118520060569:web:5f0d214a50ff5546d17608"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// DOM elements
const productsContainer = document.getElementById('products-container');
const loadingEl = document.getElementById('loading');

// Fetch products
async function loadProducts() {
  try {
    // Query: newest first
    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      productsContainer.innerHTML = '<div class="empty">No tools submitted yet. Be the first!</div>';
      return;
    }

    let html = '';
    querySnapshot.forEach((doc) => {
      const p = doc.data();
      const logo = p.logo || 'https://via.placeholder.com/64/1e293b/FFFFFF?text=SG';
      html += `
        <div class="product-card">
          <img src="${logo}" alt="${p.name}" class="product-logo" onerror="this.src='https://via.placeholder.com/64/1e293b/FFFFFF?text=SG'">
          <div class="product-info">
            <h3>${escapeHtml(p.name)}</h3>
            <div class="tagline">${escapeHtml(p.tagline)}</div>
            <div class="category">• ${escapeHtml(p.category)}</div>
            <div class="description">${escapeHtml(p.description)}</div>
            <div class="product-actions">
              <button class="upvote-btn" disabled>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 14l5-5 5 5z"/>
                </svg>
                ${p.votes || 0}
              </button>
              <a href="${p.url}" target="_blank" class="visit-btn">Visit</a>
            </div>
          </div>
        </div>
      `;
    });

    productsContainer.innerHTML = html;

  } catch (error) {
    console.error("Error loading products:", error);
    productsContainer.innerHTML = '<div class="empty">Failed to load tools. Please try again later.</div>';
  }
}

// Simple HTML escape (security)
function escapeHtml(text) {
  if (typeof text !== 'string') return '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Load when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadProducts);
} else {
  loadProducts();
}