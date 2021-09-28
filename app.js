const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// console.log(process.argv);

const address = process.argv[2];


if(!address) {
  return console.log('Please provide a correct address');
}

geocode(address, (error, { latitude, longitude, location } = {}) => {

  if(error) return console.log(`Error: ${error}`)

  forecast(latitude, longitude, (error, forecastData) => {

    if(error) return console.log(error);

    console.log(location);
    console.log(forecastData);
  });
});