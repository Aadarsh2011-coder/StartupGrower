
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
// import { 
//   getAuth, 
//   GoogleAuthProvider, 
//   signInWithPopup, 
//   onAuthStateChanged 
// } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// // Firebase Config
// const firebaseConfig = {
//   apiKey: "AIzaSyBJxLH8S259toa65STB7cahCRgnJ8r2Zmg",
//   authDomain: "startupgrower-bf739.firebaseapp.com",
//   projectId: "startupgrower-bf739",
//   storageBucket: "startupgrower-bf739.appspot.com",
//   messagingSenderId: "118520060569",
//   appId: "1:118520060569:web:5f0d214a50ff5546d17608",
//   measurementId: "G-LL4GLJJN3E"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// // Google Sheets Config
// const SPREADSHEET_ID = "1525cOECoV2sXJjpgrjicGp6MIREXuxtCRp9Be27MK6w";
// const API_KEY = "AIzaSyDacwIuZ4L-ilVpcb1smt8pJ19TLNj06Eo";
// const RANGE = "Form responses 1!A:L";

// // Apps Script Web App URL - UPDATE THIS WITH YOUR DEPLOYMENT URL
// const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzAkmNILfwDkP9628ut1yd8J1aETr2OIf65BQt7fQH8GY2XNXRABpcxkv__YpO5vA9k/exec";

// const VOTED_KEY = "user_upvotes";
// const feedContainer = document.getElementById("feed");
// const signinBtn = document.getElementById("signinBtn");

// // Sign-in with Google
// signinBtn.addEventListener("click", async () => {
//   try {
//     await signInWithPopup(auth, provider);
//     alert("✅ Signed in successfully!");
//   } catch (error) {
//     console.error("Sign-in error:", error);
//     alert("❌ Sign-in failed. Try again.");
//   }
// });

// // Load Feed
// async function fetchFeedData() {
//   feedContainer.innerHTML = `<div class="loading-text">Loading feed...</div>`;
//   try {
//     const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(RANGE)}?key=${API_KEY}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     const values = data.values;
    
//     if (!values || values.length <= 1) {
//       feedContainer.innerHTML = "<p>No startups found.</p>";
//       return;
//     }

//     const user = auth.currentUser;
//     const allVotes = JSON.parse(localStorage.getItem(VOTED_KEY) || "{}");
//     const userVotes = user ? allVotes[user.email] || [] : [];

//     feedContainer.innerHTML = "";

//     // Column mapping based on your headers:
//     // A=Timestamp, B=Name, C=Tagline, D=Website, E=Description, 
//     // F=Category, G=Tags, H=Twitter, I=Founder, J=Cofounder, K=Votes, L=Email
//     values.slice(1).forEach((row, i) => {
//       const timestamp = row[0] || "";
//       const name = row[1] || "Untitled Startup";
//       const tagline = row[2] || "";
//       const website = row[3] || "#";
//       const description = row[4] || "";
//       const category = row[5] || "N/A";
//       const tags = row[6] || "";
//       const twitter = row[7] || "";
//       const founder = row[8] || "N/A";
//       const cofounder = row[9] || "";
//       const votes = row[10] || 0;
//       const email = row[11] || ""; // Column L for email
      
//       // Calculate actual sheet row number (i=0 is row 2, since row 1 is headers)
//       const rowNumber = i + 2;

//       const card = document.createElement("div");
//       card.classList.add("feed-item");
//       card.innerHTML = `
//         <div class="feed-header">
//           <h3>${name}</h3>
//           <a href="${website}" target="_blank" class="visit-btn">Visit Tool →</a>
//         </div>
        
//         <div class="meta">
//           <p><strong>🏷️ Category:</strong> ${category}</p>
//           <p><strong>👥 Founder:</strong> ${founder}${cofounder ? ` & Co-founder: ${cofounder}` : ""}</p>
//           ${twitter ? `<p><strong>🐦 Twitter:</strong> <a href="${twitter}" target="_blank">${twitter}</a></p>` : ""}
//           ${email ? `<p><strong>📧 Contact:</strong> ${email}</p>` : ""}
//         </div>
        
//         ${tagline ? `<p class="tagline"><strong>💡 Tagline:</strong> ${tagline}</p>` : ""}
        
//         ${description ? `<p><strong>📝 Description:</strong> ${description}</p>` : ""}
        
//         ${tags ? `<div class="tags">
//           <strong>🏷️ Tags:</strong>
//           ${tags.split(",").map(t => `<span class="tag">${t.trim()}</span>`).join("")}
//         </div>` : ""}
        
//         <div class="upvote-container">
//           <button class="upvote-btn" data-row="${rowNumber}" data-name="${name}">⬆ Upvote</button>
//           <span class="upvote-count">${votes}</span>
//         </div>
//       `;
//       feedContainer.appendChild(card);

//       const upvoteBtn = card.querySelector(".upvote-btn");
//       const upvoteCount = card.querySelector(".upvote-count");

//       // Check if user already voted
//       if (userVotes.includes(name)) {
//         upvoteBtn.disabled = true;
//         upvoteBtn.textContent = "✅ Voted";
//         upvoteBtn.style.background = "#6b7280";
//       }

//       // Upvote click handler
//       upvoteBtn.addEventListener("click", async () => {
//         const currentUser = auth.currentUser;
//         if (!currentUser) {
//           alert("Please sign in first to upvote.");
//           return;
//         }

//         const allVotesNow = JSON.parse(localStorage.getItem(VOTED_KEY) || "{}");
//         const myVotes = allVotesNow[currentUser.email] || [];

//         if (myVotes.includes(name)) {
//           alert("You already upvoted this startup!");
//           return;
//         }

//         // Disable button immediately to prevent double-clicks
//         upvoteBtn.disabled = true;
//         const originalText = upvoteBtn.textContent;
//         upvoteBtn.textContent = "Voting...";

//         try {
//           console.log(`Sending vote for "${name}" at row ${rowNumber}`);
          
//           const res = await fetch(`${WEB_APP_URL}?row=${rowNumber}`, {
//             method: 'GET'
//           });
          
//           if (!res.ok) {
//             throw new Error(`HTTP error! status: ${res.status}`);
//           }
          
//           const result = await res.json();
//           console.log("Vote response:", result);

//           if (result.success) {
//             // Update vote count display
//             upvoteCount.textContent = result.votes;
            
//             // Save to localStorage
//             myVotes.push(name);
//             allVotesNow[currentUser.email] = myVotes;
//             localStorage.setItem(VOTED_KEY, JSON.stringify(allVotesNow));

//             // Update button
//             upvoteBtn.textContent = "✅ Voted";
//             upvoteBtn.style.background = "#6b7280";

//             // Animation
//             upvoteCount.classList.add("upvote-pop");
//             setTimeout(() => upvoteCount.classList.remove("upvote-pop"), 300);
            
//             console.log("✅ Vote successful!");
//           } else {
//             throw new Error(result.error || "Unknown error");
//           }
//         } catch (err) {
//           console.error("Error sending vote:", err);
//           alert("Vote failed: " + err.message);
          
//           // Re-enable button on error
//           upvoteBtn.disabled = false;
//           upvoteBtn.textContent = originalText;
//         }
//       });
//     });
//   } catch (error) {
//     console.error("Error fetching feed data:", error);
//     feedContainer.innerHTML = "<p>Error loading feed. Please refresh the page.</p>";
//   }
// }

// // Watch auth state
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     signinBtn.textContent = `Signed in as ${user.displayName || user.email}`;
//     signinBtn.disabled = true;
//   } else {
//     signinBtn.textContent = "Sign in with Google";
//     signinBtn.disabled = false;
//   }
//   fetchFeedData();
// });







import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBJxLH8S259toa65STB7cahCRgnJ8r2Zmg",
  authDomain: "startupgrower-bf739.firebaseapp.com",
  projectId: "startupgrower-bf739",
  storageBucket: "startupgrower-bf739.appspot.com",
  messagingSenderId: "118520060569",
  appId: "1:118520060569:web:5f0d214a50ff5546d17608",
  measurementId: "G-LL4GLJJN3E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google Sheets Config
const SPREADSHEET_ID = "1525cOECoV2sXJjpgrjicGp6MIREXuxtCRp9Be27MK6w";
const API_KEY = "AIzaSyDacwIuZ4L-ilVpcb1smt8pJ19TLNj06Eo";
const RANGE = "Form responses 1!A:L";

// Apps Script Web App URL
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzAkmNILfwDkP9628ut1yd8J1aETr2OIf65BQt7fQH8GY2XNXRABpcxkv__YpO5vA9k/exec";

const VOTED_KEY = "user_upvotes";
const feedContainer = document.getElementById("feed");
const signinBtn = document.getElementById("signinBtn");
const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");
const sortFilter = document.getElementById("sortFilter");
const resultsCount = document.getElementById("resultsCount");

// Store all feed data globally
let allFeedData = [];

// Sign-in with Google
signinBtn.addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
    alert("✅ Signed in successfully!");
  } catch (error) {
    console.error("Sign-in error:", error);
    alert("❌ Sign-in failed. Try again.");
  }
});

// Parse and store feed data
function parseFeedData(values) {
  if (!values || values.length <= 1) return [];
  
  return values.slice(1).map((row, i) => ({
    timestamp: row[0] || "",
    name: row[1] || "Untitled Startup",
    tagline: row[2] || "",
    website: row[3] || "#",
    description: row[4] || "",
    category: row[5] || "N/A",
    tags: row[6] || "",
    twitter: row[7] || "",
    founder: row[8] || "N/A",
    cofounder: row[9] || "",
    votes: parseInt(row[10]) || 0,
    email: row[11] || "",
    rowNumber: i + 2 // Actual sheet row number
  }));
}

// Filter and sort feed data
function filterAndSortData(data) {
  let filtered = [...data];
  
  // Filter by category
  const selectedCategory = categoryFilter.value;
  if (selectedCategory) {
    filtered = filtered.filter(item => item.category === selectedCategory);
  }
  
  // Filter by search
  const searchTerm = searchInput.value.toLowerCase().trim();
  if (searchTerm) {
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(searchTerm) ||
      item.tagline.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    );
  }
  
  // Sort
  const sortBy = sortFilter.value;
  if (sortBy === "latest") {
    filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  } else if (sortBy === "votes") {
    filtered.sort((a, b) => b.votes - a.votes);
  }
  
  return filtered;
}

// Render feed items
function renderFeed(data) {
  const user = auth.currentUser;
  const allVotes = JSON.parse(localStorage.getItem(VOTED_KEY) || "{}");
  const userVotes = user ? allVotes[user.email] || [] : [];

  feedContainer.innerHTML = "";
  
  if (data.length === 0) {
    feedContainer.innerHTML = "<p style='text-align: center; color: #6b7280;'>No startups found matching your filters.</p>";
    resultsCount.textContent = "";
    return;
  }
  
  resultsCount.textContent = `Showing ${data.length} startup${data.length !== 1 ? 's' : ''}`;

  data.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("feed-item");
    card.innerHTML = `
      <div class="feed-header">
        <h3>${item.name}</h3>
        <a href="${item.website}" target="_blank" class="visit-btn">Visit Tool →</a>
      </div>
      
      <div class="meta">
        <p><strong>🏷️ Category:</strong> ${item.category}</p>
        <p><strong>👥 Founder:</strong> ${item.founder}${item.cofounder ? ` & Co-founder: ${item.cofounder}` : ""}</p>
        ${item.twitter ? `<p><strong>🐦 Twitter:</strong> <a href="${item.twitter}" target="_blank">${item.twitter}</a></p>` : ""}
        ${item.email ? `<p><strong>📧 Contact:</strong> ${item.email}</p>` : ""}
      </div>


    
      
      ${item.tagline ? `<p class="tagline"><strong>💡 Tagline:</strong> ${item.tagline}</p>` : ""}
      
      ${item.description ? `<p><strong>📝 Description:</strong> ${item.description}</p>` : ""}
      
      ${item.tags ? `<div class="tags">
        <strong>🏷️ Tags:</strong>
        ${item.tags.split(",").map(t => `<span class="tag">${t.trim()}</span>`).join("")}
      </div>` : ""}
      
      <div class="upvote-container">
        <button class="upvote-btn" data-row="${item.rowNumber}" data-name="${item.name}">⬆ Upvote</button>
        <span class="upvote-count">${item.votes}</span>
      </div>
    `;
    feedContainer.appendChild(card);

    const upvoteBtn = card.querySelector(".upvote-btn");
    const upvoteCount = card.querySelector(".upvote-count");

    // Check if user already voted
    if (userVotes.includes(item.name)) {
      upvoteBtn.disabled = true;
      upvoteBtn.textContent = "✅ Voted";
      upvoteBtn.style.background = "#6b7280";
    }

    // Upvote click handler
    upvoteBtn.addEventListener("click", async () => {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        alert("Please sign in first to upvote.");
        return;
      }

      const allVotesNow = JSON.parse(localStorage.getItem(VOTED_KEY) || "{}");
      const myVotes = allVotesNow[currentUser.email] || [];

      if (myVotes.includes(item.name)) {
        alert("You already upvoted this startup!");
        return;
      }

      upvoteBtn.disabled = true;
      const originalText = upvoteBtn.textContent;
      upvoteBtn.textContent = "Voting...";

      try {
        console.log(`Sending vote for "${item.name}" at row ${item.rowNumber}`);
        
        const res = await fetch(`${WEB_APP_URL}?row=${item.rowNumber}`, {
          method: 'GET'
        });
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const result = await res.json();
        console.log("Vote response:", result);

        if (result.success) {
          // Update vote count in allFeedData
          const dataItem = allFeedData.find(d => d.name === item.name);
          if (dataItem) dataItem.votes = result.votes;
          
          upvoteCount.textContent = result.votes;
          
          myVotes.push(item.name);
          allVotesNow[currentUser.email] = myVotes;
          localStorage.setItem(VOTED_KEY, JSON.stringify(allVotesNow));

          upvoteBtn.textContent = "✅ Voted";
          upvoteBtn.style.background = "#6b7280";

          upvoteCount.classList.add("upvote-pop");
          setTimeout(() => upvoteCount.classList.remove("upvote-pop"), 300);
          
          console.log("✅ Vote successful!");
        } else {
          throw new Error(result.error || "Unknown error");
        }
      } catch (err) {
        console.error("Error sending vote:", err);
        alert("Vote failed: " + err.message);
        
        upvoteBtn.disabled = false;
        upvoteBtn.textContent = originalText;
      }
    });
  });
}

// Load Feed
async function fetchFeedData() {
  feedContainer.innerHTML = `<div class="loading-text">Loading feed...</div>`;
  resultsCount.textContent = "";
  
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(RANGE)}?key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    
    allFeedData = parseFeedData(data.values);
    
    if (allFeedData.length === 0) {
      feedContainer.innerHTML = "<p style='text-align: center; color: #6b7280;'>No startups found.</p>";
      return;
    }

    const filteredData = filterAndSortData(allFeedData);
    renderFeed(filteredData);
  } catch (error) {
    console.error("Error fetching feed data:", error);
    feedContainer.innerHTML = "<p style='text-align: center; color: #ef4444;'>Error loading feed. Please refresh the page.</p>";
  }
}

// Refresh feed when filters change
function refreshFeed() {
  const filteredData = filterAndSortData(allFeedData);
  renderFeed(filteredData);
}

// Add event listeners for filters
categoryFilter.addEventListener("change", refreshFeed);
sortFilter.addEventListener("change", refreshFeed);
searchInput.addEventListener("input", refreshFeed);

// Watch auth state
onAuthStateChanged(auth, (user) => {
  if (user) {
    signinBtn.textContent = `Signed in as ${user.displayName || user.email}`;
    signinBtn.disabled = true;
  } else {
    signinBtn.textContent = "Sign in with Google";
    signinBtn.disabled = false;
  }
  fetchFeedData();
});
