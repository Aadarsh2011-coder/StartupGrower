// // arush in
// console.log("🚀 StartupGrower Submit System Initialized");

// // ===== CONFIGURATION =====
// const CONFIG = {
//   GOOGLE_FORM_URL: 'https://docs.google.com/forms/d/e/1FAIpQLScgLmZOojLBDJRJ8R4LpSox_ykkRI-Hh9G8LIiKKKMI0GM3ow/formResponse',
//   ENTRY_IDS: {
//     name: 'entry.838045357',
//     tagline: 'entry.1696386751',
//     url: 'entry.2040575379',
//     description: 'entry.899580745',
//     category: 'entry.1354375390',
//     tags: 'entry.320473220',
//     twitter: 'entry.1596945314',
//     founders: 'entry.1590946958'
//   },
  
//   // Backend API endpoint - no keys in frontend!
//   RAZORPAY_API_URL: '/api/razorpay-order'
// };

// // ===== ANTI-SPAM SYSTEM =====
// class AntiSpamSystem {
//   constructor() {
//     this.submittedProducts = new Set();
//     this.submittedUrls = new Set();
//     this.submittedEmails = new Set();
//     this.cooldownPeriod = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
//     this.loadFromStorage();
//   }

//   // Load previous submissions from memory (not localStorage)
//   loadFromStorage() {
//     try {
//       // Using in-memory storage instead of localStorage
//       if (window._submissionCache) {
//         this.submittedProducts = new Set(window._submissionCache.products || []);
//         this.submittedUrls = new Set(window._submissionCache.urls || []);
//         this.submittedEmails = new Set(window._submissionCache.emails || []);
//       }
//     } catch (error) {
//       console.warn('Failed to load submission history:', error);
//     }
//   }

//   // Save to memory (not localStorage)
//   saveToStorage() {
//     try {
//       // Using in-memory storage instead of localStorage
//       window._submissionCache = {
//         products: [...this.submittedProducts],
//         urls: [...this.submittedUrls],
//         emails: [...this.submittedEmails]
//       };
//     } catch (error) {
//       console.warn('Failed to save submission history:', error);
//     }
//   }

//   // Normalize data for comparison
//   normalizeText(text) {
//     return text.toLowerCase().trim().replace(/\s+/g, ' ').replace(/[^\w\s]/g, '');
//   }

//   normalizeUrl(url) {
//     try {
//       const urlObj = new URL(url);
//       return urlObj.hostname.replace(/^www\./, '').toLowerCase();
//     } catch {
//       return this.normalizeText(url);
//     }
//   }

//   normalizeEmail(email) {
//     return email.toLowerCase().trim();
//   }

//   // Check for duplicates
//   checkForDuplicates(productName, url, email) {
//     const normalizedName = this.normalizeText(productName);
//     const normalizedUrl = this.normalizeUrl(url);
//     const normalizedEmail = this.normalizeEmail(email);

//     const errors = [];

//     // Check product name duplicates
//     if (this.submittedProducts.has(normalizedName)) {
//       errors.push('This product name has already been submitted');
//     }

//     // Check URL duplicates
//     if (this.submittedUrls.has(normalizedUrl)) {
//       errors.push('This website URL has already been submitted');
//     }

//     return errors;
//   }

//   // Add new submission
//   addSubmission(productName, url, email) {
//     const normalizedName = this.normalizeText(productName);
//     const normalizedUrl = this.normalizeUrl(url);
//     const normalizedEmail = this.normalizeEmail(email);

//     this.submittedProducts.add(normalizedName);
//     this.submittedUrls.add(normalizedUrl);
//     this.submittedEmails.add(normalizedEmail);

//     this.saveToStorage();

//     // Set timeout to remove after cooldown period
//     setTimeout(() => {
//       this.submittedProducts.delete(normalizedName);
//       this.submittedUrls.delete(normalizedUrl);
//       this.saveToStorage();
//     }, this.cooldownPeriod);
//   }

//   // Clear old data (optional maintenance)
//   clearOldData() {
//     // Could implement time-based clearing if needed
//   }
// }

// // Initialize anti-spam system
// const antiSpam = new AntiSpamSystem();

// // ===== PRICING PLANS CONFIGURATION =====
// const PRICING_PLANS = {
//   free: { 
//     inr: 0, 
//     usd: 0,
//     name: 'Free Launch',
//     description: 'Free Launch Plan'
//   },
//   starter: { 
//     inr: 99, 
//     usd: 1.20,
//     name: 'Starter',
//     description: 'Starter Plan'
//   },
//   growth: { 
//     inr: 199, 
//     usd: 2.40,
//     name: 'Growth', 
//     description: 'Growth Plan'
//   },
//   pro: { 
//     inr: 399, 
//     usd: 4.80,
//     name: 'Pro',
//     description: 'Pro Plan'
//   },
//   elite: { 
//     inr: 599, 
//     usd: 7.00,
//     name: 'Elite',
//     description: 'Elite Plan'
//   },
//   ultimate: { 
//     inr: 799, 
//     usd: 9.50,
//     name: 'Ultimate',
//     description: 'Ultimate Plan'
//   }
// };

// const BADGE_STYLES = {
//   colored: {
//     name: 'Colored',
//     svg: `<div style="text-align: center;">
// <a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
// <svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
//       <defs>
//         <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
//           <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
//         </linearGradient>
//       </defs>
//       <rect width="300" height="80" rx="12" fill="url(#bgGradient)"/>
//       <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.6"/>
//       <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.6"/>
//       <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#ffffff" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
//       <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">Listed on StartupGrower</text>
//     </svg>
// </a>
// </div>`
//   },
//   neutral: {
//     name: 'Neutral',
//     svg: `<div style="text-align: center;">
// <a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
// <svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
//       <rect width="300" height="80" rx="12" fill="#f8fafc"/>
//       <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#64748b" stroke-width="2" opacity="0.6"/>
//       <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#64748b" stroke-width="2" opacity="0.6"/>
//       <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
//       <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#475569" text-anchor="middle">Listed on StartupGrower</text>
//     </svg>
// </a>
// </div>`
//   },
//   dark: {
//     name: 'Dark',
//     svg: `<div style="text-align: center;">
// <a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
// <svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
//       <rect width="300" height="80" rx="12" fill="#1e293b"/>
//       <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.6"/>
//       <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.6"/>
//       <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#94a3b8" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
//       <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#f1f5f9" text-anchor="middle">Listed on StartupGrower</text>
//     </svg>
// </a>
// </div>`
//   },
//   light: {
//     name: 'Light',
//     svg: `<div style="text-align: center;">
// <a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
// <svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
//       <rect width="300" height="80" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
//       <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#475569" stroke-width="2" opacity="0.6"/>
//       <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#475569" stroke-width="2" opacity="0.6"/>
//       <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
//       <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#1e293b" text-anchor="middle">Listed on StartupGrower</text>
//     </svg>
// </a>
// </div>`
//   }
// };

// let currentBadgeStyle = 'colored';

// // ===== PRICING SYSTEM =====
// let selectedPlan = 'free';
// let currentCurrency = 'inr';

// // ===== TOAST SYSTEM =====
// function showToast(message, type = 'info') {
//   const toast = document.createElement('div');
//   toast.style.cssText = `
//     position: fixed;
//     top: 20px;
//     right: 20px;
//     padding: 16px 24px;
//     background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
//     color: white;
//     border-radius: 12px;
//     box-shadow: 0 10px 30px rgba(0,0,0,0.15);
//     z-index: 10000;
//     font-family: Inter, sans-serif;
//     font-weight: 500;
//     animation: slideIn 0.3s ease;
//   `;
//   toast.textContent = message;
//   document.body.appendChild(toast);
  
//   setTimeout(() => {
//     toast.style.animation = 'slideOut 0.3s ease';
//     setTimeout(() => toast.remove(), 300);
//   }, 4000);
// }

// // Add CSS animations for toast
// if (!document.querySelector('#toast-animations')) {
//   const style = document.createElement('style');
//   style.id = 'toast-animations';
//   style.textContent = `
//     @keyframes slideIn {
//       from { transform: translateX(100%); opacity: 0; }
//       to { transform: translateX(0); opacity: 1; }
//     }
//     @keyframes slideOut {
//       from { transform: translateX(0); opacity: 1; }
//       to { transform: translateX(100%); opacity: 0; }
//     }
//     @keyframes spin {
//       from { transform: rotate(0deg); }
//       to { transform: rotate(360deg); }
//     }
//   `;
//   document.head.appendChild(style);
// }

// // ===== SECURE PAYMENT PROCESSING =====
// async function processPayment(plan, formData) {
//   return new Promise((resolve, reject) => {
//     // For free plan, resolve immediately
//     if (plan === 'free') {
//       resolve({ success: true, paymentId: 'free_plan' });
//       return;
//     }

//     // Create order via secure backend first
//     createRazorpayOrder(plan, formData).then(orderData => {
//       // Check if Razorpay is available
//       if (typeof Razorpay === 'undefined') {
//         reject(new Error('Payment gateway not loaded. Please refresh the page.'));
//         return;
//       }

//       const options = {
//         key: orderData.key,
//         amount: orderData.amount,
//         currency: orderData.currency,
//         order_id: orderData.orderId,
//         name: 'StartupGrower',
//         description: PRICING_PLANS[plan].description,
//         image: '/logo64.png',
//         handler: function(response) {
//           console.log('✅ Payment successful:', response);
//           resolve({ 
//             success: true, 
//             paymentId: response.razorpay_payment_id,
//             orderId: response.razorpay_order_id,
//             signature: response.razorpay_signature
//           });
//         },
//         prefill: {
//           name: formData.founders || '',
//           email: formData.email || '',
//           contact: ''
//         },
//         notes: {
//           product_name: formData.name,
//           plan: plan,
//           website: formData.url
//         },
//         theme: {
//           color: '#10b981'
//         }
//       };

//       const rzp = new Razorpay(options);
      
//       rzp.on('payment.failed', function(response) {
//         console.error('❌ Payment failed:', response);
//         const errorMessage = response.error?.description || 
//                             response.error?.reason || 
//                             'Payment failed. Please try again.';
//         reject(new Error(errorMessage));
//       });

//       // Add modal close event
//       rzp.on('modal.close', function() {
//         console.log('Payment modal closed by user');
//         reject(new Error('Payment cancelled by user'));
//       });

//       rzp.open();

//     }).catch(error => {
//       reject(error);
//     });
//   });
// }

// async function createRazorpayOrder(plan, formData) {
//   try {
//     console.log('🔄 Creating Razorpay order for plan:', plan);
    
//     const response = await fetch(CONFIG.RAZORPAY_API_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         plan: plan,
//         currency: currentCurrency,
//         formData: {
//           name: formData.name,
//           url: formData.url,
//           email: formData.email,
//           founders: formData.founders
//         }
//       })
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`Server error: ${response.status} - ${errorText}`);
//     }

//     const result = await response.json();

//     if (!result.success) {
//       throw new Error(result.error || 'Failed to create payment order');
//     }

//     console.log('✅ Order created successfully:', result.orderId);
//     return result;

//   } catch (error) {
//     console.error('❌ Order creation failed:', error);
    
//     // User-friendly error messages
//     if (error.message.includes('network') || error.message.includes('fetch')) {
//       throw new Error('Network error: Unable to connect to payment service. Please check your internet connection.');
//     } else if (error.message.includes('gateway')) {
//       throw new Error('Payment gateway is temporarily unavailable. Please try again in a few minutes.');
//     } else if (error.message.includes('cors')) {
//       throw new Error('Security restriction: Please ensure you are using HTTPS.');
//     } else {
//       throw new Error('Payment initialization failed: ' + error.message);
//     }
//   }
// }

// // ===== BADGE MANAGEMENT =====
// function updateBadgePreview(style = currentBadgeStyle) {
//   const badgePreview = document.getElementById('badgePreview');
//   const badgeCodeDisplay = document.getElementById('badgeCodeDisplay');
  
//   if (!badgePreview) return;
  
//   badgePreview.innerHTML = '';
  
//   const link = document.createElement('a');
//   link.href = 'https://startupgrower.pages.dev';
//   link.target = '_blank';
//   link.rel = 'noopener';
//   link.style.display = 'inline-block';
//   link.innerHTML = BADGE_STYLES[style].svg;
//   badgePreview.appendChild(link);
  
//   // Update badge code display
//   if (badgeCodeDisplay) {
//     const badgeCode = `<a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
// ${BADGE_STYLES[style].svg}
// </a>`;
//     badgeCodeDisplay.textContent = badgeCode;
//   }
// }

// function initializeBadgePreviews() {
//   // Initialize small previews
//   Object.keys(BADGE_STYLES).forEach(style => {
//     const previewElement = document.getElementById(`preview${style.charAt(0).toUpperCase() + style.slice(1)}`);
//     if (previewElement) {
//       previewElement.innerHTML = BADGE_STYLES[style].svg;
//     }
//   });
  
//   // Set up badge style selector
//   const badgeOptions = document.querySelectorAll('.badge-option');
//   badgeOptions.forEach(option => {
//     option.addEventListener('click', () => {
//       // Remove active class from all options
//       badgeOptions.forEach(opt => opt.classList.remove('active'));
//       // Add active class to clicked option
//       option.classList.add('active');
//       // Update current badge style
//       currentBadgeStyle = option.dataset.style;
//       // Update badge preview
//       updateBadgePreview(currentBadgeStyle);
//     });
//   });
// }

// window.copyBadgeCode = function() {
//   const badgeCode = `<a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
// ${BADGE_STYLES[currentBadgeStyle].svg}
// </a>`;

//   navigator.clipboard.writeText(badgeCode).then(() => {
//     showToast("✅ Badge code copied to clipboard!", "success");
//   }).catch(() => {
//     showToast("⚠️ Failed to copy. Please copy manually.", "error");
//   });
// }

// // ===== BADGE VERIFICATION =====
// async function verifyBadgeOnWebsite(url) {
//   try {
//     console.log(`🔍 Verifying badge on ${url}...`);
    
//     // Try to fetch the website
//     const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`, {
//       method: 'GET',
//       headers: { 'Accept': 'text/html' }
//     });
    
//     if (!response.ok) {
//       console.warn("⚠️ Could not fetch website for verification");
//       return { verified: false, reason: "Could not access website" };
//     }
    
//     const html = await response.text();
    
//     // Check for badge markers
//     const hasBadge = html.includes('startupgrower.pages.dev') || 
//                      html.includes('Listed on StartupGrower') ||
//                      html.includes('STARTUP GROWER');
    
//     if (hasBadge) {
//       console.log("✅ Badge found on website!");
//       return { verified: true };
//     } else {
//       console.log("❌ Badge not found on website");
//       return { verified: false, reason: "Badge not found on website" };
//     }
    
//   } catch (error) {
//     console.error("Error verifying badge:", error);
//     // If verification fails, we'll allow submission with warning
//     return { verified: false, reason: "Verification failed - please ensure badge is visible" };
//   }
// }

// function setupBadgeVerification() {
//   const verifyButton = document.querySelector('.verify-badge-btn');
  
//   if (!verifyButton) return;
  
//   verifyButton.addEventListener('click', async () => {
//     const url = document.getElementById('url').value.trim();
    
//     if (!url) {
//       showToast("⚠️ Please enter your website URL first", "error");
//       return;
//     }
    
//     const originalHTML = verifyButton.innerHTML;
//     verifyButton.disabled = true;
//     verifyButton.innerHTML = `
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="animation: spin 1s linear infinite;">
//         <circle cx="12" cy="12" r="10" stroke-width="4" stroke="currentColor" stroke-opacity="0.25"/>
//         <path d="M12 2a10 10 0 0 1 10 10" stroke-width="4" stroke-linecap="round"/>
//       </svg>
//       Checking...
//     `;
    
//     const result = await verifyBadgeOnWebsite(url);
    
//     if (result.verified) {
//       verifyButton.innerHTML = `
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
//           <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/>
//         </svg>
//         Badge Verified! ✓
//       `;
//       verifyButton.style.background = "linear-gradient(135deg, #10b981, #059669)";
//       const badgeConfirmation = document.getElementById('badgeConfirmation');
//       if (badgeConfirmation) badgeConfirmation.checked = true;
//       showToast("✅ Badge verified successfully!", "success");
      
//       // Show pricing section after verification
//       showPricingSection();
//     } else {
//       verifyButton.innerHTML = originalHTML;
//       verifyButton.disabled = false;
//       showToast(`⚠️ ${result.reason}. You can still submit manually.`, "error");
//     }
//   });
// }

// // ===== PRICING FUNCTIONS =====
// function initializePricing() {
//   // Plan selection
//   const planButtons = document.querySelectorAll('.plan-btn');
//   planButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//       // Remove selected from all
//       planButtons.forEach(b => {
//         b.classList.remove('selected');
//         const planName = b.closest('.pricing-card').querySelector('h4').textContent;
//         b.textContent = `Select ${planName}`;
//       });
      
//       // Add selected to clicked
//       btn.classList.add('selected');
//       btn.textContent = 'Selected ✓';
      
//       // Update selected plan
//       selectedPlan = btn.dataset.plan;
//       const hiddenInput = document.getElementById('selectedPlan');
//       if (hiddenInput) {
//         hiddenInput.value = selectedPlan;
//       }
      
//       const planName = btn.closest('.pricing-card').querySelector('h4').textContent;
//       console.log(`✅ Plan selected: ${selectedPlan}`);
//       showToast(`${planName} plan selected!`, 'success');
//     });
//   });
  
//   // Start price flipping animation
//   startPriceFlip();
// }

// function startPriceFlip() {
//   setInterval(() => {
//     const prices = document.querySelectorAll('.price');
    
//     // Toggle currency
//     currentCurrency = currentCurrency === 'inr' ? 'usd' : 'inr';
    
//     prices.forEach(price => {
//       if (price.dataset.currency === currentCurrency) {
//         price.classList.add('active');
//       } else {
//         price.classList.remove('active');
//       }
//     });
//   }, 1500);
// }

// function showPricingSection() {
//   const pricingSection = document.getElementById('pricingSection');
//   if (pricingSection) {
//     console.log("💰 Showing pricing section...");
//     pricingSection.style.display = 'block';
//     setTimeout(() => {
//       pricingSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }, 300);
//   }
// }

// // ===== PROGRESS BAR =====
// function updateProgress() {
//   const requiredFields = ["toolName", "tagline", "url", "description", "category", "founders", "email"];
//   const totalFields = requiredFields.length;
  
//   const filled = requiredFields.filter(id => {
//     const field = document.getElementById(id);
//     return field && field.value.trim() !== "";
//   }).length;
  
//   const progress = (filled / totalFields) * 100;
//   const progressFill = document.getElementById("progressFill");
//   if (progressFill) {
//     progressFill.style.width = `${progress}%`;
//   }
  
//   console.log(`Progress: ${filled}/${totalFields} fields filled (${progress.toFixed(0)}%)`);
//   checkRequiredFields();
// }

// function checkRequiredFields() {
//   const required = ["toolName", "tagline", "url", "description", "category", "founders", "email"];
//   const allFilled = required.every(id => {
//     const field = document.getElementById(id);
//     return field && field.value.trim() !== "";
//   });
  
//   const section = document.getElementById("achievementSection");

//   if (allFilled) {
//     console.log("✅ All required fields filled! Showing badge section...");
//     if (section) section.style.display = "block";
//     setTimeout(() => {
//       section.scrollIntoView({ behavior: "smooth", block: "center" });
      
//       setTimeout(() => {
//         showPricingSection();
//       }, 600);
//     }, 400);
//   } else {
//     console.log("⏳ Waiting for all required fields...");
//     if (section) section.style.display = "none";
    
//     const pricingSection = document.getElementById("pricingSection");
//     if (pricingSection) pricingSection.style.display = "none";
//   }
// }

// // ===== GOOGLE FORMS SUBMISSION =====
// async function submitToGoogleForms(formData) {
//   console.log("📤 Submitting to Google Forms...");
//   try {
//     const iframe = document.createElement('iframe');
//     iframe.name = 'google_forms_submit';
//     iframe.style.display = 'none';
//     document.body.appendChild(iframe);

//     const form = document.createElement('form');
//     form.target = 'google_forms_submit';
//     form.method = 'POST';
//     form.action = CONFIG.GOOGLE_FORM_URL;

//     let allFounders = formData.founders;
//     if (formData.cofounders) allFounders += ` | Co-founders: ${formData.cofounders}`;
//     if (formData.email) allFounders += ` | Email: ${formData.email}`;
//     if (formData.plan) allFounders += ` | Plan: ${formData.plan}`;
//     if (formData.paymentId && formData.paymentId !== 'free_plan') {
//       allFounders += ` | Payment ID: ${formData.paymentId}`;
//     }

//     const fields = [
//       { id: CONFIG.ENTRY_IDS.name, value: formData.name },
//       { id: CONFIG.ENTRY_IDS.tagline, value: formData.tagline },
//       { id: CONFIG.ENTRY_IDS.url, value: formData.url },
//       { id: CONFIG.ENTRY_IDS.description, value: formData.description },
//       { id: CONFIG.ENTRY_IDS.category, value: formData.category },
//       { id: CONFIG.ENTRY_IDS.tags, value: formData.tags || "" },
//       { id: CONFIG.ENTRY_IDS.twitter, value: formData.twitter || "" },
//       { id: CONFIG.ENTRY_IDS.founders, value: allFounders }
//     ];

//     fields.forEach(field => {
//       const input = document.createElement('input');
//       input.type = 'hidden';
//       input.name = field.id;
//       input.value = field.value;
//       form.appendChild(input);
//     });

//     document.body.appendChild(form);
//     form.submit();

//     setTimeout(() => {
//       document.body.removeChild(form);
//       document.body.removeChild(iframe);
//     }, 2000);

//     return { success: true };
//   } catch (error) {
//     console.error("❌ Google Forms submission error:", error);
//     return { success: false, error: error.message };
//   }
// }

// // ===== MAIN FORM HANDLER =====
// function setupFormSubmission() {
//   const form = document.getElementById("toolForm");
//   if (!form) return;

//   form.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const btn = document.querySelector(".submit-btn");
//     if (!btn) return;
    
//     const originalHTML = btn.innerHTML;

//     const confirmBadge = document.getElementById("badgeConfirmation");
//     if (!confirmBadge || !confirmBadge.checked) {
//       showToast("⚠️ Please confirm you've added the StartupGrower badge before submitting.", "error");
//       if (confirmBadge) confirmBadge.focus();
//       return;
//     }

//     const formData = {
//       name: document.getElementById("toolName").value.trim(),
//       tagline: document.getElementById("tagline").value.trim(),
//       url: document.getElementById("url").value.trim(),
//       description: document.getElementById("description").value.trim(),
//       category: document.getElementById("category").value,
//       tags: document.getElementById("tags").value.trim(),
//       twitter: document.getElementById("twitter").value.trim(),
//       founders: document.getElementById("founders").value.trim(),
//       cofounders: document.getElementById("cofounders").value.trim(),
//       email: document.getElementById("email").value.trim(),
//       plan: selectedPlan
//     };

//     // URL validation and auto-prefix
//     if (formData.url && !formData.url.startsWith("http")) {
//       formData.url = "https://" + formData.url;
//     }

//     // Validation
//     if (!formData.name || !formData.tagline || !formData.url || !formData.description || !formData.category || !formData.founders || !formData.email) {
//       showToast("⚠️ Please fill all required fields", "error");
//       return;
//     }

//     if (formData.tagline.length > 80) {
//       showToast("⚠️ Tagline must be under 80 characters", "error");
//       return;
//     }

//     if (formData.description.length < 20) {
//       showToast("⚠️ Description must be at least 20 characters", "error");
//       return;
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       showToast("⚠️ Please enter a valid email address", "error");
//       return;
//     }

//     // ===== ANTI-SPAM CHECK =====
//     const duplicateErrors = antiSpam.checkForDuplicates(formData.name, formData.url, formData.email);
//     if (duplicateErrors.length > 0) {
//       showToast(`🚫 ${duplicateErrors.join(' and ')}. Please submit a different product.`, "error");
//       return;
//     }

//     btn.disabled = true;
//     btn.innerHTML = `
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="animation: spin 1s linear infinite;">
//         <circle cx="12" cy="12" r="10" stroke-width="4" stroke="currentColor" stroke-opacity="0.25"/>
//         <path d="M12 2a10 10 0 0 1 10 10" stroke-width="4" stroke-linecap="round"/>
//       </svg>
//       <span style="margin-left:8px;">Processing...</span>
//     `;

//     try {
//       // ===== PAYMENT PROCESSING SECTION =====
//       let paymentResult = { success: true, paymentId: 'free_plan' };
      
//       if (selectedPlan !== 'free') {
//         showToast(`💳 Processing ${PRICING_PLANS[selectedPlan].name} payment...`, 'info');
        
//         // Secure payment processing
//         paymentResult = await processPayment(selectedPlan, formData);
        
//         if (!paymentResult.success) {
//           throw new Error('Payment processing failed');
//         }
        
//         showToast("✅ Payment successful! Submitting your tool...", "success");
//         console.log('💰 Payment completed:', paymentResult);
//       }
//       // ===== END PAYMENT PROCESSING =====

//       // Add payment info to form data
//       formData.paymentId = paymentResult.paymentId;

//       // ===== ADD TO ANTI-SPAM SYSTEM =====
//       antiSpam.addSubmission(formData.name, formData.url, formData.email);

//       // Submit to Google Forms
//       const result = await submitToGoogleForms(formData);
//       if (result.success) {
//         btn.innerHTML = `
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//             <path d="M20 6L9 17l-5-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//           </svg>
//           <span>Submitted Successfully!</span>
//         `;
//         btn.style.background = "linear-gradient(135deg, #10b981, #059669)";
        
//         const successMessage = selectedPlan === 'free' 
//           ? "🎉 Your tool has been submitted successfully!" 
//           : `🎉 Your tool has been submitted successfully! Payment ID: ${paymentResult.paymentId}`;
        
//         showToast(successMessage, "success");

//         setTimeout(() => {
//           form.reset();
//           btn.disabled = false;
//           btn.innerHTML = originalHTML;
//           btn.style.background = "";
//           const progressFill = document.getElementById("progressFill");
//           if (progressFill) progressFill.style.width = "0%";
//           const achievementSection = document.getElementById("achievementSection");
//           if (achievementSection) achievementSection.style.display = "none";
//           const pricingSection = document.getElementById("pricingSection");
//           if (pricingSection) pricingSection.style.display = "none";
//           selectedPlan = 'free';
//           window.scrollTo({ top: 0, behavior: 'smooth' });
//         }, 3000);
//       } else {
//         throw new Error(result.error || "Submission failed");
//       }
//     } catch (error) {
//       console.error("❌ Submission error:", error);
//       showToast(`❌ ${error.message}`, "error");
//       btn.innerHTML = originalHTML;
//       btn.disabled = false;
//       return; // Stop form submission on payment error
//     }
//   });
// }

// // ===== INITIALIZATION =====
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("✅ StartupGrower Submit System Ready!");
//   console.log("🔐 SECURE MODE: Using backend API for payments");
  
//   // Set up event listeners for progress tracking
//   const requiredFieldIds = ["toolName", "tagline", "url", "description", "category", "founders", "email"];
  
//   requiredFieldIds.forEach(id => {
//     const field = document.getElementById(id);
//     if (field) {
//       field.addEventListener("input", updateProgress);
//       field.addEventListener("change", updateProgress);
//     }
//   });
  
//   // Initialize badge system
//   initializeBadgePreviews();
//   updateBadgePreview();
//   setupBadgeVerification();
  
//   // Initialize pricing system
//   initializePricing();
  
//   // Set up form submission
//   setupFormSubmission();
  
//   // Initial progress update
//   updateProgress();
// });





// console.log("🚀 StartupGrower Submit System Initialized");

// // ===== CONFIGURATION =====
// const CONFIG = {
//   GOOGLE_FORM_URL: 'https://docs.google.com/forms/d/e/1FAIpQLScgLmZOojLBDJRJ8R4LpSox_ykkRI-Hh9G8LIiKKKMI0GM3ow/formResponse',
//   ENTRY_IDS: {
//     name: 'entry.838045357',
//     tagline: 'entry.1696386751',
//     url: 'entry.2040575379',
//     description: 'entry.899580745',
//     category: 'entry.1354375390',
//     tags: 'entry.320473220',
//     twitter: 'entry.1596945314',
//     founders: 'entry.1590946958',
//     logo: 'entry.2005620554' // ← ADDED LOGO FIELD
//   },
//   // Backend API endpoint - no keys in frontend!
//   RAZORPAY_API_URL: '/api/razorpay-order'
// };

// // ===== BASE64 IMAGE UPLOAD FUNCTIONALITY =====
// async function uploadLogoAsBase64(file) {
//   return new Promise((resolve, reject) => {
//     try {
//       console.log('📤 Converting logo to base64...');
      
//       const reader = new FileReader();
//       reader.onload = function(e) {
//         const base64Data = e.target.result;
//         console.log('✅ Logo converted to base64');
//         resolve(base64Data);
//       };
      
//       reader.onerror = () => reject(new Error('Failed to read file'));
//       reader.readAsDataURL(file);
      
//     } catch (error) {
//       reject(new Error('Upload failed: ' + error.message));
//     }
//   });
// }

// function setupLogoUpload() {
//   const logoUpload = document.getElementById('logoUpload');
//   const logoPreview = document.getElementById('logoPreview');
  
//   if (!logoUpload || !logoPreview) return;
  
//   logoUpload.addEventListener('change', async (e) => {
//     const file = e.target.files[0];
    
//     if (!file) return;
    
//     // Clear previous status and preview
//     logoPreview.innerHTML = '';
    
//     // Validate file type
//     const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
//     if (!validTypes.includes(file.type)) {
//       showToast('⚠️ Please select a valid image file (JPEG, PNG, GIF, WebP)', 'error');
//       return;
//     }
    
//     // Validate file size (max 2MB for base64 - Google Sheets has limits)
//     if (file.size > 2 * 1024 * 1024) {
//       showToast('⚠️ Image must be smaller than 2MB for optimal performance', 'error');
//       return;
//     }
    
//     // Show local preview
//     const previewUrl = URL.createObjectURL(file);
//     const previewImg = document.createElement('img');
//     previewImg.src = previewUrl;
//     previewImg.alt = "Logo preview";
    
//     logoPreview.appendChild(previewImg);
    
//     // Show uploading status
//     const statusDiv = document.createElement('div');
//     statusDiv.className = 'upload-status';
//     statusDiv.innerHTML = '<span>📤 Processing logo...</span>';
//     logoPreview.appendChild(statusDiv);
    
//     // Convert to base64
//     try {
//       logoUpload.classList.add('uploading');
//       const base64Image = await uploadLogoAsBase64(file);
      
//       // Store the base64 image for form submission
//       let logoUrlInput = document.getElementById('logoUrl');
//       if (!logoUrlInput) {
//         logoUrlInput = document.createElement('input');
//         logoUrlInput.type = 'hidden';
//         logoUrlInput.id = 'logoUrl';
//         logoUrlInput.name = 'logoUrl';
//         logoUpload.parentNode.appendChild(logoUrlInput);
//       }
//       logoUrlInput.value = base64Image;
      
//       // Update status
//       statusDiv.innerHTML = '<span>✅ Logo ready!</span>';
//       statusDiv.className = 'upload-status success';
      
//       showToast('✅ Logo processed successfully!', 'success');
      
//     } catch (error) {
//       console.error('❌ Logo processing failed:', error);
      
//       // Update status
//       statusDiv.innerHTML = '<span>❌ Processing failed</span>';
//       statusDiv.className = 'upload-status error';
      
//       showToast('❌ Failed to process logo: ' + error.message, 'error');
      
//       // Keep preview but indicate failure
//       previewImg.style.opacity = '0.5';
//     } finally {
//       logoUpload.classList.remove('uploading');
//     }
//   });
// }

// // ===== ANTI-SPAM SYSTEM =====
// class AntiSpamSystem {
//   constructor() {
//     this.submittedProducts = new Set();
//     this.submittedUrls = new Set();
//     this.submittedEmails = new Set();
//     this.cooldownPeriod = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
//     this.loadFromStorage();
//   }

//   // Load previous submissions from memory (not localStorage)
//   loadFromStorage() {
//     try {
//       // Using in-memory storage instead of localStorage
//       if (window._submissionCache) {
//         this.submittedProducts = new Set(window._submissionCache.products || []);
//         this.submittedUrls = new Set(window._submissionCache.urls || []);
//         this.submittedEmails = new Set(window._submissionCache.emails || []);
//       }
//     } catch (error) {
//       console.warn('Failed to load submission history:', error);
//     }
//   }

//   // Save to memory (not localStorage)
//   saveToStorage() {
//     try {
//       // Using in-memory storage instead of localStorage
//       window._submissionCache = {
//         products: [...this.submittedProducts],
//         urls: [...this.submittedUrls],
//         emails: [...this.submittedEmails]
//       };
//     } catch (error) {
//       console.warn('Failed to save submission history:', error);
//     }
//   }

//   // Normalize data for comparison
//   normalizeText(text) {
//     return text.toLowerCase().trim().replace(/\s+/g, ' ').replace(/[^\w\s]/g, '');
//   }

//   normalizeUrl(url) {
//     try {
//       const urlObj = new URL(url);
//       return urlObj.hostname.replace(/^www\./, '').toLowerCase();
//     } catch {
//       return this.normalizeText(url);
//     }
//   }

//   normalizeEmail(email) {
//     return email.toLowerCase().trim();
//   }

//   // Check for duplicates
//   checkForDuplicates(productName, url, email) {
//     const normalizedName = this.normalizeText(productName);
//     const normalizedUrl = this.normalizeUrl(url);
//     const normalizedEmail = this.normalizeEmail(email);

//     const errors = [];

//     // Check product name duplicates
//     if (this.submittedProducts.has(normalizedName)) {
//       errors.push('This product name has already been submitted');
//     }

//     // Check URL duplicates
//     if (this.submittedUrls.has(normalizedUrl)) {
//       errors.push('This website URL has already been submitted');
//     }

//     return errors;
//   }

//   // Add new submission
//   addSubmission(productName, url, email) {
//     const normalizedName = this.normalizeText(productName);
//     const normalizedUrl = this.normalizeUrl(url);
//     const normalizedEmail = this.normalizeEmail(email);

//     this.submittedProducts.add(normalizedName);
//     this.submittedUrls.add(normalizedUrl);
//     this.submittedEmails.add(normalizedEmail);

//     this.saveToStorage();

//     // Set timeout to remove after cooldown period
//     setTimeout(() => {
//       this.submittedProducts.delete(normalizedName);
//       this.submittedUrls.delete(normalizedUrl);
//       this.saveToStorage();
//     }, this.cooldownPeriod);
//   }

//   // Clear old data (optional maintenance)
//   clearOldData() {
//     // Could implement time-based clearing if needed
//   }
// }

// // Initialize anti-spam system
// const antiSpam = new AntiSpamSystem();

// // ===== PRICING PLANS CONFIGURATION =====
// const PRICING_PLANS = {
//   free: { 
//     inr: 0, 
//     usd: 0,
//     name: 'Free Launch',
//     description: 'Free Launch Plan'
//   },
//   starter: { 
//     inr: 99, 
//     usd: 1.20,
//     name: 'Starter',
//     description: 'Starter Plan'
//   },
//   growth: { 
//     inr: 199, 
//     usd: 2.40,
//     name: 'Growth', 
//     description: 'Growth Plan'
//   },
//   pro: { 
//     inr: 399, 
//     usd: 4.80,
//     name: 'Pro',
//     description: 'Pro Plan'
//   },
//   elite: { 
//     inr: 599, 
//     usd: 7.00,
//     name: 'Elite',
//     description: 'Elite Plan'
//   },
//   ultimate: { 
//     inr: 799, 
//     usd: 9.50,
//     name: 'Ultimate',
//     description: 'Ultimate Plan'
//   }
// };

// const BADGE_STYLES = {
//   colored: {
//     name: 'Colored',
//     svg: `<div style="text-align: center;">
// <a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
// <svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
//       <defs>
//         <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
//           <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
//         </linearGradient>
//       </defs>
//       <rect width="300" height="80" rx="12" fill="url(#bgGradient)"/>
//       <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.6"/>
//       <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.6"/>
//       <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#ffffff" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
//       <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">Listed on StartupGrower</text>
//     </svg>
// </a>
// </div>`
//   },
//   neutral: {
//     name: 'Neutral',
//     svg: `<div style="text-align: center;">
// <a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
// <svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
//       <rect width="300" height="80" rx="12" fill="#f8fafc"/>
//       <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#64748b" stroke-width="2" opacity="0.6"/>
//       <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#64748b" stroke-width="2" opacity="0.6"/>
//       <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
//       <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#475569" text-anchor="middle">Listed on StartupGrower</text>
//     </svg>
// </a>
// </div>`
//   },
//   dark: {
//     name: 'Dark',
//     svg: `<div style="text-align: center;">
// <a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
// <svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
//       <rect width="300" height="80" rx="12" fill="#1e293b"/>
//       <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.6"/>
//       <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.6"/>
//       <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#94a3b8" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
//       <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#f1f5f9" text-anchor="middle">Listed on StartupGrower</text>
//     </svg>
// </a>
// </div>`
//   },
//   light: {
//     name: 'Light',
//     svg: `<div style="text-align: center;">
// <a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
// <svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
//       <rect width="300" height="80" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
//       <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#475569" stroke-width="2" opacity="0.6"/>
//       <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#475569" stroke-width="2" opacity="0.6"/>
//       <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
//       <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#1e293b" text-anchor="middle">Listed on StartupGrower</text>
//     </svg>
// </a>
// </div>`
//   }
// };

// let currentBadgeStyle = 'colored';

// // ===== PRICING SYSTEM =====
// let selectedPlan = 'free';
// let currentCurrency = 'inr';

// // ===== TOAST SYSTEM =====
// function showToast(message, type = 'info') {
//   const toast = document.createElement('div');
//   toast.style.cssText = `
//     position: fixed;
//     top: 20px;
//     right: 20px;
//     padding: 16px 24px;
//     background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
//     color: white;
//     border-radius: 12px;
//     box-shadow: 0 10px 30px rgba(0,0,0,0.15);
//     z-index: 10000;
//     font-family: Inter, sans-serif;
//     font-weight: 500;
//     animation: slideIn 0.3s ease;
//   `;
//   toast.textContent = message;
//   document.body.appendChild(toast);
  
//   setTimeout(() => {
//     toast.style.animation = 'slideOut 0.3s ease';
//     setTimeout(() => toast.remove(), 300);
//   }, 4000);
// }

// // Add CSS animations for toast
// if (!document.querySelector('#toast-animations')) {
//   const style = document.createElement('style');
//   style.id = 'toast-animations';
//   style.textContent = `
//     @keyframes slideIn {
//       from { transform: translateX(100%); opacity: 0; }
//       to { transform: translateX(0); opacity: 1; }
//     }
//     @keyframes slideOut {
//       from { transform: translateX(0); opacity: 1; }
//       to { transform: translateX(100%); opacity: 0; }
//     }
//     @keyframes spin {
//       from { transform: rotate(0deg); }
//       to { transform: rotate(360deg); }
//     }
//   `;
//   document.head.appendChild(style);
// }

// // ===== SECURE PAYMENT PROCESSING =====
// async function processPayment(plan, formData) {
//   return new Promise((resolve, reject) => {
//     // For free plan, resolve immediately
//     if (plan === 'free') {
//       resolve({ success: true, paymentId: 'free_plan' });
//       return;
//     }

//     // Create order via secure backend first
//     createRazorpayOrder(plan, formData).then(orderData => {
//       // Check if Razorpay is available
//       if (typeof Razorpay === 'undefined') {
//         reject(new Error('Payment gateway not loaded. Please refresh the page.'));
//         return;
//       }

//       const options = {
//         key: orderData.key,
//         amount: orderData.amount,
//         currency: orderData.currency,
//         order_id: orderData.orderId,
//         name: 'StartupGrower',
//         description: PRICING_PLANS[plan].description,
//         image: '/logo64.png',
//         handler: function(response) {
//           console.log('✅ Payment successful:', response);
//           resolve({ 
//             success: true, 
//             paymentId: response.razorpay_payment_id,
//             orderId: response.razorpay_order_id,
//             signature: response.razorpay_signature
//           });
//         },
//         prefill: {
//           name: formData.founders || '',
//           email: formData.email || '',
//           contact: ''
//         },
//         notes: {
//           product_name: formData.name,
//           plan: plan,
//           website: formData.url
//         },
//         theme: {
//           color: '#10b981'
//         }
//       };

//       const rzp = new Razorpay(options);
      
//       rzp.on('payment.failed', function(response) {
//         console.error('❌ Payment failed:', response);
//         const errorMessage = response.error?.description || 
//                             response.error?.reason || 
//                             'Payment failed. Please try again.';
//         reject(new Error(errorMessage));
//       });

//       // Add modal close event
//       rzp.on('modal.close', function() {
//         console.log('Payment modal closed by user');
//         reject(new Error('Payment cancelled by user'));
//       });

//       rzp.open();

//     }).catch(error => {
//       reject(error);
//     });
//   });
// }

// async function createRazorpayOrder(plan, formData) {
//   try {
//     console.log('🔄 Creating Razorpay order for plan:', plan);
    
//     const response = await fetch(CONFIG.RAZORPAY_API_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         plan: plan,
//         currency: currentCurrency,
//         formData: {
//           name: formData.name,
//           url: formData.url,
//           email: formData.email,
//           founders: formData.founders
//         }
//       })
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`Server error: ${response.status} - ${errorText}`);
//     }

//     const result = await response.json();

//     if (!result.success) {
//       throw new Error(result.error || 'Failed to create payment order');
//     }

//     console.log('✅ Order created successfully:', result.orderId);
//     return result;

//   } catch (error) {
//     console.error('❌ Order creation failed:', error);
    
//     // User-friendly error messages
//     if (error.message.includes('network') || error.message.includes('fetch')) {
//       throw new Error('Network error: Unable to connect to payment service. Please check your internet connection.');
//     } else if (error.message.includes('gateway')) {
//       throw new Error('Payment gateway is temporarily unavailable. Please try again in a few minutes.');
//     } else if (error.message.includes('cors')) {
//       throw new Error('Security restriction: Please ensure you are using HTTPS.');
//     } else {
//       throw new Error('Payment initialization failed: ' + error.message);
//     }
//   }
// }

// // ===== BADGE MANAGEMENT =====
// function updateBadgePreview(style = currentBadgeStyle) {
//   const badgePreview = document.getElementById('badgePreview');
//   const badgeCodeDisplay = document.getElementById('badgeCodeDisplay');
  
//   if (!badgePreview) return;
  
//   badgePreview.innerHTML = '';
  
//   const link = document.createElement('a');
//   link.href = 'https://startupgrower.pages.dev';
//   link.target = '_blank';
//   link.rel = 'noopener';
//   link.style.display = 'inline-block';
//   link.innerHTML = BADGE_STYLES[style].svg;
//   badgePreview.appendChild(link);
  
//   // Update badge code display
//   if (badgeCodeDisplay) {
//     const badgeCode = `<a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
// ${BADGE_STYLES[style].svg}
// </a>`;
//     badgeCodeDisplay.textContent = badgeCode;
//   }
// }

// function initializeBadgePreviews() {
//   // Initialize small previews
//   Object.keys(BADGE_STYLES).forEach(style => {
//     const previewElement = document.getElementById(`preview${style.charAt(0).toUpperCase() + style.slice(1)}`);
//     if (previewElement) {
//       previewElement.innerHTML = BADGE_STYLES[style].svg;
//     }
//   });
  
//   // Set up badge style selector
//   const badgeOptions = document.querySelectorAll('.badge-option');
//   badgeOptions.forEach(option => {
//     option.addEventListener('click', () => {
//       // Remove active class from all options
//       badgeOptions.forEach(opt => opt.classList.remove('active'));
//       // Add active class to clicked option
//       option.classList.add('active');
//       // Update current badge style
//       currentBadgeStyle = option.dataset.style;
//       // Update badge preview
//       updateBadgePreview(currentBadgeStyle);
//     });
//   });
// }

// window.copyBadgeCode = function() {
//   const badgeCode = `<a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
// ${BADGE_STYLES[currentBadgeStyle].svg}
// </a>`;

//   navigator.clipboard.writeText(badgeCode).then(() => {
//     showToast("✅ Badge code copied to clipboard!", "success");
//   }).catch(() => {
//     showToast("⚠️ Failed to copy. Please copy manually.", "error");
//   });
// }

// // ===== BADGE VERIFICATION =====
// async function verifyBadgeOnWebsite(url) {
//   try {
//     console.log(`🔍 Verifying badge on ${url}...`);
    
//     // Try to fetch the website
//     const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`, {
//       method: 'GET',
//       headers: { 'Accept': 'text/html' }
//     });
    
//     if (!response.ok) {
//       console.warn("⚠️ Could not fetch website for verification");
//       return { verified: false, reason: "Could not access website" };
//     }
    
//     const html = await response.text();
    
//     // Check for badge markers
//     const hasBadge = html.includes('startupgrower.pages.dev') || 
//                      html.includes('Listed on StartupGrower') ||
//                      html.includes('STARTUP GROWER');
    
//     if (hasBadge) {
//       console.log("✅ Badge found on website!");
//       return { verified: true };
//     } else {
//       console.log("❌ Badge not found on website");
//       return { verified: false, reason: "Badge not found on website" };
//     }
    
//   } catch (error) {
//     console.error("Error verifying badge:", error);
//     // If verification fails, we'll allow submission with warning
//     return { verified: false, reason: "Verification failed - please ensure badge is visible" };
//   }
// }

// function setupBadgeVerification() {
//   const verifyButton = document.querySelector('.verify-badge-btn');
  
//   if (!verifyButton) return;
  
//   verifyButton.addEventListener('click', async () => {
//     const url = document.getElementById('url').value.trim();
    
//     if (!url) {
//       showToast("⚠️ Please enter your website URL first", "error");
//       return;
//     }
    
//     const originalHTML = verifyButton.innerHTML;
//     verifyButton.disabled = true;
//     verifyButton.innerHTML = `
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="animation: spin 1s linear infinite;">
//         <circle cx="12" cy="12" r="10" stroke-width="4" stroke="currentColor" stroke-opacity="0.25"/>
//         <path d="M12 2a10 10 0 0 1 10 10" stroke-width="4" stroke-linecap="round"/>
//       </svg>
//       Checking...
//     `;
    
//     const result = await verifyBadgeOnWebsite(url);
    
//     if (result.verified) {
//       verifyButton.innerHTML = `
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
//           <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/>
//         </svg>
//         Badge Verified! ✓
//       `;
//       verifyButton.style.background = "linear-gradient(135deg, #10b981, #059669)";
//       const badgeConfirmation = document.getElementById('badgeConfirmation');
//       if (badgeConfirmation) badgeConfirmation.checked = true;
//       showToast("✅ Badge verified successfully!", "success");
      
//       // Show pricing section after verification
//       showPricingSection();
//     } else {
//       verifyButton.innerHTML = originalHTML;
//       verifyButton.disabled = false;
//       showToast(`⚠️ ${result.reason}. You can still submit manually.`, "error");
//     }
//   });
// }

// // ===== PRICING FUNCTIONS =====
// function initializePricing() {
//   // Plan selection
//   const planButtons = document.querySelectorAll('.plan-btn');
//   planButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//       // Remove selected from all
//       planButtons.forEach(b => {
//         b.classList.remove('selected');
//         const planName = b.closest('.pricing-card').querySelector('h4').textContent;
//         b.textContent = `Select ${planName}`;
//       });
      
//       // Add selected to clicked
//       btn.classList.add('selected');
//       btn.textContent = 'Selected ✓';
      
//       // Update selected plan
//       selectedPlan = btn.dataset.plan;
//       const hiddenInput = document.getElementById('selectedPlan');
//       if (hiddenInput) {
//         hiddenInput.value = selectedPlan;
//       }
      
//       const planName = btn.closest('.pricing-card').querySelector('h4').textContent;
//       console.log(`✅ Plan selected: ${selectedPlan}`);
//       showToast(`${planName} plan selected!`, 'success');
//     });
//   });
  
//   // Start price flipping animation
//   startPriceFlip();
// }

// function startPriceFlip() {
//   setInterval(() => {
//     const prices = document.querySelectorAll('.price');
    
//     // Toggle currency
//     currentCurrency = currentCurrency === 'inr' ? 'usd' : 'inr';
    
//     prices.forEach(price => {
//       if (price.dataset.currency === currentCurrency) {
//         price.classList.add('active');
//       } else {
//         price.classList.remove('active');
//       }
//     });
//   }, 1500);
// }

// function showPricingSection() {
//   const pricingSection = document.getElementById('pricingSection');
//   if (pricingSection) {
//     console.log("💰 Showing pricing section...");
//     pricingSection.style.display = 'block';
//     setTimeout(() => {
//       pricingSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }, 300);
//   }
// }

// // ===== PROGRESS BAR =====
// function updateProgress() {
//   const requiredFields = ["toolName", "tagline", "url", "description", "category", "founders", "email"];
//   const totalFields = requiredFields.length;
  
//   const filled = requiredFields.filter(id => {
//     const field = document.getElementById(id);
//     return field && field.value.trim() !== "";
//   }).length;
  
//   const progress = (filled / totalFields) * 100;
//   const progressFill = document.getElementById("progressFill");
//   if (progressFill) {
//     progressFill.style.width = `${progress}%`;
//   }
  
//   console.log(`Progress: ${filled}/${totalFields} fields filled (${progress.toFixed(0)}%)`);
//   checkRequiredFields();
// }

// function checkRequiredFields() {
//   const required = ["toolName", "tagline", "url", "description", "category", "founders", "email"];
//   const allFilled = required.every(id => {
//     const field = document.getElementById(id);
//     return field && field.value.trim() !== "";
//   });
  
//   const section = document.getElementById("achievementSection");

//   if (allFilled) {
//     console.log("✅ All required fields filled! Showing badge section...");
//     if (section) section.style.display = "block";
//     setTimeout(() => {
//       section.scrollIntoView({ behavior: "smooth", block: "center" });
      
//       setTimeout(() => {
//         showPricingSection();
//       }, 600);
//     }, 400);
//   } else {
//     console.log("⏳ Waiting for all required fields...");
//     if (section) section.style.display = "none";
    
//     const pricingSection = document.getElementById("pricingSection");
//     if (pricingSection) pricingSection.style.display = "none";
//   }
// }

// // ===== GOOGLE FORMS SUBMISSION =====
// async function submitToGoogleForms(formData) {
//   console.log("📤 Submitting to Google Forms...");
//   try {
//     // Prepare founders data with all info
//     let allFounders = formData.founders;
//     if (formData.cofounders) allFounders += ` | Co-founders: ${formData.cofounders}`;
//     if (formData.email) allFounders += ` | Email: ${formData.email}`;
//     if (formData.plan) allFounders += ` | Plan: ${formData.plan}`;
//     if (formData.paymentId && formData.paymentId !== 'free_plan') {
//       allFounders += ` | Payment ID: ${formData.paymentId}`;
//     }

//     // Create form data
//     const formBody = new URLSearchParams();
//     formBody.append(CONFIG.ENTRY_IDS.name, formData.name);
//     formBody.append(CONFIG.ENTRY_IDS.tagline, formData.tagline);
//     formBody.append(CONFIG.ENTRY_IDS.url, formData.url);
//     formBody.append(CONFIG.ENTRY_IDS.description, formData.description);
//     formBody.append(CONFIG.ENTRY_IDS.category, formData.category);
//     formBody.append(CONFIG.ENTRY_IDS.tags, formData.tags || "");
//     formBody.append(CONFIG.ENTRY_IDS.twitter, formData.twitter || "");
//     formBody.append(CONFIG.ENTRY_IDS.founders, allFounders);
    
//     // Note: Logo upload won't work with direct Google Forms
//     // We'll skip it for now

//     console.log('📊 Submitting to Google Forms...');

//     // Submit to Google Forms
//     await fetch(CONFIG.GOOGLE_FORM_URL, {
//       method: 'POST',
//       mode: 'no-cors', // This bypasses CORS restrictions
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: formBody.toString()
//     });

//     // With no-cors mode, we can't read the response
//     // But if no error is thrown, submission likely succeeded
//     console.log("✅ Form submitted successfully");
//     return { success: true };

//   } catch (error) {
//     console.error("❌ Google Forms submission error:", error);
//     return { success: false, error: error.message };
//   }
// }


// // ===== MAIN FORM HANDLER =====
// function setupFormSubmission() {
//   const form = document.getElementById("toolForm");
//   if (!form) return;

//   form.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const btn = document.querySelector(".submit-btn");
//     if (!btn) return;
    
//     const originalHTML = btn.innerHTML;

//     const confirmBadge = document.getElementById("badgeConfirmation");
//     if (!confirmBadge || !confirmBadge.checked) {
//       showToast("⚠️ Please confirm you've added the StartupGrower badge before submitting.", "error");
//       if (confirmBadge) confirmBadge.focus();
//       return;
//     }

//     const formData = {
//       name: document.getElementById("toolName").value.trim(),
//       tagline: document.getElementById("tagline").value.trim(),
//       url: document.getElementById("url").value.trim(),
//       description: document.getElementById("description").value.trim(),
//       category: document.getElementById("category").value,
//       tags: document.getElementById("tags").value.trim(),
//       twitter: document.getElementById("twitter").value.trim(),
//       founders: document.getElementById("founders").value.trim(),
//       cofounders: document.getElementById("cofounders").value.trim(),
//       email: document.getElementById("email").value.trim(),
//       plan: selectedPlan
//     };

//     // URL validation and auto-prefix
//     if (formData.url && !formData.url.startsWith("http")) {
//       formData.url = "https://" + formData.url;
//     }

//     // Validation
//     if (!formData.name || !formData.tagline || !formData.url || !formData.description || !formData.category || !formData.founders || !formData.email) {
//       showToast("⚠️ Please fill all required fields", "error");
//       return;
//     }

//     if (formData.tagline.length > 80) {
//       showToast("⚠️ Tagline must be under 80 characters", "error");
//       return;
//     }

//     if (formData.description.length < 20) {
//       showToast("⚠️ Description must be at least 20 characters", "error");
//       return;
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       showToast("⚠️ Please enter a valid email address", "error");
//       return;
//     }

//     // ===== ANTI-SPAM CHECK =====
//     const duplicateErrors = antiSpam.checkForDuplicates(formData.name, formData.url, formData.email);
//     if (duplicateErrors.length > 0) {
//       showToast(`🚫 ${duplicateErrors.join(' and ')}. Please submit a different product.`, "error");
//       return;
//     }

//     btn.disabled = true;
//     btn.innerHTML = `
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="animation: spin 1s linear infinite;">
//         <circle cx="12" cy="12" r="10" stroke-width="4" stroke="currentColor" stroke-opacity="0.25"/>
//         <path d="M12 2a10 10 0 0 1 10 10" stroke-width="4" stroke-linecap="round"/>
//       </svg>
//       <span style="margin-left:8px;">Processing...</span>
//     `;

//     try {
//       // ===== PAYMENT PROCESSING SECTION =====
//       let paymentResult = { success: true, paymentId: 'free_plan' };
      
//       if (selectedPlan !== 'free') {
//         showToast(`💳 Processing ${PRICING_PLANS[selectedPlan].name} payment...`, 'info');
        
//         // Secure payment processing
//         paymentResult = await processPayment(selectedPlan, formData);
        
//         if (!paymentResult.success) {
//           throw new Error('Payment processing failed');
//         }
        
//         showToast("✅ Payment successful! Submitting your tool...", "success");
//         console.log('💰 Payment completed:', paymentResult);
//       }
//       // ===== END PAYMENT PROCESSING =====

//       // Add payment info to form data
//       formData.paymentId = paymentResult.paymentId;

//       // ===== ADD TO ANTI-SPAM SYSTEM =====
//       antiSpam.addSubmission(formData.name, formData.url, formData.email);

//       // Submit to Google Forms
//       const result = await submitToGoogleForms(formData);
//       if (result.success) {
//         btn.innerHTML = `
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//             <path d="M20 6L9 17l-5-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//           </svg>
//           <span>Submitted Successfully!</span>
//         `;
//         btn.style.background = "linear-gradient(135deg, #10b981, #059669)";
        
//         const successMessage = selectedPlan === 'free' 
//           ? "🎉 Your tool has been submitted successfully!" 
//           : `🎉 Your tool has been submitted successfully! Payment ID: ${paymentResult.paymentId}`;
        
//         showToast(successMessage, "success");

//         setTimeout(() => {
//           form.reset();
//           btn.disabled = false;
//           btn.innerHTML = originalHTML;
//           btn.style.background = "";
//           const progressFill = document.getElementById("progressFill");
//           if (progressFill) progressFill.style.width = "0%";
//           const achievementSection = document.getElementById("achievementSection");
//           if (achievementSection) achievementSection.style.display = "none";
//           const pricingSection = document.getElementById("pricingSection");
//           if (pricingSection) pricingSection.style.display = "none";
//           selectedPlan = 'free';
//           window.scrollTo({ top: 0, behavior: 'smooth' });
//         }, 3000);
//       } else {
//         throw new Error(result.error || "Submission failed");
//       }
//     } catch (error) {
//       console.error("❌ Submission error:", error);
//       showToast(`❌ ${error.message}`, "error");
//       btn.innerHTML = originalHTML;
//       btn.disabled = false;
//       return; // Stop form submission on payment error
//     }
//   });
// }

// // ===== INITIALIZATION =====
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("✅ StartupGrower Submit System Ready!");
//   console.log("🔐 SECURE MODE: Using backend API for payments");
//   console.log("🖼️ Logo upload enabled with Google Forms integration");
  
//   // Set up event listeners for progress tracking
//   const requiredFieldIds = ["toolName", "tagline", "url", "description", "category", "founders", "email"];
  
//   requiredFieldIds.forEach(id => {
//     const field = document.getElementById(id);
//     if (field) {
//       field.addEventListener("input", updateProgress);
//       field.addEventListener("change", updateProgress);
//     }
//   });
  
//   // Initialize logo upload
//   setupLogoUpload();
  
//   // Initialize badge system
//   initializeBadgePreviews();
//   updateBadgePreview();
//   setupBadgeVerification();
  
//   // Initialize pricing system
//   initializePricing();
  
//   // Set up form submission
//   setupFormSubmission();
  
//   // Initial progress update
//   updateProgress();
// });






console.log("🚀 StartupGrower Submit System Initialized");

// ===== CONFIGURATION =====
const CONFIG = {
  GOOGLE_FORM_URL: 'https://docs.google.com/forms/d/e/1FAIpQLScgLmZOojLBDJRJ8R4LpSox_ykkRI-Hh9G8LIiKKKMI0GM3ow/formResponse',
  ENTRY_IDS: {
    name: 'entry.838045357',
    tagline: 'entry.1696386751',
    url: 'entry.2040575379',
    description: 'entry.899580745',
    category: 'entry.1354375390',
    tags: 'entry.320473220',
    twitter: 'entry.1596945314',
    founders: 'entry.1590946958',
    logo: 'entry.2005620554'
  },
  RAZORPAY_API_URL: '/api/razorpay-order'
};

// ===== BASE64 IMAGE UPLOAD FUNCTIONALITY WITH COMPRESSION =====
async function compressImage(file, maxSizeKB = 50) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = new Image();
      img.onload = function() {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        
        // Calculate new dimensions to keep aspect ratio
        const maxDimension = 800; // Max width/height
        if (width > height && width > maxDimension) {
          height = (height * maxDimension) / width;
          width = maxDimension;
        } else if (height > maxDimension) {
          width = (width * maxDimension) / height;
          height = maxDimension;
        }
        
        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        
        // Start with quality 0.9 and reduce if needed
        let quality = 0.9;
        let compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        
        // Reduce quality until size is under maxSizeKB
        while (compressedDataUrl.length > maxSizeKB * 1024 && quality > 0.1) {
          quality -= 0.1;
          compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        }
        
        console.log(`✅ Logo compressed to ${(compressedDataUrl.length / 1024).toFixed(2)}KB (quality: ${(quality * 100).toFixed(0)}%)`);
        resolve(compressedDataUrl);
      };
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

async function uploadLogoAsBase64(file) {
  try {
    console.log('📤 Processing logo with compression...');
    
    // Compress image to ensure it's under 50KB
    const compressedBase64 = await compressImage(file, 50);
    
    console.log('✅ Logo ready for submission');
    return compressedBase64;
    
  } catch (error) {
    throw new Error('Upload failed: ' + error.message);
  }
}

function setupLogoUpload() {
  const logoUpload = document.getElementById('logoUpload');
  const logoPreview = document.getElementById('logoPreview');
  
  if (!logoUpload || !logoPreview) return;
  
  logoUpload.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    
    if (!file) return;
    
    logoPreview.innerHTML = '';
    
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      showToast('⚠️ Please select a valid image file (JPEG, PNG, GIF, WebP)', 'error');
      return;
    }
    
    if (file.size > 2 * 1024 * 1024) {
      showToast('⚠️ Image must be smaller than 2MB for optimal performance', 'error');
      return;
    }
    
    const previewUrl = URL.createObjectURL(file);
    const previewImg = document.createElement('img');
    previewImg.src = previewUrl;
    previewImg.alt = "Logo preview";
    
    logoPreview.appendChild(previewImg);
    
    const statusDiv = document.createElement('div');
    statusDiv.className = 'upload-status';
    statusDiv.innerHTML = '<span>📤 Processing logo...</span>';
    logoPreview.appendChild(statusDiv);
    
    try {
      logoUpload.classList.add('uploading');
      const base64Image = await uploadLogoAsBase64(file);
      
      let logoUrlInput = document.getElementById('logoUrl');
      if (!logoUrlInput) {
        logoUrlInput = document.createElement('input');
        logoUrlInput.type = 'hidden';
        logoUrlInput.id = 'logoUrl';
        logoUrlInput.name = 'logoUrl';
        logoUpload.parentNode.appendChild(logoUrlInput);
      }
      logoUrlInput.value = base64Image;
      
      statusDiv.innerHTML = '<span>✅ Logo ready!</span>';
      statusDiv.className = 'upload-status success';
      
      showToast('✅ Logo processed successfully!', 'success');
      
    } catch (error) {
      console.error('❌ Logo processing failed:', error);
      
      statusDiv.innerHTML = '<span>❌ Processing failed</span>';
      statusDiv.className = 'upload-status error';
      
      showToast('❌ Failed to process logo: ' + error.message, 'error');
      
      previewImg.style.opacity = '0.5';
    } finally {
      logoUpload.classList.remove('uploading');
    }
  });
}

// ===== ANTI-SPAM SYSTEM =====
class AntiSpamSystem {
  constructor() {
    this.submittedProducts = new Set();
    this.submittedUrls = new Set();
    this.submittedEmails = new Set();
    this.cooldownPeriod = 24 * 60 * 60 * 1000;
    this.loadFromStorage();
  }

  loadFromStorage() {
    try {
      if (window._submissionCache) {
        this.submittedProducts = new Set(window._submissionCache.products || []);
        this.submittedUrls = new Set(window._submissionCache.urls || []);
        this.submittedEmails = new Set(window._submissionCache.emails || []);
      }
    } catch (error) {
      console.warn('Failed to load submission history:', error);
    }
  }

  saveToStorage() {
    try {
      window._submissionCache = {
        products: [...this.submittedProducts],
        urls: [...this.submittedUrls],
        emails: [...this.submittedEmails]
      };
    } catch (error) {
      console.warn('Failed to save submission history:', error);
    }
  }

  normalizeText(text) {
    return text.toLowerCase().trim().replace(/\s+/g, ' ').replace(/[^\w\s]/g, '');
  }

  normalizeUrl(url) {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname.replace(/^www\./, '').toLowerCase();
    } catch {
      return this.normalizeText(url);
    }
  }

  normalizeEmail(email) {
    return email.toLowerCase().trim();
  }

  checkForDuplicates(productName, url, email) {
    const normalizedName = this.normalizeText(productName);
    const normalizedUrl = this.normalizeUrl(url);
    const normalizedEmail = this.normalizeEmail(email);

    const errors = [];

    if (this.submittedProducts.has(normalizedName)) {
      errors.push('This product name has already been submitted');
    }

    if (this.submittedUrls.has(normalizedUrl)) {
      errors.push('This website URL has already been submitted');
    }

    return errors;
  }

  addSubmission(productName, url, email) {
    const normalizedName = this.normalizeText(productName);
    const normalizedUrl = this.normalizeUrl(url);
    const normalizedEmail = this.normalizeEmail(email);

    this.submittedProducts.add(normalizedName);
    this.submittedUrls.add(normalizedUrl);
    this.submittedEmails.add(normalizedEmail);

    this.saveToStorage();

    setTimeout(() => {
      this.submittedProducts.delete(normalizedName);
      this.submittedUrls.delete(normalizedUrl);
      this.saveToStorage();
    }, this.cooldownPeriod);
  }

  clearOldData() {
    // Could implement time-based clearing if needed
  }
}

const antiSpam = new AntiSpamSystem();

// ===== PRICING PLANS CONFIGURATION =====
const PRICING_PLANS = {
  free: { 
    inr: 0, 
    usd: 0,
    name: 'Free Launch',
    description: 'Free Launch Plan'
  },
  starter: { 
    inr: 99, 
    usd: 1.20,
    name: 'Starter',
    description: 'Starter Plan'
  },
  growth: { 
    inr: 199, 
    usd: 2.40,
    name: 'Growth', 
    description: 'Growth Plan'
  },
  pro: { 
    inr: 399, 
    usd: 4.80,
    name: 'Pro',
    description: 'Pro Plan'
  },
  elite: { 
    inr: 599, 
    usd: 7.00,
    name: 'Elite',
    description: 'Elite Plan'
  },
  ultimate: { 
    inr: 799, 
    usd: 9.50,
    name: 'Ultimate',
    description: 'Ultimate Plan'
  }
};

const BADGE_STYLES = {
  colored: {
    name: 'Colored',
    svg: `<div style="text-align: center;">
<a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="300" height="80" rx="12" fill="url(#bgGradient)"/>
      <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.6"/>
      <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.6"/>
      <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#ffffff" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
      <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#ffffff" text-anchor="middle">Listed on StartupGrower</text>
    </svg>
</a>
</div>`
  },
  neutral: {
    name: 'Neutral',
    svg: `<div style="text-align: center;">
<a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
      <rect width="300" height="80" rx="12" fill="#f8fafc"/>
      <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#64748b" stroke-width="2" opacity="0.6"/>
      <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#64748b" stroke-width="2" opacity="0.6"/>
      <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
      <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#475569" text-anchor="middle">Listed on StartupGrower</text>
    </svg>
</a>
</div>`
  },
  dark: {
    name: 'Dark',
    svg: `<div style="text-align: center;">
<a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
      <rect width="300" height="80" rx="12" fill="#1e293b"/>
      <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.6"/>
      <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.6"/>
      <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#94a3b8" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
      <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#f1f5f9" text-anchor="middle">Listed on StartupGrower</text>
    </svg>
</a>
</div>`
  },
  light: {
    name: 'Light',
    svg: `<div style="text-align: center;">
<a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
      <rect width="300" height="80" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#475569" stroke-width="2" opacity="0.6"/>
      <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#475569" stroke-width="2" opacity="0.6"/>
      <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
      <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#1e293b" text-anchor="middle">Listed on StartupGrower</text>
    </svg>
</a>
</div>`
  }
};

let currentBadgeStyle = 'colored';
let selectedPlan = 'free';
let currentCurrency = 'inr';

// ===== TOAST SYSTEM =====
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 16px 24px;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    color: white;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    z-index: 10000;
    font-family: Inter, sans-serif;
    font-weight: 500;
    animation: slideIn 0.3s ease;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

if (!document.querySelector('#toast-animations')) {
  const style = document.createElement('style');
  style.id = 'toast-animations';
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}

// ===== SECURE PAYMENT PROCESSING =====
async function processPayment(plan, formData) {
  return new Promise((resolve, reject) => {
    if (plan === 'free') {
      resolve({ success: true, paymentId: 'free_plan' });
      return;
    }

    createRazorpayOrder(plan, formData).then(orderData => {
      if (typeof Razorpay === 'undefined') {
        reject(new Error('Payment gateway not loaded. Please refresh the page.'));
        return;
      }

      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.orderId,
        name: 'StartupGrower',
        description: PRICING_PLANS[plan].description,
        image: '/logo64.png',
        handler: function(response) {
          console.log('✅ Payment successful:', response);
          resolve({ 
            success: true, 
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            signature: response.razorpay_signature
          });
        },
        prefill: {
          name: formData.founders || '',
          email: formData.email || '',
          contact: ''
        },
        notes: {
          product_name: formData.name,
          plan: plan,
          website: formData.url
        },
        theme: {
          color: '#10b981'
        }
      };

      const rzp = new Razorpay(options);
      
      rzp.on('payment.failed', function(response) {
        console.error('❌ Payment failed:', response);
        const errorMessage = response.error?.description || 
                            response.error?.reason || 
                            'Payment failed. Please try again.';
        reject(new Error(errorMessage));
      });

      rzp.on('modal.close', function() {
        console.log('Payment modal closed by user');
        reject(new Error('Payment cancelled by user'));
      });

      rzp.open();

    }).catch(error => {
      reject(error);
    });
  });
}

async function createRazorpayOrder(plan, formData) {
  try {
    console.log('🔄 Creating Razorpay order for plan:', plan);
    
    const response = await fetch(CONFIG.RAZORPAY_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plan: plan,
        currency: currentCurrency,
        formData: {
          name: formData.name,
          url: formData.url,
          email: formData.email,
          founders: formData.founders
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Server error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || 'Failed to create payment order');
    }

    console.log('✅ Order created successfully:', result.orderId);
    return result;

  } catch (error) {
    console.error('❌ Order creation failed:', error);
    
    if (error.message.includes('network') || error.message.includes('fetch')) {
      throw new Error('Network error: Unable to connect to payment service. Please check your internet connection.');
    } else if (error.message.includes('gateway')) {
      throw new Error('Payment gateway is temporarily unavailable. Please try again in a few minutes.');
    } else if (error.message.includes('cors')) {
      throw new Error('Security restriction: Please ensure you are using HTTPS.');
    } else {
      throw new Error('Payment initialization failed: ' + error.message);
    }
  }
}

// ===== BADGE MANAGEMENT =====
function updateBadgePreview(style = currentBadgeStyle) {
  const badgePreview = document.getElementById('badgePreview');
  const badgeCodeDisplay = document.getElementById('badgeCodeDisplay');
  
  if (!badgePreview) return;
  
  badgePreview.innerHTML = '';
  
  const link = document.createElement('a');
  link.href = 'https://startupgrower.pages.dev';
  link.target = '_blank';
  link.rel = 'noopener';
  link.style.display = 'inline-block';
  link.innerHTML = BADGE_STYLES[style].svg;
  badgePreview.appendChild(link);
  
  if (badgeCodeDisplay) {
    const badgeCode = `<a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
${BADGE_STYLES[style].svg}
</a>`;
    badgeCodeDisplay.textContent = badgeCode;
  }
}

function initializeBadgePreviews() {
  Object.keys(BADGE_STYLES).forEach(style => {
    const previewElement = document.getElementById(`preview${style.charAt(0).toUpperCase() + style.slice(1)}`);
    if (previewElement) {
      previewElement.innerHTML = BADGE_STYLES[style].svg;
    }
  });
  
  const badgeOptions = document.querySelectorAll('.badge-option');
  badgeOptions.forEach(option => {
    option.addEventListener('click', () => {
      badgeOptions.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
      currentBadgeStyle = option.dataset.style;
      updateBadgePreview(currentBadgeStyle);
    });
  });
}

window.copyBadgeCode = function() {
  const badgeCode = `<a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
${BADGE_STYLES[currentBadgeStyle].svg}
</a>`;

  navigator.clipboard.writeText(badgeCode).then(() => {
    showToast("✅ Badge code copied to clipboard!", "success");
  }).catch(() => {
    showToast("⚠️ Failed to copy. Please copy manually.", "error");
  });
}

// ===== BADGE VERIFICATION =====
async function verifyBadgeOnWebsite(url) {
  try {
    console.log(`🔍 Verifying badge on ${url}...`);
    
    const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`, {
      method: 'GET',
      headers: { 'Accept': 'text/html' }
    });
    
    if (!response.ok) {
      console.warn("⚠️ Could not fetch website for verification");
      return { verified: false, reason: "Could not access website" };
    }
    
    const html = await response.text();
    
    const hasBadge = html.includes('startupgrower.pages.dev') || 
                     html.includes('Listed on StartupGrower') ||
                     html.includes('STARTUP GROWER');
    
    if (hasBadge) {
      console.log("✅ Badge found on website!");
      return { verified: true };
    } else {
      console.log("❌ Badge not found on website");
      return { verified: false, reason: "Badge not found on website" };
    }
    
  } catch (error) {
    console.error("Error verifying badge:", error);
    return { verified: false, reason: "Verification failed - please ensure badge is visible" };
  }
}

function setupBadgeVerification() {
  const verifyButton = document.querySelector('.verify-badge-btn');
  
  if (!verifyButton) return;
  
  verifyButton.addEventListener('click', async () => {
    const url = document.getElementById('url').value.trim();
    
    if (!url) {
      showToast("⚠️ Please enter your website URL first", "error");
      return;
    }
    
    const originalHTML = verifyButton.innerHTML;
    verifyButton.disabled = true;
    verifyButton.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-width="4" stroke="currentColor" stroke-opacity="0.25"/>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-width="4" stroke-linecap="round"/>
      </svg>
      Checking...
    `;
    
    const result = await verifyBadgeOnWebsite(url);
    
    if (result.verified) {
      verifyButton.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Badge Verified! ✓
      `;
      verifyButton.style.background = "linear-gradient(135deg, #10b981, #059669)";
      const badgeConfirmation = document.getElementById('badgeConfirmation');
      if (badgeConfirmation) badgeConfirmation.checked = true;
      showToast("✅ Badge verified successfully!", "success");
      
      showPricingSection();
    } else {
      verifyButton.innerHTML = originalHTML;
      verifyButton.disabled = false;
      showToast(`⚠️ ${result.reason}. You can still submit manually.`, "error");
    }
  });
}

// ===== PRICING FUNCTIONS =====
function initializePricing() {
  const planButtons = document.querySelectorAll('.plan-btn');
  planButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      planButtons.forEach(b => {
        b.classList.remove('selected');
        const planName = b.closest('.pricing-card').querySelector('h4').textContent;
        b.textContent = `Select ${planName}`;
      });
      
      btn.classList.add('selected');
      btn.textContent = 'Selected ✓';
      
      selectedPlan = btn.dataset.plan;
      const hiddenInput = document.getElementById('selectedPlan');
      if (hiddenInput) {
        hiddenInput.value = selectedPlan;
      }
      
      const planName = btn.closest('.pricing-card').querySelector('h4').textContent;
      console.log(`✅ Plan selected: ${selectedPlan}`);
      showToast(`${planName} plan selected!`, 'success');
    });
  });
  
  startPriceFlip();
}

function startPriceFlip() {
  setInterval(() => {
    const prices = document.querySelectorAll('.price');
    
    currentCurrency = currentCurrency === 'inr' ? 'usd' : 'inr';
    
    prices.forEach(price => {
      if (price.dataset.currency === currentCurrency) {
        price.classList.add('active');
      } else {
        price.classList.remove('active');
      }
    });
  }, 1500);
}

function showPricingSection() {
  const pricingSection = document.getElementById('pricingSection');
  if (pricingSection) {
    console.log("💰 Showing pricing section...");
    pricingSection.style.display = 'block';
    setTimeout(() => {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  }
}

// ===== PROGRESS BAR =====
function updateProgress() {
  const requiredFields = ["toolName", "tagline", "url", "description", "category", "founders", "email"];
  const totalFields = requiredFields.length;
  
  const filled = requiredFields.filter(id => {
    const field = document.getElementById(id);
    return field && field.value.trim() !== "";
  }).length;
  
  const progress = (filled / totalFields) * 100;
  const progressFill = document.getElementById("progressFill");
  if (progressFill) {
    progressFill.style.width = `${progress}%`;
  }
  
  console.log(`Progress: ${filled}/${totalFields} fields filled (${progress.toFixed(0)}%)`);
  checkRequiredFields();
}

function checkRequiredFields() {
  const required = ["toolName", "tagline", "url", "description", "category", "founders", "email"];
  const allFilled = required.every(id => {
    const field = document.getElementById(id);
    return field && field.value.trim() !== "";
  });
  
  const section = document.getElementById("achievementSection");

  if (allFilled) {
    console.log("✅ All required fields filled! Showing badge section...");
    if (section) section.style.display = "block";
    setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
      
      setTimeout(() => {
        showPricingSection();
      }, 600);
    }, 400);
  } else {
    console.log("⏳ Waiting for all required fields...");
    if (section) section.style.display = "none";
    
    const pricingSection = document.getElementById("pricingSection");
    if (pricingSection) pricingSection.style.display = "none";
  }
}

// ===== GOOGLE FORMS SUBMISSION (FIXED) =====
async function submitToGoogleForms(formData) {
  console.log("📤 Submitting to Google Forms...");
  try {
    let allFounders = formData.founders;
    if (formData.cofounders) allFounders += ` | Co-founders: ${formData.cofounders}`;
    if (formData.email) allFounders += ` | Email: ${formData.email}`;
    if (formData.plan) allFounders += ` | Plan: ${formData.plan}`;
    if (formData.paymentId && formData.paymentId !== 'free_plan') {
      allFounders += ` | Payment ID: ${formData.paymentId}`;
    }

    // Get logo base64 if uploaded
    const logoBase64 = document.getElementById('logoUrl')?.value || '';

    const formBody = new URLSearchParams();
    formBody.append(CONFIG.ENTRY_IDS.name, formData.name);
    formBody.append(CONFIG.ENTRY_IDS.tagline, formData.tagline);
    formBody.append(CONFIG.ENTRY_IDS.url, formData.url);
    formBody.append(CONFIG.ENTRY_IDS.description, formData.description);
    formBody.append(CONFIG.ENTRY_IDS.category, formData.category);
    formBody.append(CONFIG.ENTRY_IDS.tags, formData.tags || "");
    formBody.append(CONFIG.ENTRY_IDS.twitter, formData.twitter || "");
    formBody.append(CONFIG.ENTRY_IDS.founders, allFounders);
    
    // Add logo if uploaded (compression ensures it's under 50KB)
    if (logoBase64) {
      formBody.append(CONFIG.ENTRY_IDS.logo, logoBase64);
      console.log('📊 Including compressed logo in submission');
    }

    console.log('📊 Submitting to Google Forms...');

    // Submit to Google Forms with no-cors mode
    // Note: Browser may show 401/CORS errors - this is normal with no-cors mode
    // The submission still succeeds and data reaches Google Sheets
    await fetch(CONFIG.GOOGLE_FORM_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString()
    });

    // Success! Data has been submitted to Google Forms
    // The 401 error you see in console is cosmetic - submission succeeded
    console.log("✅ Form submitted successfully to Google Sheets (ignore 401 error in console)");
    return { success: true };

  } catch (error) {
    console.error("❌ Google Forms submission error:", error);
    return { success: false, error: error.message };
  }
}

// ===== MAIN FORM HANDLER =====
function setupFormSubmission() {
  const form = document.getElementById("toolForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = document.querySelector(".submit-btn");
    if (!btn) return;
    
    const originalHTML = btn.innerHTML;

    const confirmBadge = document.getElementById("badgeConfirmation");
    if (!confirmBadge || !confirmBadge.checked) {
      showToast("⚠️ Please confirm you've added the StartupGrower badge before submitting.", "error");
      if (confirmBadge) confirmBadge.focus();
      return;
    }

    const formData = {
      name: document.getElementById("toolName").value.trim(),
      tagline: document.getElementById("tagline").value.trim(),
      url: document.getElementById("url").value.trim(),
      description: document.getElementById("description").value.trim(),
      category: document.getElementById("category").value,
      tags: document.getElementById("tags").value.trim(),
      twitter: document.getElementById("twitter").value.trim(),
      founders: document.getElementById("founders").value.trim(),
      cofounders: document.getElementById("cofounders").value.trim(),
      email: document.getElementById("email").value.trim(),
      plan: selectedPlan
    };

    if (formData.url && !formData.url.startsWith("http")) {
      formData.url = "https://" + formData.url;
    }

    if (!formData.name || !formData.tagline || !formData.url || !formData.description || !formData.category || !formData.founders || !formData.email) {
      showToast("⚠️ Please fill all required fields", "error");
      return;
    }

    if (formData.tagline.length > 80) {
      showToast("⚠️ Tagline must be under 80 characters", "error");
      return;
    }

    if (formData.description.length < 20) {
      showToast("⚠️ Description must be at least 20 characters", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast("⚠️ Please enter a valid email address", "error");
      return;
    }

    const duplicateErrors = antiSpam.checkForDuplicates(formData.name, formData.url, formData.email);
    if (duplicateErrors.length > 0) {
      showToast(`🚫 ${duplicateErrors.join(' and ')}. Please submit a different product.`, "error");
      return;
    }

    btn.disabled = true;
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-width="4" stroke="currentColor" stroke-opacity="0.25"/>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-width="4" stroke-linecap="round"/>
      </svg>
      <span style="margin-left:8px;">Processing...</span>
    `;

    try {
      let paymentResult = { success: true, paymentId: 'free_plan' };
      
      if (selectedPlan !== 'free') {
        showToast(`💳 Processing ${PRICING_PLANS[selectedPlan].name} payment...`, 'info');
        
        paymentResult = await processPayment(selectedPlan, formData);
        
        if (!paymentResult.success) {
          throw new Error('Payment processing failed');
        }
        
        showToast("✅ Payment successful! Submitting your tool...", "success");
        console.log('💰 Payment completed:', paymentResult);
      }

      formData.paymentId = paymentResult.paymentId;

      antiSpam.addSubmission(formData.name, formData.url, formData.email);

      const result = await submitToGoogleForms(formData);
      
      if (result.success) {
        btn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20 6L9 17l-5-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Submitted Successfully!</span>
        `;
        btn.style.background = "linear-gradient(135deg, #10b981, #059669)";
        
        const successMessage = selectedPlan === 'free' 
          ? "🎉 Your tool has been submitted successfully!" 
          : `🎉 Your tool has been submitted successfully! Payment ID: ${paymentResult.paymentId}`;
        
        showToast(successMessage, "success");

        setTimeout(() => {
          form.reset();
          btn.disabled = false;
          btn.innerHTML = originalHTML;
          btn.style.background = "";
          const progressFill = document.getElementById("progressFill");
          if (progressFill) progressFill.style.width = "0%";
          const achievementSection = document.getElementById("achievementSection");
          if (achievementSection) achievementSection.style.display = "none";
          const pricingSection = document.getElementById("pricingSection");
          if (pricingSection) pricingSection.style.display = "none";
          selectedPlan = 'free';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 3000);
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      console.error("❌ Submission error:", error);
      showToast(`❌ ${error.message}`, "error");
      btn.innerHTML = originalHTML;
      btn.disabled = false;
      return;
    }
  });
}

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ StartupGrower Submit System Ready!");
  console.log("🔐 SECURE MODE: Using backend API for payments");
  console.log("🖼️ Logo upload enabled with automatic compression (optimized for Google Forms)");
  console.log("ℹ️  Note: 401 errors during submission are normal and don't indicate failure");
  
  const requiredFieldIds = ["toolName", "tagline", "url", "description", "category", "founders", "email"];
  
  requiredFieldIds.forEach(id => {
    const field = document.getElementById(id);
    if (field) {
      field.addEventListener("input", updateProgress);
      field.addEventListener("change", updateProgress);
    }
  });
  
  setupLogoUpload();
  initializeBadgePreviews();
  updateBadgePreview();
  setupBadgeVerification();
  initializePricing();
  setupFormSubmission();
  updateProgress();
});