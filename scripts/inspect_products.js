const fs = require('fs');

const content = fs.readFileSync('src/lib/constants.ts', 'utf8');
const regex = /name:\s*"([^"]+)"/g;
let match;
const names = [];
while ((match = regex.exec(content)) !== null) {
  names.push(match[1]);
}

console.log('Total products found:', names.length);

const suspicious = names.filter(n => 
  /[@0µ$3!ĠůïÈ]/.test(n) || 
  n.includes('Celestial') || 
  n.includes('Worn by') || 
  n.includes('Worn By')
);

console.log('Suspicious names count:', suspicious.length);
console.log(JSON.stringify(suspicious, null, 2));
