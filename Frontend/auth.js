// // ======================================================
// // auth.js — Complete Firebase Google Authentication
// // ======================================================

// console.log("🚀 Initializing Firebase Authentication...");

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
// import { 
//   getAuth, 
//   GoogleAuthProvider, 
//   signInWithPopup, 
//   signOut, 
//   onAuthStateChanged 
// } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// // Firebase Configuration
// console.log("🔧 Loading Firebase configuration...");
// const firebaseConfig = {
//   apiKey: "AIzaSyBJxLH8S259toa65STB7cahCRgnJ8r2Zmg",
//   authDomain: "startupgrower-bf739.firebaseapp.com",
//   projectId: "startupgrower-bf739",
//   storageBucket: "startupgrower-bf739.appspot.com",
//   messagingSenderId: "118520060569",
//   appId: "1:118520060569:web:5f0d214a50ff5546d17608",
//   measurementId: "G-LL4GLJJN3E"
// };

// console.log("✅ Firebase config loaded:", firebaseConfig.projectId);

// // Initialize Firebase
// console.log("🔥 Initializing Firebase app...");
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// console.log("🎯 Firebase Auth initialized successfully");

// // DOM Elements
// console.log("🔍 Loading DOM elements...");
// const profileIcon = document.getElementById('profileIcon');
// const dropdownMenu = document.getElementById('dropdownMenu');
// const signinModal = document.getElementById('signinModal');
// const menuSignAction = document.getElementById('menuSignAction');
// const topSignLink = document.getElementById('topSignLink');
// const modalSignBtn = document.getElementById('modalSignBtn');
// const modalCloseBtn = document.getElementById('modalCloseBtn');
// const submitNav = document.getElementById('submitNav');
// const menuSubmitLink = document.getElementById('menuSubmitLink');
// const chatbotIcon = document.getElementById('chatbot-icon');

// console.log("📋 DOM elements loaded:", {
//   profileIcon: !!profileIcon,
//   dropdownMenu: !!dropdownMenu,
//   signinModal: !!signinModal,
//   menuSignAction: !!menuSignAction,
//   topSignLink: !!topSignLink,
//   modalSignBtn: !!modalSignBtn,
//   modalCloseBtn: !!modalCloseBtn,
//   submitNav: !!submitNav,
//   menuSubmitLink: !!menuSubmitLink,
//   chatbotIcon: !!chatbotIcon
// });

// // ==========================================
// // Helper Functions
// // ==========================================

// console.log("🛠️ Setting up helper functions...");

// function showNotification(message, type = 'success') {
//   console.log(`📢 Showing notification: ${message} (${type})`);
  
//   const notif = document.createElement('div');
//   notif.textContent = message;
//   notif.style.cssText = `
//     position: fixed;
//     top: 20px;
//     right: 20px;
//     background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#667eea'};
//     color: white;
//     padding: 16px 24px;
//     border-radius: 12px;
//     box-shadow: 0 8px 32px rgba(0,0,0,0.2);
//     z-index: 10003;
//     font-weight: 600;
//     animation: slideIn 0.3s ease;
//   `;
//   document.body.appendChild(notif);
  
//   setTimeout(() => {
//     notif.style.animation = 'slideOut 0.3s ease';
//     setTimeout(() => {
//       notif.remove();
//       console.log("📢 Notification removed");
//     }, 300);
//   }, 3000);
// }

// // Add notification animations
// console.log("🎨 Adding notification animations...");
// const style = document.createElement('style');
// style.textContent = `
//   @keyframes slideIn {
//     from { transform: translateX(400px); opacity: 0; }
//     to { transform: translateX(0); opacity: 1; }
//   }
//   @keyframes slideOut {
//     from { transform: translateX(0); opacity: 1; }
//     to { transform: translateX(400px); opacity: 0; }
//   }
// `;
// document.head.appendChild(style);
// console.log("✅ Notification animations added");

// // ==========================================
// // Authentication Functions
// // ==========================================

// console.log("🔐 Setting up authentication functions...");

// async function signIn() {
//   console.log("🔑 Starting Google sign-in process...");
//   modalSignBtn.disabled = true;
//   modalSignBtn.textContent = 'Signing in...';
  
//   try {
//     console.log("🔄 Opening Google sign-in popup...");
//     const result = await signInWithPopup(auth, provider);
//     console.log('✅ User signed in successfully:', {
//       email: result.user.email,
//       displayName: result.user.displayName,
//       uid: result.user.uid
//     });
    
//     signinModal.hidden = true;
//     console.log("✅ Sign-in modal hidden");
//     showNotification('Successfully signed in!', 'success');
    
//   } catch (error) {
//     console.error('❌ Sign-in error:', {
//       code: error.code,
//       message: error.message,
//       fullError: error
//     });
    
//     let errorMessage = 'Failed to sign in. Please try again.';
    
//     if (error.code === 'auth/popup-blocked') {
//       errorMessage = 'Popup blocked! Please allow popups for this site.';
//       console.warn("🚫 Popup was blocked by browser");
//     } else if (error.code === 'auth/popup-closed-by-user') {
//       errorMessage = 'Sign-in cancelled.';
//       console.log("👤 User closed the sign-in popup");
//     } else if (error.code === 'auth/network-request-failed') {
//       errorMessage = 'Network error. Please check your connection.';
//       console.error("🌐 Network error during sign-in");
//     }
    
//     showNotification(errorMessage, 'error');
//   } finally {
//     modalSignBtn.disabled = false;
//     modalSignBtn.textContent = 'Sign in with Google';
//     console.log("🔄 Sign-in button reset to ready state");
//   }
// }

// async function signOutUser() {
//   console.log("🚪 Starting sign-out process...");
//   try {
//     await signOut(auth);
//     console.log('👋 User signed out successfully');
//     showNotification('Signed out successfully', 'info');
//   } catch (error) {
//     console.error('❌ Sign-out error:', {
//       code: error.code,
//       message: error.message
//     });
//     showNotification('Failed to sign out', 'error');
//   }
// }

// function updateUI(user) {
//   console.log("🎨 Updating UI for auth state:", user ? 'signed-in' : 'signed-out');
  
//   if (user) {
//     // User is signed in
//     const displayName = user.displayName || user.email.split('@')[0];
//     const initial = displayName.charAt(0).toUpperCase();
    
//     console.log(`👤 User profile: ${displayName} (${user.email})`);
    
//     profileIcon.textContent = initial;
//     profileIcon.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
//     profileIcon.title = user.email;
    
//     menuSignAction.textContent = 'Sign Out';
//     topSignLink.textContent = 'Sign Out';
    
//     console.log('✅ UI updated for signed-in state');
    
//   } else {
//     // User is signed out
//     console.log("👤 No user, setting to signed-out state");
    
//     profileIcon.textContent = '👤';
//     profileIcon.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
//     profileIcon.title = 'Account';
    
//     menuSignAction.textContent = 'Sign In';
//     topSignLink.textContent = 'Sign In';
    
//     console.log('✅ UI updated for signed-out state');
//   }
// }

// function requireAuth(e) {
//   console.log("🔒 Auth requirement checked for element:", e.target);
  
//   if (!auth.currentUser) {
//     console.log("🚫 User not authenticated, showing sign-in modal");
//     e.preventDefault();
//     signinModal.hidden = false;
//   } else {
//     console.log("✅ User authenticated, allowing action");
//     // If user is authenticated, allow default action (navigation)
//   }
// }

// // ==========================================
// // Event Listeners Setup
// // ==========================================

// console.log("🎯 Setting up event listeners...");

// // Profile dropdown toggle
// if (profileIcon && dropdownMenu) {
//   profileIcon.addEventListener('click', (e) => {
//     console.log("📱 Profile icon clicked, toggling dropdown");
//     e.stopPropagation();
//     const currentDisplay = dropdownMenu.style.display;
//     dropdownMenu.style.display = currentDisplay === 'block' ? 'none' : 'block';
//     console.log(`📦 Dropdown display: ${dropdownMenu.style.display}`);
//   });

//   document.addEventListener('click', () => {
//     if (dropdownMenu.style.display === 'block') {
//       console.log("📦 Hiding dropdown (outside click)");
//       dropdownMenu.style.display = 'none';
//     }
//   });

//   dropdownMenu.addEventListener('click', (e) => {
//     console.log("📦 Dropdown clicked, preventing propagation");
//     e.stopPropagation();
//   });
// } else {
//   console.warn("⚠️ Profile icon or dropdown menu not found");
// }

// // Sign in/out from menu
// if (menuSignAction) {
//   menuSignAction.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log("📱 Menu sign action clicked");
//     dropdownMenu.style.display = 'none';
    
//     if (auth.currentUser) {
//       console.log("🚪 User wants to sign out from menu");
//       signOutUser();
//     } else {
//       console.log("🔑 User wants to sign in from menu");
//       signinModal.hidden = false;
//     }
//   });
// } else {
//   console.warn("⚠️ Menu sign action not found");
// }

// // Sign in/out from top nav
// if (topSignLink) {
//   topSignLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log("📱 Top sign link clicked");
    
//     if (auth.currentUser) {
//       console.log("🚪 User wants to sign out from top nav");
//       signOutUser();
//     } else {
//       console.log("🔑 User wants to sign in from top nav");
//       signinModal.hidden = false;
//     }
//   });
// } else {
//   console.warn("⚠️ Top sign link not found");
// }

// // Modal sign in button
// if (modalSignBtn) {
//   modalSignBtn.addEventListener('click', signIn);
//   console.log("✅ Modal sign-in button listener added");
// } else {
//   console.warn("⚠️ Modal sign button not found");
// }

// // Modal close button
// if (modalCloseBtn) {
//   modalCloseBtn.addEventListener('click', () => {
//     console.log("❌ Modal close button clicked");
//     signinModal.hidden = true;
//   });
// } else {
//   console.warn("⚠️ Modal close button not found");
// }

// // Close modal on backdrop click
// if (signinModal) {
//   signinModal.addEventListener('click', (e) => {
//     if (e.target === signinModal) {
//       console.log("🎯 Modal backdrop clicked, closing modal");
//       signinModal.hidden = true;
//     }
//   });
// } else {
//   console.warn("⚠️ Sign-in modal not found");
// }

// // Protect submit navigation
// if (submitNav) {
//   submitNav.addEventListener('click', requireAuth);
//   console.log("✅ Submit nav protection added");
// } else {
//   console.warn("⚠️ Submit nav not found");
// }

// if (menuSubmitLink) {
//   menuSubmitLink.addEventListener('click', requireAuth);
//   console.log("✅ Menu submit link protection added");
// } else {
//   console.warn("⚠️ Menu submit link not found");
// }

// // Protect chatbot
// if (chatbotIcon) {
//   chatbotIcon.addEventListener('click', requireAuth);
//   console.log("✅ Chatbot protection added");
// } else {
//   console.warn("⚠️ Chatbot icon not found");
// }

// // ==========================================
// // Firebase Auth State Observer
// // ==========================================

// console.log("👀 Setting up Firebase auth state observer...");

// onAuthStateChanged(auth, (user) => {
//   console.log("🔄 Auth state changed:", user ? `User: ${user.email}` : "No user");
  
//   updateUI(user);
  
//   // Store user in window for other scripts to access
//   // CRITICAL FIX: Set BOTH properties for compatibility
//   window.currentUser = user;
//   window.firebaseAuthUser = user; // This is what submit.js is looking for
  
//   console.log("💾 User data stored in window:", {
//     currentUser: !!window.currentUser,
//     firebaseAuthUser: !!window.firebaseAuthUser,
//     email: user?.email || 'none'
//   });
  
//   // Also store in localStorage for persistence
//   if (user) {
//     localStorage.setItem('currentUser', JSON.stringify({
//       uid: user.uid,
//       email: user.email,
//       displayName: user.displayName
//     }));
//     console.log("💾 User data saved to localStorage");
//   } else {
//     localStorage.removeItem('currentUser');
//     console.log("🗑️ User data removed from localStorage");
//   }
// });

// // ==========================================
// // First Visit Modal (Optional)
// // ==========================================

// console.log("⏰ Setting up first-visit modal timer...");

// window.addEventListener('load', () => {
//   console.log("📄 Page fully loaded, checking auth state for modal");
  
//   // Show modal after 2 seconds if user is not signed in
//   setTimeout(() => {
//     if (!auth.currentUser) {
//       console.log("🔄 Showing sign-in modal (first visit/delayed)");
//       if (signinModal) {
//         signinModal.hidden = false;
//       }
//     } else {
//       console.log("✅ User already signed in, no modal needed");
//     }
//   }, 2000);
// });

// // ==========================================
// // Export for other modules
// // ==========================================

// console.log("📤 Setting up exports for other modules...");

// export { auth, signIn, signOutUser };
// export function getCurrentUser() {
//   const user = auth.currentUser;
//   console.log("📤 getCurrentUser() called, returning:", user?.email || 'null');
//   return user;
// }

// // Additional helper for other modules
// export function isUserAuthenticated() {
//   const isAuth = !!auth.currentUser;
//   console.log("🔍 isUserAuthenticated() called, returning:", isAuth);
//   return isAuth;
// }

// // ==========================================
// // Initialization Complete
// // ==========================================

// console.log("🎉 Firebase Authentication setup complete!");
// console.log("📊 Current auth state:", auth.currentUser ? `User: ${auth.currentUser.email}` : "No user");
// console.log("🔧 Available exports: auth, signIn, signOutUser, getCurrentUser, isUserAuthenticated");

// // Global helper for debugging
// window.debugAuth = {
//   getCurrentUser: () => auth.currentUser,
//   getAuthState: () => ({
//     currentUser: auth.currentUser,
//     windowCurrentUser: window.currentUser,
//     windowFirebaseAuthUser: window.firebaseAuthUser,
//     localStorageUser: localStorage.getItem('currentUser')
//   }),
//   signIn: () => signIn(),
//   signOut: () => signOutUser()
// };

// console.log("🐛 Debug helpers available at window.debugAuth");

// ======================================================
// auth.js — Fixed for submit.html page
// ======================================================

console.log("🚀 Initializing Firebase Authentication...");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJxLH8S259toa65STB7cahCRgnJ8r2Zmg",
  authDomain: "startupgrower-bf739.firebaseapp.com",
  projectId: "startupgrower-bf739",
  storageBucket: "startupgrower-bf739.appspot.com",
  messagingSenderId: "118520060569",
  appId: "1:118520060569:web:5f0d214a50ff5546d17608",
  measurementId: "G-LL4GLJJN3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Safe DOM element getter
function getElement(id) {
  const element = document.getElementById(id);
  if (!element) {
    console.log(`ℹ️ Element not found (may be on different page): ${id}`);
  }
  return element;
}

// Get DOM elements safely
const profileIcon = getElement('profileIcon');
const dropdownMenu = getElement('dropdownMenu');
const signinModal = getElement('signinModal');
const menuSignAction = getElement('menuSignAction');
const topSignLink = getElement('topSignLink');
const modalSignBtn = getElement('modalSignBtn');
const modalCloseBtn = getElement('modalCloseBtn');
const submitNav = getElement('submitNav');
const menuSubmitLink = getElement('menuSubmitLink');
const chatbotIcon = getElement('chatbot-icon');

// ==========================================
// Authentication Functions
// ==========================================

async function signIn() {
  if (!modalSignBtn) {
    console.log("🔑 Sign-in triggered but no modal button found");
    return;
  }
  
  modalSignBtn.disabled = true;
  modalSignBtn.textContent = 'Signing in...';
  
  try {
    const result = await signInWithPopup(auth, provider);
    console.log('✅ User signed in:', result.user.email);
    
    if (signinModal) {
      signinModal.hidden = true;
    }
  } catch (error) {
    console.error('❌ Sign-in error:', error);
    alert('Failed to sign in. Please try again.');
  } finally {
    if (modalSignBtn) {
      modalSignBtn.disabled = false;
      modalSignBtn.textContent = 'Sign in with Google';
    }
  }
}

async function signOutUser() {
  try {
    await signOut(auth);
    console.log('👋 User signed out');
  } catch (error) {
    console.error('❌ Sign-out error:', error);
  }
}

function updateUI(user) {
  // Only update UI if elements exist (on index.html)
  if (profileIcon) {
    if (user) {
      const displayName = user.displayName || user.email.split('@')[0];
      const initial = displayName.charAt(0).toUpperCase();
      
      profileIcon.textContent = initial;
      profileIcon.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
      
      if (menuSignAction) menuSignAction.textContent = 'Sign Out';
      if (topSignLink) topSignLink.textContent = 'Sign Out';
      
    } else {
      profileIcon.textContent = '👤';
      profileIcon.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      
      if (menuSignAction) menuSignAction.textContent = 'Sign In';
      if (topSignLink) topSignLink.textContent = 'Sign In';
    }
  }
}

function requireAuth(e) {
  if (!auth.currentUser) {
    e.preventDefault();
    if (signinModal) {
      signinModal.hidden = false;
    } else {
      // If on submit.html and no modal, redirect to index.html to sign in
      window.location.href = 'index.html';
    }
  }
}

// ==========================================
// Event Listeners (only if elements exist)
// ==========================================

// Profile dropdown (only on index.html)
if (profileIcon && dropdownMenu) {
  profileIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', () => {
    dropdownMenu.style.display = 'none';
  });

  dropdownMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

// Sign in/out from menu (only on index.html)
if (menuSignAction) {
  menuSignAction.addEventListener('click', (e) => {
    e.preventDefault();
    if (dropdownMenu) dropdownMenu.style.display = 'none';
    
    if (auth.currentUser) {
      signOutUser();
    } else if (signinModal) {
      signinModal.hidden = false;
    }
  });
}

// Sign in/out from top nav (only on index.html)
if (topSignLink) {
  topSignLink.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (auth.currentUser) {
      signOutUser();
    } else if (signinModal) {
      signinModal.hidden = false;
    }
  });
}

// Modal buttons (only on index.html)
if (modalSignBtn) {
  modalSignBtn.addEventListener('click', signIn);
}

if (modalCloseBtn && signinModal) {
  modalCloseBtn.addEventListener('click', () => {
    signinModal.hidden = true;
  });
}

// Close modal on backdrop click (only on index.html)
if (signinModal) {
  signinModal.addEventListener('click', (e) => {
    if (e.target === signinModal) {
      signinModal.hidden = true;
    }
  });
}

// Protect navigation (works on both pages)
if (submitNav) {
  submitNav.addEventListener('click', requireAuth);
}

if (menuSubmitLink) {
  menuSubmitLink.addEventListener('click', requireAuth);
}

if (chatbotIcon) {
  chatbotIcon.addEventListener('click', requireAuth);
}

// ==========================================
// Firebase Auth State Observer
// ==========================================

onAuthStateChanged(auth, (user) => {
  console.log('🔄 Auth state changed:', user ? user.email : 'No user');
  
  // Store user in window for other scripts - CRITICAL FIX
  window.currentUser = user;
  window.firebaseAuthUser = user;
  
  updateUI(user);
});

// ==========================================
// First Visit Modal (only on index.html)
// ==========================================

window.addEventListener('load', () => {
  if (signinModal && !auth.currentUser) {
    setTimeout(() => {
      signinModal.hidden = false;
    }, 2000);
  }
});

// ==========================================
// Export for other modules
// ==========================================

export { auth, signIn, signOutUser };
export function getCurrentUser() {
  return auth.currentUser;
}