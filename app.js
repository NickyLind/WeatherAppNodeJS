const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=32169b2fd90037874dc5d0a0e97de9ad&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
  const data = response.body.current
  console.log(`The weather is ${data.weather_descriptions[0].toLowerCase()}. It is currently ${data.temperature}. It feels like ${data.feelslike}`);
});

const geocodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGluZGEwOTMiLCJhIjoiY2t0ejhwZTN0M2FzaTJvcDNnaTJ5enJ4eSJ9.nDI9-uHMJ14I0LjTJakqqg&limit=1'

request({ url: geocodingURL, json: true }, (error, response) => {
  const data = response.body.features[0].center
  const [long, lat] = data
  console.log(`longitude: ${long}, latitude: ${lat}`);
});