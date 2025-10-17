import fs from 'fs';
const key = process.env.FIREBASE_API_KEY;
let code = fs.readFileSync('auth.js', 'utf8');
fs.writeFileSync('auth.js', code.replace(/\$\{FIREBASE_API_KEY\}/g, key));