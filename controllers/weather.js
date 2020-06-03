const axios = require("axios");

module.exports = async (req, res) => {
  let data;
  await axios({
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${process.env.APP_ID}&units=metric`,
    responseType: "json",
  })
    .then((response) => {
      data = response;
    })
    .catch((err) => {
      console.log(`Error occured ${err}`);
    });
  res.render("weather.hbs", {
    weatherCondition: data.data.weather[0].description,
    cityName: data.data.name,
    temperature: data.data.main.temp,
  });
};
