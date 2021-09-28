const request = require('request');

const forecast = (long, lat, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=32169b2fd90037874dc5d0a0e97de9ad&query=${lat},${long}&units=f`

  request( { url: url, json: true}, (error, response) => {
    if(error) {
      callback(`An error has occured: ${error.code}`)
    } else if (response.body.success === false) {
      callback(`There was an error \n code: ${response.body.error.info}`)
    } else {
      const data = response.body.current
      callback(undefined, {
        data: `The weather is ${data.weather_descriptions[0].toLowerCase()}. It is currently ${data.temperature}. It feels like ${data.feelslike}`
      });
    };
  });
};

module.exports = forecast;