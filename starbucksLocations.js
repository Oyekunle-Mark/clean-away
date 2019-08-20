const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('./csv/starbucks.csv'),
  crlfDelay: Infinity,
});

const starbucksLocations = [];

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiLqR1M8Oq2awl4d6DrzDOeN90CZCIHZA6M5YI6GIg77mQgH4AwQ',
  'https://purewows3.imgix.net/images/articles/2017_01/bespoke_coworking_spaces_san_francisco.png?auto=format,compress&cs=strip',
  'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Feustaciahuen%2Ffiles%2F2017%2F03%2FNeuehouse-3-1200x675.jpg',
  'https://www.rent24.com/wp-content/uploads/coworking-space-berlin-schoeneberg.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Gy7PX83f8LYEiwxo_rpspew0gy_AaWxI3IiSQWWEX62u7bmQqw',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCO9ZF-XM5w2290UTDjDq-KfOvNo71cWB0CuaEQK_Y22d5ch4QJg',
  'http://thespaces.com/wp-content/uploads/2017/02/Primary-Co-Working-NYC.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dDHB_nliR3160ubZgp6J9A3nfPUsHMXcoVGwgb4x3oBzgGNU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7aBKuIsNaZaqBosrlp3oz3ziEmI2dhtzTdijGrcmwWIYSBQs',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbifgcp_29eEnE5BozbdrZweuFHtvN-sJRsooOtmBrDAQqHSDW',
];

async function readAndWriteLines() {
  for await (const line of rl) {
    const lineArr = line.split(',');
    const imgNumber = Math.floor(Math.random() * 10);

    starbucksLocations.push({
      name: lineArr[2],
      description: 'A Starbucks shop to work out from',
      image_url: images[imgNumber],
      address: `${lineArr[4]}, ${lineArr[5]}, ${lineArr[6]}, ${lineArr[7]}`
        .replace(/"/g, '')
        .replace(/\s+/g, ' '),
      latitude: lineArr[lineArr.length - 1],
      longitude: lineArr[lineArr.length - 2],
    });
  }

  console.log(starbucksLocations);
}

readAndWriteLines();
