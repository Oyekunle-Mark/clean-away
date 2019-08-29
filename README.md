# clean-away

Uses the node.js file management system to clean a csv file.

The starbucksLocations.js creates an array of object of this format

```javascript
  {
        name: 'Domino"s Pizza',
        description: 'code and pizza.',
        image_url: 'https://image.flaticon.com/icons/svg/201/201559.svg',
        address: '340/344 Ikorodu Rd, Anthony, Lagos',
        latitude: '6.5663896',
        longitude: '3.3662124',
      }
```

The script writes the output of the script to the `starbucks.js` file in the js folder.

The starbucksLocations2.js works the same way as the starbucksLocations.js script but selects on every fifth row.

The script writes the output the array of 5000 objects to the `starbucks2.js` file in the js folder.

The third script is the `reviewsRandom.js`. It generates reviews using random data. This is the format of the script:

```javascript
{
    "quietness": 3,
    "wifi_speed": 3,
    "close_late": 2,
    "community": 4,
    "accessibility": 1,
    "description": "A few things could have gone better. There were disturbances during work and I really couldn't achieve much. Wifi was great though.",
    "user_id": 4,
    "location_id": 1
  }
```

Another file, `local.js` converts a javascript object to JSON and writes the output to a file.

## Author

Oyekunle Oloyede
