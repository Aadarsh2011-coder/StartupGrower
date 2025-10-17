// build.mjs
import fs from 'fs';

const apiKey = process.env.FIREBASE_API_KEY;

if (!apiKey) {
  console.error('❌ FIREBASE_API_KEY is not set!');
  process.exit(1);
}

const filePath = 'Frontend/auth.js';
let content = fs.readFileSync(filePath, 'utf8');
content = content.replace(/\$\{FIREBASE_API_KEY\}/g, apiKey);
fs.writeFileSync(filePath, content);

console.log('✅ Replaced ${FIREBASE_API_KEY} with real key.');