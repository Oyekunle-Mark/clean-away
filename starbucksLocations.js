const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('./csv/starbucks.csv'),
  crlfDelay: Infinity,
});

rl.on('line', line => {
  console.log(`Line from file: ${line}`);
});
