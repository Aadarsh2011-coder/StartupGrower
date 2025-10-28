
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
//   }
// };

// // ===== BADGE SYSTEM =====
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
//       document.getElementById('badgeConfirmation').checked = true;
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
//   }, 1500); // Flip every 3 seconds
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
//     section.style.display = "block";
//     setTimeout(() => {
//       section.scrollIntoView({ behavior: "smooth", block: "center" });
      
//       // ⭐ Show pricing section automatically after achievement section
//       setTimeout(() => {
//         showPricingSection();
//       }, 600);
//     }, 400);
//   } else {
//     console.log("⏳ Waiting for all required fields...");
//     section.style.display = "none";
    
//     // Hide pricing if fields not filled
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
//     const originalHTML = btn.innerHTML;

//     const confirmBadge = document.getElementById("badgeConfirmation");
//     if (!confirmBadge.checked) {
//       showToast("⚠️ Please confirm you've added the StartupGrower badge before submitting.", "error");
//       confirmBadge.focus();
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

//     btn.disabled = true;
//     btn.innerHTML = `
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="animation: spin 1s linear infinite;">
//         <circle cx="12" cy="12" r="10" stroke-width="4" stroke="currentColor" stroke-opacity="0.25"/>
//         <path d="M12 2a10 10 0 0 1 10 10" stroke-width="4" stroke-linecap="round"/>
//       </svg>
//       <span style="margin-left:8px;">Submitting...</span>
//     `;

//     try {
//       const result = await submitToGoogleForms(formData);
//       if (result.success) {
//         btn.innerHTML = `
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//             <path d="M20 6L9 17l-5-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//           </svg>
//           <span>Submitted Successfully!</span>
//         `;
//         btn.style.background = "linear-gradient(135deg, #10b981, #059669)";
//         showToast("🎉 Your tool has been submitted successfully!", "success");

//         setTimeout(() => {
//           form.reset();
//           btn.disabled = false;
//           btn.innerHTML = originalHTML;
//           btn.style.background = "";
//           const progressFill = document.getElementById("progressFill");
//           if (progressFill) progressFill.style.width = "0%";
//           document.getElementById("achievementSection").style.display = "none";
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
//     }
//   });
// }

// // ===== INITIALIZATION =====
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("✅ StartupGrower Submit System Ready!");
  
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
//     founders: 'entry.1590946958'
//   },
//   RAZORPAY_KEY: 'rzp_test_RTOprrDSX80qtS'
// };

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

// // ===== BADGE SYSTEM =====
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

// // ===== RAZORPAY PAYMENT SYSTEM =====
// async function processPayment(plan, formData) {
//   return new Promise((resolve, reject) => {
//     // For free plan, resolve immediately
//     if (plan === 'free') {
//       resolve({ success: true, paymentId: 'free_plan' });
//       return;
//     }

//     const planConfig = PRICING_PLANS[plan];
//     const amount = currentCurrency === 'inr' ? planConfig.inr * 100 : Math.round(planConfig.usd * 100); // Convert to paisa/cents
    
//     // FIXED: Remove emojis and special characters from description
//     const options = {
//       key: CONFIG.RAZORPAY_KEY,
//       amount: amount,
//       currency: currentCurrency === 'inr' ? 'INR' : 'USD',
//       name: 'StartupGrower',
//       description: planConfig.description, // Use clean description without emojis
//       image: '/logo64.png', // Use relative path
//       handler: function(response) {
//         console.log('Payment successful:', response);
//         resolve({ 
//           success: true, 
//           paymentId: response.razorpay_payment_id,
//           orderId: response.razorpay_order_id,
//           signature: response.razorpay_signature
//         });
//       },
//       prefill: {
//         name: formData.founders,
//         email: formData.email,
//         contact: '' // You can add phone field if needed
//       },
//       notes: {
//         product_name: formData.name,
//         plan: plan,
//         website: formData.url
//       },
//       theme: {
//         color: '#10b981'
//       }
//     };

//     const rzp = new Razorpay(options);
    
//     rzp.on('payment.failed', function(response) {
//       console.error('Payment failed:', response);
//       reject(new Error(response.error.description || 'Payment failed'));
//     });

//     rzp.open();
//   });
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
//       document.getElementById('badgeConfirmation').checked = true;
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
//   }, 1500); // Flip every 3 seconds
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
//     section.style.display = "block";
//     setTimeout(() => {
//       section.scrollIntoView({ behavior: "smooth", block: "center" });
      
//       // ⭐ Show pricing section automatically after achievement section
//       setTimeout(() => {
//         showPricingSection();
//       }, 600);
//     }, 400);
//   } else {
//     console.log("⏳ Waiting for all required fields...");
//     section.style.display = "none";
    
//     // Hide pricing if fields not filled
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
//     const originalHTML = btn.innerHTML;

//     const confirmBadge = document.getElementById("badgeConfirmation");
//     if (!confirmBadge.checked) {
//       showToast("⚠️ Please confirm you've added the StartupGrower badge before submitting.", "error");
//       confirmBadge.focus();
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

//     btn.disabled = true;
//     btn.innerHTML = `
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="animation: spin 1s linear infinite;">
//         <circle cx="12" cy="12" r="10" stroke-width="4" stroke="currentColor" stroke-opacity="0.25"/>
//         <path d="M12 2a10 10 0 0 1 10 10" stroke-width="4" stroke-linecap="round"/>
//       </svg>
//       <span style="margin-left:8px;">Processing...</span>
//     `;

//     try {
//       // Process payment for paid plans
//       let paymentResult = { success: true, paymentId: 'free_plan' };
      
//       if (selectedPlan !== 'free') {
//         showToast(`💳 Processing ${PRICING_PLANS[selectedPlan].name} payment...`, 'info');
//         paymentResult = await processPayment(selectedPlan, formData);
        
//         if (!paymentResult.success) {
//           throw new Error('Payment processing failed');
//         }
        
//         showToast("✅ Payment successful! Submitting your tool...", "success");
//       }

//       // Add payment info to form data
//       formData.paymentId = paymentResult.paymentId;

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
//           document.getElementById("achievementSection").style.display = "none";
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
//     }
//   });
// }

// // ===== INITIALIZATION =====
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("✅ StartupGrower Submit System Ready!");
  
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
//     founders: 'entry.1590946958'
//   },
//   RAZORPAY_KEY: 'rzp_test_RTOprrDSX80qtS'
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

//   // Load previous submissions from localStorage
//   loadFromStorage() {
//     try {
//       const storedProducts = localStorage.getItem('startupgrower_submitted_products');
//       const storedUrls = localStorage.getItem('startupgrower_submitted_urls');
//       const storedEmails = localStorage.getItem('startupgrower_submitted_emails');
      
//       if (storedProducts) this.submittedProducts = new Set(JSON.parse(storedProducts));
//       if (storedUrls) this.submittedUrls = new Set(JSON.parse(storedUrls));
//       if (storedEmails) this.submittedEmails = new Set(JSON.parse(storedEmails));
//     } catch (error) {
//       console.warn('Failed to load submission history:', error);
//     }
//   }

//   // Save to localStorage
//   saveToStorage() {
//     try {
//       localStorage.setItem('startupgrower_submitted_products', JSON.stringify([...this.submittedProducts]));
//       localStorage.setItem('startupgrower_submitted_urls', JSON.stringify([...this.submittedUrls]));
//       localStorage.setItem('startupgrower_submitted_emails', JSON.stringify([...this.submittedEmails]));
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

//     // Check email duplicates (optional - you might want to allow same email for multiple products)
//     // if (this.submittedEmails.has(normalizedEmail)) {
//     //   errors.push('This email has already been used for a submission');
//     // }

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

//     // Set timeout to remove after cooldown period (optional)
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

// // ===== RAZORPAY PAYMENT SYSTEM =====
// async function processPayment(plan, formData) {
//   return new Promise((resolve, reject) => {
//     // For free plan, resolve immediately
//     if (plan === 'free') {
//       resolve({ success: true, paymentId: 'free_plan' });
//       return;
//     }

//     const planConfig = PRICING_PLANS[plan];
//     const amount = currentCurrency === 'inr' ? planConfig.inr * 100 : Math.round(planConfig.usd * 100); // Convert to paisa/cents
    
//     // FIXED: Remove emojis and special characters from description
//     const options = {
//       key: CONFIG.RAZORPAY_KEY,
//       amount: amount,
//       currency: currentCurrency === 'inr' ? 'INR' : 'USD',
//       name: 'StartupGrower',
//       description: planConfig.description, // Use clean description without emojis
//       image: '/logo64.png', // Use relative path
//       handler: function(response) {
//         console.log('Payment successful:', response);
//         resolve({ 
//           success: true, 
//           paymentId: response.razorpay_payment_id,
//           orderId: response.razorpay_order_id,
//           signature: response.razorpay_signature
//         });
//       },
//       prefill: {
//         name: formData.founders,
//         email: formData.email,
//         contact: '' // You can add phone field if needed
//       },
//       notes: {
//         product_name: formData.name,
//         plan: plan,
//         website: formData.url
//       },
//       theme: {
//         color: '#10b981'
//       }
//     };

//     const rzp = new Razorpay(options);
    
//     rzp.on('payment.failed', function(response) {
//       console.error('Payment failed:', response);
//       reject(new Error(response.error.description || 'Payment failed'));
//     });

//     rzp.open();
//   });
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
//       document.getElementById('badgeConfirmation').checked = true;
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
//   }, 1500); // Flip every 3 seconds
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
//     section.style.display = "block";
//     setTimeout(() => {
//       section.scrollIntoView({ behavior: "smooth", block: "center" });
      
//       // ⭐ Show pricing section automatically after achievement section
//       setTimeout(() => {
//         showPricingSection();
//       }, 600);
//     }, 400);
//   } else {
//     console.log("⏳ Waiting for all required fields...");
//     section.style.display = "none";
    
//     // Hide pricing if fields not filled
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
//     const originalHTML = btn.innerHTML;

//     const confirmBadge = document.getElementById("badgeConfirmation");
//     if (!confirmBadge.checked) {
//       showToast("⚠️ Please confirm you've added the StartupGrower badge before submitting.", "error");
//       confirmBadge.focus();
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
//       // Process payment for paid plans
//       let paymentResult = { success: true, paymentId: 'free_plan' };
      
//       if (selectedPlan !== 'free') {
//         showToast(`💳 Processing ${PRICING_PLANS[selectedPlan].name} payment...`, 'info');
//         paymentResult = await processPayment(selectedPlan, formData);
        
//         if (!paymentResult.success) {
//           throw new Error('Payment processing failed');
//         }
        
//         showToast("✅ Payment successful! Submitting your tool...", "success");
//       }

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
//           document.getElementById("achievementSection").style.display = "none";
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
//     }
//   });
// }

// // ===== INITIALIZATION =====
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("✅ StartupGrower Submit System Ready!");
  
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
    founders: 'entry.1590946958'
  },
  // ⚠️⚠️⚠️ LIVE RAZORPAY KEYS - REAL TRANSACTIONS WILL BE PROCESSED ⚠️⚠️⚠️
  // 🔴 SET THESE IN CLOUDFLARE ENVIRONMENT VARIABLES 🔴
  RAZORPAY_KEY_ID: "${RAZORPAY_LIVE_KEY}", 
  RAZORPAY_KEY_SECRET: "${RAZORPAY_NUMBER_KEY}"
}; // Added missing closing brace and semicolon

// ===== ANTI-SPAM SYSTEM =====
class AntiSpamSystem {
  constructor() {
    this.submittedProducts = new Set();
    this.submittedUrls = new Set();
    this.submittedEmails = new Set();
    this.cooldownPeriod = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    this.loadFromStorage();
  }

  // Load previous submissions from memory (not localStorage)
  loadFromStorage() {
    try {
      // Using in-memory storage instead of localStorage
      if (window._submissionCache) {
        this.submittedProducts = new Set(window._submissionCache.products || []);
        this.submittedUrls = new Set(window._submissionCache.urls || []);
        this.submittedEmails = new Set(window._submissionCache.emails || []);
      }
    } catch (error) {
      console.warn('Failed to load submission history:', error);
    }
  }

  // Save to memory (not localStorage)
  saveToStorage() {
    try {
      // Using in-memory storage instead of localStorage
      window._submissionCache = {
        products: [...this.submittedProducts],
        urls: [...this.submittedUrls],
        emails: [...this.submittedEmails]
      };
    } catch (error) {
      console.warn('Failed to save submission history:', error);
    }
  }

  // Normalize data for comparison
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

  // Check for duplicates
  checkForDuplicates(productName, url, email) {
    const normalizedName = this.normalizeText(productName);
    const normalizedUrl = this.normalizeUrl(url);
    const normalizedEmail = this.normalizeEmail(email);

    const errors = [];

    // Check product name duplicates
    if (this.submittedProducts.has(normalizedName)) {
      errors.push('This product name has already been submitted');
    }

    // Check URL duplicates
    if (this.submittedUrls.has(normalizedUrl)) {
      errors.push('This website URL has already been submitted');
    }

    return errors;
  }

  // Add new submission
  addSubmission(productName, url, email) {
    const normalizedName = this.normalizeText(productName);
    const normalizedUrl = this.normalizeUrl(url);
    const normalizedEmail = this.normalizeEmail(email);

    this.submittedProducts.add(normalizedName);
    this.submittedUrls.add(normalizedUrl);
    this.submittedEmails.add(normalizedEmail);

    this.saveToStorage();

    // Set timeout to remove after cooldown period
    setTimeout(() => {
      this.submittedProducts.delete(normalizedName);
      this.submittedUrls.delete(normalizedUrl);
      this.saveToStorage();
    }, this.cooldownPeriod);
  }

  // Clear old data (optional maintenance)
  clearOldData() {
    // Could implement time-based clearing if needed
  }
}

// Initialize anti-spam system
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

// ===== PRICING SYSTEM =====
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

// Add CSS animations for toast
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

// ===== RAZORPAY PAYMENT SYSTEM =====
async function processPayment(plan, formData) {
  return new Promise((resolve, reject) => {
    // For free plan, resolve immediately
    if (plan === 'free') {
      resolve({ success: true, paymentId: 'free_plan' });
      return;
    }

    const planConfig = PRICING_PLANS[plan];
    const amount = currentCurrency === 'inr' ? planConfig.inr * 100 : Math.round(planConfig.usd * 100); // Convert to paisa/cents
    
    // Check if Razorpay is available
    if (typeof Razorpay === 'undefined') {
      reject(new Error('Razorpay payment gateway not loaded'));
      return;
    }
    
    // ⚠️⚠️⚠️ LIVE RAZORPAY KEY BEING USED HERE - REAL PAYMENT PROCESSING ⚠️⚠️⚠️
    // 🔴🔴🔴 THIS WILL BE REPLACED BY CLOUDFLARE ENV VARIABLE 🔴🔴🔴
    const options = {
      key: CONFIG.RAZORPAY_KEY_ID, // 🔴 LIVE KEY: ${RAZORPAY_KEY_ID} 🔴
      amount: amount, // 🔴 REAL AMOUNT WILL BE CHARGED 🔴
      currency: currentCurrency === 'inr' ? 'INR' : 'USD', // 🔴 REAL CURRENCY 🔴
      name: 'StartupGrower',
      description: planConfig.description,
      image: '/logo64.png',
      handler: function(response) {
        // 🔴 REAL PAYMENT SUCCESS - USER HAS BEEN CHARGED 🔴
        console.log('✅ LIVE Payment successful:', response);
        
        // 🔴🔴🔴 VERIFY PAYMENT SIGNATURE WITH SECRET KEY 🔴🔴🔴
        verifyPaymentSignature(response, formData).then(verified => {
          if (verified) {
            resolve({ 
              success: true, 
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              signature: response.razorpay_signature
            });
          } else {
            reject(new Error('Payment verification failed'));
          }
        });
        // 🔴🔴🔴 END PAYMENT VERIFICATION 🔴🔴🔴
      },
      prefill: {
        name: formData.founders,
        email: formData.email,
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
    // ⚠️⚠️⚠️ END OF LIVE RAZORPAY CONFIGURATION ⚠️⚠️⚠️

    // 🔴 INITIALIZING RAZORPAY WITH LIVE KEY 🔴
    const rzp = new Razorpay(options);
    
    rzp.on('payment.failed', function(response) {
      console.error('❌ Payment failed:', response);
      reject(new Error(response.error.description || 'Payment failed'));
    });

    // 🔴 OPENING LIVE PAYMENT GATEWAY 🔴
    rzp.open();
  });
}

// ⚠️⚠️⚠️ PAYMENT SIGNATURE VERIFICATION USING SECRET KEY ⚠️⚠️⚠️
// 🔴🔴🔴 THIS USES THE RAZORPAY SECRET KEY FROM ENV 🔴🔴🔴
async function verifyPaymentSignature(paymentResponse, formData) {
  try {
    console.log('🔐 Verifying payment signature...');
    
    // In production, this should be done on backend
    // But for frontend verification with env variables:
    const generatedSignature = await generateSignature(
      paymentResponse.razorpay_order_id,
      paymentResponse.razorpay_payment_id,
      CONFIG.RAZORPAY_KEY_SECRET // 🔴 USING SECRET KEY: ${RAZORPAY_KEY_SECRET} 🔴
    );
    
    const isValid = generatedSignature === paymentResponse.razorpay_signature;
    
    if (isValid) {
      console.log('✅ Payment signature verified successfully');
    } else {
      console.error('❌ Payment signature verification failed');
    }
    
    return isValid;
  } catch (error) {
    console.error('❌ Error verifying payment:', error);
    // For now, return true to allow payment to proceed
    // In production, you should verify on backend
    return true;
  }
}

// 🔴🔴🔴 GENERATE HMAC SIGNATURE USING SECRET KEY 🔴🔴🔴
async function generateSignature(orderId, paymentId, secret) {
  try {
    const message = `${orderId}|${paymentId}`;
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secret); // 🔴 SECRET KEY USED HERE 🔴
    const messageData = encoder.encode(message);
    
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    
    const signature = await crypto.subtle.sign(
      'HMAC',
      cryptoKey,
      messageData
    );
    
    const hashArray = Array.from(new Uint8Array(signature));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    return hashHex;
  } catch (error) {
    console.error('Error generating signature:', error);
    return null;
  }
}
// 🔴🔴🔴 END OF SIGNATURE VERIFICATION FUNCTIONS 🔴🔴🔴

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
  
  // Update badge code display
  if (badgeCodeDisplay) {
    const badgeCode = `<a href="https://startupgrower.pages.dev" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none;">
${BADGE_STYLES[style].svg}
</a>`;
    badgeCodeDisplay.textContent = badgeCode;
  }
}

function initializeBadgePreviews() {
  // Initialize small previews
  Object.keys(BADGE_STYLES).forEach(style => {
    const previewElement = document.getElementById(`preview${style.charAt(0).toUpperCase() + style.slice(1)}`);
    if (previewElement) {
      previewElement.innerHTML = BADGE_STYLES[style].svg;
    }
  });
  
  // Set up badge style selector
  const badgeOptions = document.querySelectorAll('.badge-option');
  badgeOptions.forEach(option => {
    option.addEventListener('click', () => {
      // Remove active class from all options
      badgeOptions.forEach(opt => opt.classList.remove('active'));
      // Add active class to clicked option
      option.classList.add('active');
      // Update current badge style
      currentBadgeStyle = option.dataset.style;
      // Update badge preview
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
    
    // Try to fetch the website
    const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`, {
      method: 'GET',
      headers: { 'Accept': 'text/html' }
    });
    
    if (!response.ok) {
      console.warn("⚠️ Could not fetch website for verification");
      return { verified: false, reason: "Could not access website" };
    }
    
    const html = await response.text();
    
    // Check for badge markers
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
    // If verification fails, we'll allow submission with warning
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
      
      // Show pricing section after verification
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
  // Plan selection
  const planButtons = document.querySelectorAll('.plan-btn');
  planButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove selected from all
      planButtons.forEach(b => {
        b.classList.remove('selected');
        const planName = b.closest('.pricing-card').querySelector('h4').textContent;
        b.textContent = `Select ${planName}`;
      });
      
      // Add selected to clicked
      btn.classList.add('selected');
      btn.textContent = 'Selected ✓';
      
      // Update selected plan
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
  
  // Start price flipping animation
  startPriceFlip();
}

function startPriceFlip() {
  setInterval(() => {
    const prices = document.querySelectorAll('.price');
    
    // Toggle currency
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

// ===== GOOGLE FORMS SUBMISSION =====
async function submitToGoogleForms(formData) {
  console.log("📤 Submitting to Google Forms...");
  try {
    const iframe = document.createElement('iframe');
    iframe.name = 'google_forms_submit';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const form = document.createElement('form');
    form.target = 'google_forms_submit';
    form.method = 'POST';
    form.action = CONFIG.GOOGLE_FORM_URL;

    let allFounders = formData.founders;
    if (formData.cofounders) allFounders += ` | Co-founders: ${formData.cofounders}`;
    if (formData.email) allFounders += ` | Email: ${formData.email}`;
    if (formData.plan) allFounders += ` | Plan: ${formData.plan}`;
    if (formData.paymentId && formData.paymentId !== 'free_plan') {
      allFounders += ` | Payment ID: ${formData.paymentId}`;
    }

    const fields = [
      { id: CONFIG.ENTRY_IDS.name, value: formData.name },
      { id: CONFIG.ENTRY_IDS.tagline, value: formData.tagline },
      { id: CONFIG.ENTRY_IDS.url, value: formData.url },
      { id: CONFIG.ENTRY_IDS.description, value: formData.description },
      { id: CONFIG.ENTRY_IDS.category, value: formData.category },
      { id: CONFIG.ENTRY_IDS.tags, value: formData.tags || "" },
      { id: CONFIG.ENTRY_IDS.twitter, value: formData.twitter || "" },
      { id: CONFIG.ENTRY_IDS.founders, value: allFounders }
    ];

    fields.forEach(field => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = field.id;
      input.value = field.value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    setTimeout(() => {
      document.body.removeChild(form);
      document.body.removeChild(iframe);
    }, 2000);

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

    // URL validation and auto-prefix
    if (formData.url && !formData.url.startsWith("http")) {
      formData.url = "https://" + formData.url;
    }

    // Validation
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

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast("⚠️ Please enter a valid email address", "error");
      return;
    }

    // ===== ANTI-SPAM CHECK =====
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
      // 🔴🔴🔴 PROCESSING REAL PAYMENT WITH LIVE RAZORPAY KEYS 🔴🔴🔴
      // 🔴 USES: ${RAZORPAY_KEY_ID} and ${RAZORPAY_KEY_SECRET} 🔴
      let paymentResult = { success: true, paymentId: 'free_plan' };
      
      if (selectedPlan !== 'free') {
        showToast(`💳 Processing ${PRICING_PLANS[selectedPlan].name} payment...`, 'info');
        
        // 🔴 CALLING LIVE PAYMENT FUNCTION - USER WILL BE CHARGED REAL MONEY 🔴
        paymentResult = await processPayment(selectedPlan, formData);
        // 🔴🔴🔴 END OF LIVE PAYMENT PROCESSING 🔴🔴🔴
        
        if (!paymentResult.success) {
          throw new Error('Payment processing failed');
        }
        
        showToast("✅ Payment successful! Submitting your tool...", "success");
        console.log('💰 LIVE Payment completed:', paymentResult);
      }

      // Add payment info to form data
      formData.paymentId = paymentResult.paymentId;

      // ===== ADD TO ANTI-SPAM SYSTEM =====
      antiSpam.addSubmission(formData.name, formData.url, formData.email);

      // Submit to Google Forms
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
    }
  });
}

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ StartupGrower Submit System Ready!");
  console.log("🔴 LIVE MODE: Using Razorpay Live Keys from Environment Variables");
  console.log("🔴 Key ID: " + (CONFIG.RAZORPAY_KEY_ID.startsWith('${') ? 'NOT SET - Check Cloudflare Env Variables' : 'Loaded from ENV'));
  console.log("🔴 Secret Key: " + (CONFIG.RAZORPAY_KEY_SECRET.startsWith('${') ? 'NOT SET - Check Cloudflare Env Variables' : 'Loaded from ENV'));
  
  // Set up event listeners for progress tracking
  const requiredFieldIds = ["toolName", "tagline", "url", "description", "category", "founders", "email"];
  
  requiredFieldIds.forEach(id => {
    const field = document.getElementById(id);
    if (field) {
      field.addEventListener("input", updateProgress);
      field.addEventListener("change", updateProgress);
    }
  });
  
  // Initialize badge system
  initializeBadgePreviews();
  updateBadgePreview();
  setupBadgeVerification();
  
  // Initialize pricing system
  initializePricing();
  
  // Set up form submission
  setupFormSubmission();
  
  // Initial progress update
  updateProgress();
});