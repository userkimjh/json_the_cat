const request = require('request');
const argv = process.argv;

const breed = argv[2];

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback('Error fetch details:', null);
    } else {
      const data = JSON.parse(body); 
      if (!data.length) {
        callback("Breed not found!", null);
      } else {
        callback(null,data[0].description);
      }
    } 
  })
};

module.exports = { fetchBreedDescription };