

// console.log("🚀 StartupGrower Submit System Initialized");

// // ===== CONFIGURATION =====
// const CONFIG = {
//   APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbxiimfSSgfUKfA53Dmqe4FfpoWRcfqME1jyd27Kpg1yUtwSiu5fwrseI8O0Ak060Naj/exec',
//   RAZORPAY_API_URL: '/api/razorpay-order'
// };

// // ===== ANTI-SPAM SYSTEM =====
// class AntiSpamSystem {
//   constructor() {
//     this.submittedProducts = new Set();
//     this.submittedUrls = new Set();
//     this.submittedEmails = new Set();
//     this.cooldownPeriod = 24 * 60 * 60 * 1000;
//     this.loadFromStorage();
//   }

//   loadFromStorage() {
//     try {
//       if (window._submissionCache) {
//         this.submittedProducts = new Set(window._submissionCache.products || []);
//         this.submittedUrls = new Set(window._submissionCache.urls || []);
//         this.submittedEmails = new Set(window._submissionCache.emails || []);
//       }
//     } catch (error) {
//       console.warn('Failed to load submission history:', error);
//     }
//   }

//   saveToStorage() {
//     try {
//       window._submissionCache = {
//         products: [...this.submittedProducts],
//         urls: [...this.submittedUrls],
//         emails: [...this.submittedEmails]
//       };
//     } catch (error) {
//       console.warn('Failed to save submission history:', error);
//     }
//   }

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

//   checkForDuplicates(productName, url, email) {
//     const normalizedName = this.normalizeText(productName);
//     const normalizedUrl = this.normalizeUrl(url);
//     const errors = [];

//     if (this.submittedProducts.has(normalizedName)) {
//       errors.push('This product name has already been submitted');
//     }

//     if (this.submittedUrls.has(normalizedUrl)) {
//       errors.push('This website URL has already been submitted');
//     }

//     return errors;
//   }

//   addSubmission(productName, url, email) {
//     const normalizedName = this.normalizeText(productName);
//     const normalizedUrl = this.normalizeUrl(url);
//     const normalizedEmail = this.normalizeEmail(email);

//     this.submittedProducts.add(normalizedName);
//     this.submittedUrls.add(normalizedUrl);
//     this.submittedEmails.add(normalizedEmail);

//     this.saveToStorage();

//     setTimeout(() => {
//       this.submittedProducts.delete(normalizedName);
//       this.submittedUrls.delete(normalizedUrl);
//       this.saveToStorage();
//     }, this.cooldownPeriod);
//   }
// }

// const antiSpam = new AntiSpamSystem();

// // ===== PRICING PLANS =====
// const PRICING_PLANS = {
//   free: { inr: 0, usd: 0, name: 'Free Launch', description: 'Free Launch Plan' },
//   starter: { inr: 99, usd: 1.20, name: 'Starter', description: 'Starter Plan' },
//   growth: { inr: 199, usd: 2.40, name: 'Growth', description: 'Growth Plan' },
//   pro: { inr: 399, usd: 4.80, name: 'Pro', description: 'Pro Plan' },
//   elite: { inr: 599, usd: 7.00, name: 'Elite', description: 'Elite Plan' },
//   ultimate: { inr: 799, usd: 9.50, name: 'Ultimate', description: 'Ultimate Plan' }
// };

// const BADGE_STYLES = {
//   colored: {
//     name: 'Colored',
//     svg: `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
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
//     </svg>`
//   },
//   neutral: {
//     name: 'Neutral',
//     svg: `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
//       <rect width="300" height="80" rx="12" fill="#f8fafc"/>
//       <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#64748b" stroke-width="2" opacity="0.6"/>
//       <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#64748b" stroke-width="2" opacity="0.6"/>
//       <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
//       <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#475569" text-anchor="middle">Listed on StartupGrower</text>
//     </svg>`
//   },
//   dark: {
//     name: 'Dark',
//     svg: `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
//       <rect width="300" height="80" rx="12" fill="#1e293b"/>
//       <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.6"/>
//       <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.6"/>
//       <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#94a3b8" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
//       <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#f1f5f9" text-anchor="middle">Listed on StartupGrower</text>
//     </svg>`
//   },
//   light: {
//     name: 'Light',
//     svg: `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
//       <rect width="300" height="80" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
//       <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#475569" stroke-width="2" opacity="0.6"/>
//       <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#475569" stroke-width="2" opacity="0.6"/>
//       <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
//       <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#1e293b" text-anchor="middle">Listed on StartupGrower</text>
//     </svg>`
//   }
// };

// let currentBadgeStyle = 'colored';
// let selectedPlan = 'free';
// let currentCurrency = 'inr';
// let uploadedLogoUrl = '';

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

// // ===== LOGO UPLOAD HANDLER =====
// function setupLogoUpload() {
//   const logoInput = document.getElementById('logoUpload');
//   const logoPreview = document.getElementById('logoPreview');
  
//   if (!logoInput || !logoPreview) return;
  
//   logoInput.addEventListener('change', async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
    
//     // Validate file
//     if (!file.type.startsWith('image/')) {
//       showToast('Please upload an image file', 'error');
//       return;
//     }
    
//     if (file.size > 5 * 1024 * 1024) {
//       showToast('Image size must be less than 5MB', 'error');
//       return;
//     }
    
//     // Show preview
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       uploadedLogoUrl = event.target.result;
//       logoPreview.innerHTML = `
//         <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: #f1f5f9; border-radius: 8px;">
//           <img src="${uploadedLogoUrl}" alt="Logo preview" style="width: 64px; height: 64px; object-fit: cover; border-radius: 8px;">
//           <div>
//             <p style="margin: 0; font-weight: 600;">${file.name}</p>
//             <p style="margin: 0; font-size: 12px; color: #64748b;">${(file.size / 1024).toFixed(1)} KB</p>
//           </div>
//           <button type="button" onclick="window.clearLogo()" style="margin-left: auto; padding: 8px; background: #ef4444; color: white; border: none; border-radius: 6px; cursor: pointer;">Remove</button>
//         </div>
//       `;
//     };
//     reader.readAsDataURL(file);
//   });
// }

// window.clearLogo = function() {
//   uploadedLogoUrl = '';
//   document.getElementById('logoUpload').value = '';
//   document.getElementById('logoPreview').innerHTML = '';
// };

// // ===== PAYMENT PROCESSING =====
// async function processPayment(plan, formData) {
//   return new Promise((resolve, reject) => {
//     if (plan === 'free') {
//       resolve({ success: true, paymentId: 'free_plan' });
//       return;
//     }

//     createRazorpayOrder(plan, formData).then(orderData => {
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
//           product_name: formData.toolName,
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
//           toolName: formData.toolName,
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
  
//   if (badgeCodeDisplay) {
//     const badgeCode = `<a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">\n${BADGE_STYLES[style].svg}\n</a>`;
//     badgeCodeDisplay.textContent = badgeCode;
//   }
// }

// function initializeBadgePreviews() {
//   Object.keys(BADGE_STYLES).forEach(style => {
//     const previewElement = document.getElementById(`preview${style.charAt(0).toUpperCase() + style.slice(1)}`);
//     if (previewElement) {
//       previewElement.innerHTML = BADGE_STYLES[style].svg;
//     }
//   });
  
//   const badgeOptions = document.querySelectorAll('.badge-option');
//   badgeOptions.forEach(option => {
//     option.addEventListener('click', () => {
//       badgeOptions.forEach(opt => opt.classList.remove('active'));
//       option.classList.add('active');
//       currentBadgeStyle = option.dataset.style;
//       updateBadgePreview(currentBadgeStyle);
//     });
//   });
// }

// window.copyBadgeCode = function() {
//   const badgeCode = `<a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">\n${BADGE_STYLES[currentBadgeStyle].svg}\n</a>`;

//   navigator.clipboard.writeText(badgeCode).then(() => {
//     showToast("✅ Badge code copied to clipboard!", "success");
//   }).catch(() => {
//     showToast("⚠️ Failed to copy. Please copy manually.", "error");
//   });
// }

// // ===== PRICING FUNCTIONS =====
// function initializePricing() {
//   const planButtons = document.querySelectorAll('.plan-btn');
//   planButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//       planButtons.forEach(b => {
//         b.classList.remove('selected');
//         const planName = b.closest('.pricing-card').querySelector('h4').textContent;
//         b.textContent = `Select ${planName}`;
//       });
      
//       btn.classList.add('selected');
//       btn.textContent = 'Selected ✓';
      
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
  
//   startPriceFlip();
// }

// function startPriceFlip() {
//   setInterval(() => {
//     const prices = document.querySelectorAll('.price');
    
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

// // ===== APPS SCRIPT SUBMISSION =====
// async function submitToAppsScript(formData) {
//   console.log("📤 Submitting to Google Sheets via Apps Script...");
  
//   try {
//     const response = await fetch(CONFIG.APPS_SCRIPT_URL, {
//       method: 'POST',
//       mode: 'no-cors',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData)
//     });

//     console.log('✅ Data sent to Apps Script');
//     return { success: true };
    
//   } catch (error) {
//     console.error("❌ Apps Script submission error:", error);
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
//       toolName: document.getElementById("toolName").value.trim(),
//       tagline: document.getElementById("tagline").value.trim(),
//       url: document.getElementById("url").value.trim(),
//       description: document.getElementById("description").value.trim(),
//       category: document.getElementById("category").value,
//       tags: document.getElementById("tags").value.trim(),
//       twitter: document.getElementById("twitter").value.trim(),
//       founders: document.getElementById("founders").value.trim(),
//       cofounders: document.getElementById("cofounders").value.trim(),
//       email: document.getElementById("email").value.trim(),
//       selectedPlan: selectedPlan,
//       logoUrl: uploadedLogoUrl
//     };

//     // URL validation
//     if (formData.url && !formData.url.startsWith("http")) {
//       formData.url = "https://" + formData.url;
//     }

//     // Validation
//     if (!formData.toolName || !formData.tagline || !formData.url || !formData.description || !formData.category || !formData.founders || !formData.email) {
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

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       showToast("⚠️ Please enter a valid email address", "error");
//       return;
//     }

//     // Anti-spam check
//     const duplicateErrors = antiSpam.checkForDuplicates(formData.toolName, formData.url, formData.email);
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
//       // Payment processing
//       let paymentResult = { success: true, paymentId: 'free_plan' };
      
//       if (selectedPlan !== 'free') {
//         showToast(`💳 Processing ${PRICING_PLANS[selectedPlan].name} payment...`, 'info');
        
//         paymentResult = await processPayment(selectedPlan, formData);
        
//         if (!paymentResult.success) {
//           throw new Error('Payment processing failed');
//         }
        
//         showToast("✅ Payment successful! Submitting your tool...", "success");
//         console.log('💰 Payment completed:', paymentResult);
//       }

//       // Add payment info
//       formData.paymentId = paymentResult.paymentId;

//       // Add to anti-spam
//       antiSpam.addSubmission(formData.toolName, formData.url, formData.email);

//       // Submit to Apps Script
//       const result = await submitToAppsScript(formData);
      
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
//           uploadedLogoUrl = '';
//           window.clearLogo();
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
//       return;
//     }
//   });
// }

// // ===== INITIALIZATION =====
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("✅ StartupGrower Submit System Ready!");
//   console.log("🔐 Using Apps Script URL:", CONFIG.APPS_SCRIPT_URL);
  
//   // Set up event listeners for progress tracking
//   const requiredFieldIds = ["toolName", "tagline", "url", "description", "category", "founders", "email"];
  
//   requiredFieldIds.forEach(id => {
//     const field = document.getElementById(id);
//     if (field) {
//       field.addEventListener("input", updateProgress);
//       field.addEventListener("change", updateProgress);
//     }
//   });
  
//   // Initialize systems
//   setupLogoUpload();
//   initializeBadgePreviews();
//   updateBadgePreview();
//   initializePricing();
//   setupFormSubmission();
  
//   // Initial progress update
//   updateProgress();
// });


// console.log("🚀 StartupGrower Submit System Initialized");

// // ===== IMAGE UPLOAD CONFIGURATION =====
// const IMGBB_API_KEY = '6a42ac6202748c034ca5e7cba9ef1723';

// async function uploadImageToImgBB(imageFile) {
//   const formData = new FormData();
//   formData.append('image', imageFile);
  
//   try {
//     const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
//       method: 'POST',
//       body: formData
//     });
    
//     const data = await response.json();
//     if (data.success) {
//       return data.data.url;
//     }
//     return null;
//   } catch (error) {
//     console.error('Image upload failed:', error);
//     return null;
//   }
// }

// // ===== CONFIGURATION =====
// const CONFIG = {
//   APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbxiimfSSgfUKfA53Dmqe4FfpoWRcfqME1jyd27Kpg1yUtwSiu5fwrseI8O0Ak060Naj/exec',
//   RAZORPAY_API_URL: '/api/razorpay-order'
// };

// // ===== ANTI-SPAM SYSTEM =====
// class AntiSpamSystem {
//   constructor() {
//     this.submittedProducts = new Set();
//     this.submittedUrls = new Set();
//     this.submittedEmails = new Set();
//     this.cooldownPeriod = 24 * 60 * 60 * 1000;
//     this.loadFromStorage();
//   }

//   loadFromStorage() {
//     try {
//       if (window._submissionCache) {
//         this.submittedProducts = new Set(window._submissionCache.products || []);
//         this.submittedUrls = new Set(window._submissionCache.urls || []);
//         this.submittedEmails = new Set(window._submissionCache.emails || []);
//       }
//     } catch (error) {
//       console.warn('Failed to load submission history:', error);
//     }
//   }

//   saveToStorage() {
//     try {
//       window._submissionCache = {
//         products: [...this.submittedProducts],
//         urls: [...this.submittedUrls],
//         emails: [...this.submittedEmails]
//       };
//     } catch (error) {
//       console.warn('Failed to save submission history:', error);
//     }
//   }

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

//   checkForDuplicates(productName, url, email) {
//     const normalizedName = this.normalizeText(productName);
//     const normalizedUrl = this.normalizeUrl(url);
//     const errors = [];

//     if (this.submittedProducts.has(normalizedName)) {
//       errors.push('This product name has already been submitted');
//     }

//     if (this.submittedUrls.has(normalizedUrl)) {
//       errors.push('This website URL has already been submitted');
//     }

//     return errors;
//   }

//   addSubmission(productName, url, email) {
//     const normalizedName = this.normalizeText(productName);
//     const normalizedUrl = this.normalizeUrl(url);
//     const normalizedEmail = this.normalizeEmail(email);

//     this.submittedProducts.add(normalizedName);
//     this.submittedUrls.add(normalizedUrl);
//     this.submittedEmails.add(normalizedEmail);

//     this.saveToStorage();

//     setTimeout(() => {
//       this.submittedProducts.delete(normalizedName);
//       this.submittedUrls.delete(normalizedUrl);
//       this.saveToStorage();
//     }, this.cooldownPeriod);
//   }
// }

// const antiSpam = new AntiSpamSystem();

// // ===== PRICING PLANS =====
// const PRICING_PLANS = {
//   free: { inr: 0, usd: 0, name: 'Free Launch', description: 'Free Launch Plan' },
//   starter: { inr: 99, usd: 1.20, name: 'Starter', description: 'Starter Plan' },
//   growth: { inr: 199, usd: 2.40, name: 'Growth', description: 'Growth Plan' },
//   pro: { inr: 399, usd: 4.80, name: 'Pro', description: 'Pro Plan' },
//   elite: { inr: 599, usd: 7.00, name: 'Elite', description: 'Elite Plan' },
//   ultimate: { inr: 799, usd: 9.50, name: 'Ultimate', description: 'Ultimate Plan' }
// };

// const BADGE_STYLES = {
//   colored: {
//     name: 'Colored',
//     svg: `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
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
//     </svg>`
//   },
//   neutral: {
//     name: 'Neutral',
//     svg: `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
//       <rect width="300" height="80" rx="12" fill="#f8fafc"/>
//       <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#64748b" stroke-width="2" opacity="0.6"/>
//       <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#64748b" stroke-width="2" opacity="0.6"/>
//       <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
//       <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#475569" text-anchor="middle">Listed on StartupGrower</text>
//     </svg>`
//   },
//   dark: {
//     name: 'Dark',
//     svg: `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
//       <rect width="300" height="80" rx="12" fill="#1e293b"/>
//       <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.6"/>
//       <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.6"/>
//       <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#94a3b8" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
//       <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#f1f5f9" text-anchor="middle">Listed on StartupGrower</text>
//     </svg>`
//   },
//   light: {
//     name: 'Light',
//     svg: `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
//       <rect width="300" height="80" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
//       <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#475569" stroke-width="2" opacity="0.6"/>
//       <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#475569" stroke-width="2" opacity="0.6"/>
//       <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
//       <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#1e293b" text-anchor="middle">Listed on StartupGrower</text>
//     </svg>`
//   }
// };

// let currentBadgeStyle = 'colored';
// let selectedPlan = 'free';
// let currentCurrency = 'inr';
// let uploadedLogoUrl = '';

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

// // ===== LOGO UPLOAD HANDLER =====
// function setupLogoUpload() {
//   const logoInput = document.getElementById('logoUpload');
//   const logoPreview = document.getElementById('logoPreview');
  
//   if (!logoInput || !logoPreview) return;
  
//   logoInput.addEventListener('change', async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
    
//     // Validate file
//     if (!file.type.startsWith('image/')) {
//       showToast('Please upload an image file', 'error');
//       return;
//     }
    
//     if (file.size > 5 * 1024 * 1024) {
//       showToast('Image size must be less than 5MB', 'error');
//       return;
//     }
    
//     // Show preview
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       uploadedLogoUrl = event.target.result;
//       logoPreview.innerHTML = `
//         <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: #f1f5f9; border-radius: 8px;">
//           <img src="${uploadedLogoUrl}" alt="Logo preview" style="width: 64px; height: 64px; object-fit: cover; border-radius: 8px;">
//           <div>
//             <p style="margin: 0; font-weight: 600;">${file.name}</p>
//             <p style="margin: 0; font-size: 12px; color: #64748b;">${(file.size / 1024).toFixed(1)} KB</p>
//           </div>
//           <button type="button" onclick="window.clearLogo()" style="margin-left: auto; padding: 8px; background: #ef4444; color: white; border: none; border-radius: 6px; cursor: pointer;">Remove</button>
//         </div>
//       `;
//     };
//     reader.readAsDataURL(file);
//   });
// }

// window.clearLogo = function() {
//   uploadedLogoUrl = '';
//   document.getElementById('logoUpload').value = '';
//   document.getElementById('logoPreview').innerHTML = '';
// };

// // ===== PAYMENT PROCESSING =====
// async function processPayment(plan, formData) {
//   return new Promise((resolve, reject) => {
//     if (plan === 'free') {
//       resolve({ success: true, paymentId: 'free_plan' });
//       return;
//     }

//     createRazorpayOrder(plan, formData).then(orderData => {
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
//           product_name: formData.toolName,
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
//           toolName: formData.toolName,
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
  
//   if (badgeCodeDisplay) {
//     const badgeCode = `<a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">\n${BADGE_STYLES[style].svg}\n</a>`;
//     badgeCodeDisplay.textContent = badgeCode;
//   }
// }

// function initializeBadgePreviews() {
//   Object.keys(BADGE_STYLES).forEach(style => {
//     const previewElement = document.getElementById(`preview${style.charAt(0).toUpperCase() + style.slice(1)}`);
//     if (previewElement) {
//       previewElement.innerHTML = BADGE_STYLES[style].svg;
//     }
//   });
  
//   const badgeOptions = document.querySelectorAll('.badge-option');
//   badgeOptions.forEach(option => {
//     option.addEventListener('click', () => {
//       badgeOptions.forEach(opt => opt.classList.remove('active'));
//       option.classList.add('active');
//       currentBadgeStyle = option.dataset.style;
//       updateBadgePreview(currentBadgeStyle);
//     });
//   });
// }

// window.copyBadgeCode = function() {
//   const badgeCode = `<a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">\n${BADGE_STYLES[currentBadgeStyle].svg}\n</a>`;

//   navigator.clipboard.writeText(badgeCode).then(() => {
//     showToast("✅ Badge code copied to clipboard!", "success");
//   }).catch(() => {
//     showToast("⚠️ Failed to copy. Please copy manually.", "error");
//   });
// }

// // ===== PRICING FUNCTIONS =====
// function initializePricing() {
//   const planButtons = document.querySelectorAll('.plan-btn');
//   planButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//       planButtons.forEach(b => {
//         b.classList.remove('selected');
//         const planName = b.closest('.pricing-card').querySelector('h4').textContent;
//         b.textContent = `Select ${planName}`;
//       });
      
//       btn.classList.add('selected');
//       btn.textContent = 'Selected ✓';
      
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
  
//   startPriceFlip();
// }

// function startPriceFlip() {
//   setInterval(() => {
//     const prices = document.querySelectorAll('.price');
    
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

// // ===== APPS SCRIPT SUBMISSION =====
// async function submitToAppsScript(formData) {
//   console.log("📤 Submitting to Google Sheets via Apps Script...");
  
//   try {
//     const response = await fetch(CONFIG.APPS_SCRIPT_URL, {
//       method: 'POST',
//       mode: 'no-cors',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData)
//     });

//     console.log('✅ Data sent to Apps Script');
//     return { success: true };
    
//   } catch (error) {
//     console.error("❌ Apps Script submission error:", error);
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
//       toolName: document.getElementById("toolName").value.trim(),
//       tagline: document.getElementById("tagline").value.trim(),
//       url: document.getElementById("url").value.trim(),
//       description: document.getElementById("description").value.trim(),
//       category: document.getElementById("category").value,
//       tags: document.getElementById("tags").value.trim(),
//       twitter: document.getElementById("twitter").value.trim(),
//       founders: document.getElementById("founders").value.trim(),
//       cofounders: document.getElementById("cofounders").value.trim(),
//       email: document.getElementById("email").value.trim(),
//       selectedPlan: selectedPlan,
//       logoUrl: uploadedLogoUrl
//     };

//     // URL validation
//     if (formData.url && !formData.url.startsWith("http")) {
//       formData.url = "https://" + formData.url;
//     }

//     // Validation
//     if (!formData.toolName || !formData.tagline || !formData.url || !formData.description || !formData.category || !formData.founders || !formData.email) {
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

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       showToast("⚠️ Please enter a valid email address", "error");
//       return;
//     }

//     // Anti-spam check
//     const duplicateErrors = antiSpam.checkForDuplicates(formData.toolName, formData.url, formData.email);
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
//       // === IMAGE UPLOAD CODE ===
//       let finalLogoUrl = '';
      
//       // If user uploaded a logo, upload it to imgBB
//       if (uploadedLogoUrl && uploadedLogoUrl.startsWith('data:')) {
//         showToast('📤 Uploading logo...', 'info');
        
//         // Convert data URL to file
//         const response = await fetch(uploadedLogoUrl);
//         const blob = await response.blob();
//         const file = new File([blob], 'logo.png', { type: 'image/png' });
        
//         // Upload to imgBB
//         finalLogoUrl = await uploadImageToImgBB(file);
        
//         if (finalLogoUrl) {
//           console.log('✅ Logo uploaded successfully:', finalLogoUrl);
//         } else {
//           console.log('⚠️ Logo upload failed, proceeding without logo');
//         }
//       }

//       // Payment processing
//       let paymentResult = { success: true, paymentId: 'free_plan' };
      
//       if (selectedPlan !== 'free') {
//         showToast(`💳 Processing ${PRICING_PLANS[selectedPlan].name} payment...`, 'info');
        
//         paymentResult = await processPayment(selectedPlan, formData);
        
//         if (!paymentResult.success) {
//           throw new Error('Payment processing failed');
//         }
        
//         showToast("✅ Payment successful! Submitting your tool...", "success");
//         console.log('💰 Payment completed:', paymentResult);
//       }

//       // Add payment info
//       formData.paymentId = paymentResult.paymentId;
      
//       // === UPDATE THIS LINE ===
//       formData.logoUrl = finalLogoUrl || ''; // Use the uploaded URL instead of data URL

//       // Add to anti-spam
//       antiSpam.addSubmission(formData.toolName, formData.url, formData.email);

//       // Submit to Apps Script
//       const result = await submitToAppsScript(formData);
      
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
//           uploadedLogoUrl = '';
//           window.clearLogo();
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
//       return;
//     }
//   });
// }

// // ===== INITIALIZATION =====
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("✅ StartupGrower Submit System Ready!");
//   console.log("🔐 Using Apps Script URL:", CONFIG.APPS_SCRIPT_URL);
  
//   // Set up event listeners for progress tracking
//   const requiredFieldIds = ["toolName", "tagline", "url", "description", "category", "founders", "email"];
  
//   requiredFieldIds.forEach(id => {
//     const field = document.getElementById(id);
//     if (field) {
//       field.addEventListener("input", updateProgress);
//       field.addEventListener("change", updateProgress);
//     }
//   });
  
//   // Initialize systems
//   setupLogoUpload();
//   initializeBadgePreviews();
//   updateBadgePreview();
//   initializePricing();
//   setupFormSubmission();
  
//   // Initial progress update
//   updateProgress();
// });


console.log("🚀 StartupGrower Submit System Initialized");

// ===== IMAGE UPLOAD CONFIGURATION =====
const IMGBB_API_KEY = '6a42ac6202748c034ca5e7cba9ef1723';

/**
 * Upload image file to imgBB
 * @param {File} imageFile - The image file to upload
 * @returns {Promise<string|null>} - Returns the image URL or null if failed
 */
async function uploadImageToImgBB(imageFile) {
  const formData = new FormData();
  formData.append('image', imageFile);
  
  try {
    console.log('📤 Uploading image to imgBB...');
    
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
      method: 'POST',
      body: formData
    });
    
    const data = await response.json();
    
    if (data.success && data.data && data.data.url) {
      console.log('✅ Image uploaded successfully:', data.data.url);
      return data.data.url;
    } else {
      console.error('❌ imgBB upload failed:', data);
      return null;
    }
  } catch (error) {
    console.error('❌ Image upload error:', error);
    return null;
  }
}

/**
 * Convert data URL to File object
 * @param {string} dataUrl - The data URL to convert
 * @param {string} filename - The filename for the file
 * @returns {Promise<File>} - Returns a File object
 */
async function dataUrlToFile(dataUrl, filename = 'logo') {
  const response = await fetch(dataUrl);
  const blob = await response.blob();
  const mimeType = blob.type || 'image/png';
  const extension = mimeType.split('/')[1] || 'png';
  return new File([blob], `${filename}.${extension}`, { type: mimeType });
}

// ===== CONFIGURATION =====
const CONFIG = {
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbySCisZMbn328sXgztEuBKb3aTJWPIFXXF_BVIuIeJ8YC5Dc4lgVO5SwP_FCTCY29ql/exec',
  RAZORPAY_API_URL: '/api/razorpay-order'
};

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
}

const antiSpam = new AntiSpamSystem();

// ===== PRICING PLANS =====
const PRICING_PLANS = {
  free: { inr: 0, usd: 0, name: 'Free Launch', description: 'Free Launch Plan' },
  starter: { inr: 99, usd: 1.20, name: 'Starter', description: 'Starter Plan' },
  growth: { inr: 199, usd: 2.40, name: 'Growth', description: 'Growth Plan' },
  pro: { inr: 399, usd: 4.80, name: 'Pro', description: 'Pro Plan' },
  elite: { inr: 599, usd: 7.00, name: 'Elite', description: 'Elite Plan' },
  ultimate: { inr: 799, usd: 9.50, name: 'Ultimate', description: 'Ultimate Plan' }
};

const BADGE_STYLES = {
  colored: {
    name: 'Colored',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
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
    </svg>`
  },
  neutral: {
    name: 'Neutral',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
      <rect width="300" height="80" rx="12" fill="#f8fafc"/>
      <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#64748b" stroke-width="2" opacity="0.6"/>
      <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#64748b" stroke-width="2" opacity="0.6"/>
      <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
      <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#475569" text-anchor="middle">Listed on StartupGrower</text>
    </svg>`
  },
  dark: {
    name: 'Dark',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
      <rect width="300" height="80" rx="12" fill="#1e293b"/>
      <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.6"/>
      <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.6"/>
      <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#94a3b8" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
      <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#f1f5f9" text-anchor="middle">Listed on StartupGrower</text>
    </svg>`
  },
  light: {
    name: 'Light',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 300 80">
      <rect width="300" height="80" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <path d="M20,25 Q18,30 20,35 Q18,32 16,30 Q18,28 20,25 M20,35 Q18,40 20,45 Q18,42 16,40 Q18,38 20,35" fill="none" stroke="#475569" stroke-width="2" opacity="0.6"/>
      <path d="M280,25 Q282,30 280,35 Q282,32 284,30 Q282,28 280,25 M280,35 Q282,40 280,45 Q282,42 284,40 Q282,38 280,35" fill="none" stroke="#475569" stroke-width="2" opacity="0.6"/>
      <text x="150" y="28" font-family="Inter, Arial, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle" letter-spacing="2" opacity="0.9">STARTUP GROWER</text>
      <text x="150" y="52" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#1e293b" text-anchor="middle">Listed on StartupGrower</text>
    </svg>`
  }
};

let currentBadgeStyle = 'colored';
let selectedPlan = 'free';
let currentCurrency = 'inr';
let uploadedLogoFile = null;
let uploadedLogoDataUrl = '';

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

// ===== LOGO UPLOAD HANDLER =====
function setupLogoUpload() {
  const logoInput = document.getElementById('logoUpload');
  const logoPreview = document.getElementById('logoPreview');
  
  if (!logoInput || !logoPreview) {
    console.warn('⚠️ Logo upload elements not found');
    return;
  }
  
  logoInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      showToast('❌ Please upload an image file (PNG, JPG, GIF, etc.)', 'error');
      logoInput.value = '';
      return;
    }
    
    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      showToast('❌ Image size must be less than 5MB', 'error');
      logoInput.value = '';
      return;
    }
    
    // Store the file
    uploadedLogoFile = file;
    
    // Show preview
    const reader = new FileReader();
    reader.onload = (event) => {
      uploadedLogoDataUrl = event.target.result;
      
      logoPreview.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f1f5f9; border-radius: 8px; border: 2px solid #e2e8f0;">
          <img src="${uploadedLogoDataUrl}" alt="Logo preview" style="width: 64px; height: 64px; object-fit: cover; border-radius: 8px; border: 2px solid #cbd5e1;">
          <div style="flex: 1;">
            <p style="margin: 0; font-weight: 600; color: #1e293b;">${file.name}</p>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: #64748b;">${(file.size / 1024).toFixed(1)} KB</p>
          </div>
          <button type="button" onclick="window.clearLogo()" style="padding: 8px 16px; background: #ef4444; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; transition: background 0.2s;" onmouseover="this.style.background='#dc2626'" onmouseout="this.style.background='#ef4444'">Remove</button>
        </div>
      `;
      
      showToast('✅ Logo preview loaded. Remember to submit the form!', 'success');
    };
    reader.readAsDataURL(file);
  });
}

// Clear logo function
window.clearLogo = function() {
  uploadedLogoFile = null;
  uploadedLogoDataUrl = '';
  
  const logoInput = document.getElementById('logoUpload');
  const logoPreview = document.getElementById('logoPreview');
  
  if (logoInput) logoInput.value = '';
  if (logoPreview) logoPreview.innerHTML = '';
  
  showToast('Logo removed', 'info');
};

// ===== PAYMENT PROCESSING =====
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
          product_name: formData.toolName,
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
          toolName: formData.toolName,
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
    const badgeCode = `<a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">\n${BADGE_STYLES[style].svg}\n</a>`;
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
  const badgeCode = `<a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">\n${BADGE_STYLES[currentBadgeStyle].svg}\n</a>`;

  navigator.clipboard.writeText(badgeCode).then(() => {
    showToast("✅ Badge code copied to clipboard!", "success");
  }).catch(() => {
    showToast("⚠️ Failed to copy. Please copy manually.", "error");
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

// ===== APPS SCRIPT SUBMISSION =====
async function submitToAppsScript(formData) {
  console.log("📤 Submitting to Google Sheets via Apps Script...");
  
  try {
    const response = await fetch(CONFIG.APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    console.log('✅ Data sent to Apps Script');
    return { success: true };
    
  } catch (error) {
    console.error("❌ Apps Script submission error:", error);
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
      toolName: document.getElementById("toolName").value.trim(),
      tagline: document.getElementById("tagline").value.trim(),
      url: document.getElementById("url").value.trim(),
      description: document.getElementById("description").value.trim(),
      category: document.getElementById("category").value,
      tags: document.getElementById("tags").value.trim(),
      twitter: document.getElementById("twitter").value.trim(),
      founders: document.getElementById("founders").value.trim(),
      cofounders: document.getElementById("cofounders").value.trim(),
      email: document.getElementById("email").value.trim(),
      selectedPlan: selectedPlan,
      logoUrl: '' // Will be populated after upload
    };

    // URL validation
    if (formData.url && !formData.url.startsWith("http")) {
      formData.url = "https://" + formData.url;
    }

    // Validation
    if (!formData.toolName || !formData.tagline || !formData.url || !formData.description || !formData.category || !formData.founders || !formData.email) {
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

    // Anti-spam check
    const duplicateErrors = antiSpam.checkForDuplicates(formData.toolName, formData.url, formData.email);
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
      // ===== STEP 1: UPLOAD LOGO TO IMGBB =====
      let finalLogoUrl = '';
      
      if (uploadedLogoFile) {
        // Direct file upload
        showToast('📤 Uploading logo to imgBB...', 'info');
        
        finalLogoUrl = await uploadImageToImgBB(uploadedLogoFile);
        
        if (finalLogoUrl) {
          console.log('✅ Logo uploaded successfully:', finalLogoUrl);
          showToast('✅ Logo uploaded successfully!', 'success');
        } else {
          console.warn('⚠️ Logo upload failed, proceeding without logo');
          showToast('⚠️ Logo upload failed, continuing without logo', 'info');
        }
      } else if (uploadedLogoDataUrl && uploadedLogoDataUrl.startsWith('data:')) {
        // Fallback: convert data URL to file and upload
        showToast('📤 Uploading logo to imgBB...', 'info');
        
        try {
          const file = await dataUrlToFile(uploadedLogoDataUrl, formData.toolName);
          finalLogoUrl = await uploadImageToImgBB(file);
          
          if (finalLogoUrl) {
            console.log('✅ Logo uploaded successfully:', finalLogoUrl);
            showToast('✅ Logo uploaded successfully!', 'success');
          }
        } catch (conversionError) {
          console.warn('⚠️ Logo conversion/upload failed:', conversionError);
        }
      }

      // Set the logo URL (empty string if no logo)
      formData.logoUrl = finalLogoUrl || '';
      console.log('📝 Final logo URL for submission:', formData.logoUrl);

      // ===== STEP 2: PROCESS PAYMENT =====
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

      // Add payment info to form data
      formData.paymentId = paymentResult.paymentId;

      // ===== STEP 3: SUBMIT TO GOOGLE SHEETS =====
      showToast('📝 Submitting to Google Sheets...', 'info');
      
      // Add to anti-spam system
      antiSpam.addSubmission(formData.toolName, formData.url, formData.email);

      // Submit to Apps Script
      const result = await submitToAppsScript(formData);
      
      if (result.success) {
        // Success state
        btn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20 6L9 17l-5-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Submitted Successfully!</span>
        `;
        btn.style.background = "linear-gradient(135deg, #10b981, #059669)";
        
        const successMessage = selectedPlan === 'free' 
          ? "🎉 Your tool has been submitted successfully! It will appear in the feed shortly." 
          : `🎉 Your tool has been submitted successfully! Payment ID: ${paymentResult.paymentId}`;
        
        showToast(successMessage, "success");

        // Reset form after 3 seconds
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
          window.clearLogo();
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
    }
  });
}

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ StartupGrower Submit System Ready!");
  console.log("🔐 Using Apps Script URL:", CONFIG.APPS_SCRIPT_URL);
  console.log("🖼️ imgBB Integration Active");
  
  // Set up event listeners for progress tracking
  const requiredFieldIds = ["toolName", "tagline", "url", "description", "category", "founders", "email"];
  
  requiredFieldIds.forEach(id => {
    const field = document.getElementById(id);
    if (field) {
      field.addEventListener("input", updateProgress);
      field.addEventListener("change", updateProgress);
    }
  });
  
  // Initialize systems
  setupLogoUpload();
  initializeBadgePreviews();
  updateBadgePreview();
  initializePricing();
  setupFormSubmission();
  
  // Initial progress update
  updateProgress();
});