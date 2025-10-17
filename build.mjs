// build.mjs
import fs from 'fs';
import path from 'path';

const apiKey = process.env.FIREBASE_API_KEY;

if (!apiKey) {
  console.error('❌ FIREBASE_API_KEY is not set!');
  process.exit(1);
}

// Files that need API key replacement
const filesToProcess = [
  'Frontend/auth.js',
  'Frontend/feed.js'
];

filesToProcess.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/\$\{FIREBASE_API_KEY\}/g, apiKey);
      fs.writeFileSync(filePath, content);
      console.log(`✅ Replaced ${FIREBASE_API_KEY} in ${filePath}`);
    } else {
      console.log(`⚠️  File not found: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
});

console.log('✅ All Firebase API keys have been replaced!');