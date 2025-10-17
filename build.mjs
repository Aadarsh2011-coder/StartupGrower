// // build.mjs
// import fs from 'fs';
// import path from 'path';

// const apiKey = process.env.FIREBASE_API_KEY;

// if (!apiKey) {
//   console.error('❌ FIREBASE_API_KEY is not set!');
//   process.exit(1);
// }

// // Files that need API key replacement
// const filesToProcess = [
//   'Frontend/auth.js',
//   'Frontend/feed.js'
// ];

// filesToProcess.forEach(filePath => {
//   try {
//     if (fs.existsSync(filePath)) {
//       let content = fs.readFileSync(filePath, 'utf8');
//       content = content.replace(/\$\{FIREBASE_API_KEY\}/g, apiKey);
//       fs.writeFileSync(filePath, content);
//       console.log(`✅ Replaced ${FIREBASE_API_KEY} in ${filePath}`);
//     } else {
//       console.log(`⚠️  File not found: ${filePath}`);
//     }
//   } catch (error) {
//     console.error(`❌ Error processing ${filePath}:`, error.message);
//   }
// });

// console.log('✅ All Firebase API keys have been replaced!');







// build.mjs
import fs from 'fs';

// Get environment variables
const firebaseApiKey = process.env.FIREBASE_API_KEY;
const sheetsApiKey = process.env.GOOGLE_SHEETS_API_KEY;

// Check required variables
if (!firebaseApiKey) {
  console.error('❌ FIREBASE_API_KEY is not set!');
  process.exit(1);
}

if (!sheetsApiKey) {
  console.error('❌ GOOGLE_SHEETS_API_KEY is not set!');
  process.exit(1);
}

// Files to process
const filesToProcess = [
  'Frontend/auth.js',
  'Frontend/feed.js'
];

filesToProcess.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace Firebase API key
      content = content.replace(/\$\{FIREBASE_API_KEY\}/g, firebaseApiKey);
      
      // Replace Google Sheets API key (only in feed.js)
      if (filePath.includes('feed.js')) {
        content = content.replace(/\$\{GOOGLE_SHEETS_API_KEY\}/g, sheetsApiKey);
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`✅ Processed secrets in ${filePath}`);
    } else {
      console.log(`⚠️  File not found: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
});

console.log('✅ All secrets have been replaced!');