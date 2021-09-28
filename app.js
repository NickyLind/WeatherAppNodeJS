const request = require('request');
const geocode = require('./utils/geocode');

// const url = 'http://api.weatherstack.com/current?access_key=32169b2fd90037874dc5d0a0e97de9ad&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log(`An error has occured: ${error.code}`);
//   } else if (response.body.success === false) {
//     console.log(`There was an error - code: ${response.body.error.code} \n message: ${response.body.error.type} - ${response.body.error.info}`);
//   } else {
//     const data = response.body.current
//     console.log(`The weather is ${data.weather_descriptions[0].toLowerCase()}. It is currently ${data.temperature}. It feels like ${data.feelslike}`);
//   }
// });

geocode('Duluth Minnesota', (error, data) => {
  console.log('Error' , error);
  console.log('Data: ', data);
});