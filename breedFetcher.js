const request = require('request');
const argv = process.argv;

const breed = argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response ,body) => {
  if (error) {
    console.log('Page not found')
  } else {
    const data = JSON.parse(body); 
    if (!data.length) {
      console.log("Breed not found!")
    } else {
      console.log(data[0].description)
    }
  }
})