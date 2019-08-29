const fs = require('fs');

const local = [
  {
    name: 'SPAR Ilupeju',
    description: 'A spar to code in.',
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dDHB_nliR3160ubZgp6J9A3nfPUsHMXcoVGwgb4x3oBzgGNU',
    address: '31, Ilupeju Mall, 33 Town Planning Way, Ilupeju 100252, Lagos',
    latitude: '6.553909',
    longitude: '3.3663045',
  },
  {
    name: 'Domino"s Pizza',
    description: 'code and pizza.',
    image_url:
      'https://purewows3.imgix.net/images/articles/2017_01/bespoke_coworking_spaces_san_francisco.png?auto=format,compress&cs=strip',
    address: '340/344 Ikorodu Rd, Anthony, Lagos',
    latitude: '6.5663896',
    longitude: '3.3662124',
  },
  {
    name: 'Babacorvee Plaza',
    description: 'A cool spot to code in.',
    image_url:
      'https://www.rent24.com/wp-content/uploads/coworking-space-berlin-schoeneberg.jpg',
    address: 'Babacorvee Plaza, Onipanu, 55 Shipeolu St, Somolu, Lagos',
    latitude: '6.5400607',
    longitude: '3.3647819',
  },
  {
    name: 'Chicken Republic',
    description: 'A fast food for work.',
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiLqR1M8Oq2awl4d6DrzDOeN90CZCIHZA6M5YI6GIg77mQgH4AwQ',
    address: '10 Ikorodu Rd, Yaba, Lagos',
    latitude: '6.517845',
    longitude: '3.3667155',
  },
  {
    name: 'Vintage Suites',
    description: 'Work away from this place',
    image_url:
      'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Feustaciahuen%2Ffiles%2F2017%2F03%2FNeuehouse-3-1200x675.jpg',
    address: '15c Akinhanmi St, Surulere, Lagos',
    latitude: '6.5152371',
    longitude: '3.3629375',
  },
  {
    name: 'Swisscottage Suites',
    description: 'Work away from this place',
    image_url:
      'https://purewows3.imgix.net/images/articles/2017_01/bespoke_coworking_spaces_san_francisco.png?auto=format,compress&cs=strip',
    address: '18 Sunday Adigun St, Oregun Ikeja',
    latitude: '6.6117669',
    longitude: '3.3592648',
  },
  {
    name: 'Lagos State Digital Village',
    description: 'Work away from this place',
    image_url:
      'http://thespaces.com/wp-content/uploads/2017/02/Primary-Co-Working-NYC.jpg',
    address: 'Oregun, Ikeja',
    latitude: '6.6117669',
    longitude: '3.3592648',
  },
  {
    name: 'Apex B Shopping Mall/Boluke Pharmacy',
    description: 'Work away from this place',
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Gy7PX83f8LYEiwxo_rpspew0gy_AaWxI3IiSQWWEX62u7bmQqw',
    address: 'Iju Rd, Ifako Agege, Ikeja',
    latitude: '6.6238419',
    longitude: '3.323572',
  },
];

fs.writeFile(
  './js/lagosLocations.js',
  JSON.stringify(local, null, 2),
  'utf-8',
  function(err) {
    if (err) {
      return console.log(err);
    }

    console.log('The file is saved and ready for action!');
  },
);
