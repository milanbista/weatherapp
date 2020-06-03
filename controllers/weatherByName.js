const axios = require("axios");

module.exports = async (req, res) => {
  let data;
  let cityName = req.body.city;
  await axios({
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.APP_ID}&units=metric`,

    responseType: "json",
  })
    .then((response) => {
      data = response;
    })
    .catch((err) => {
      res.render("weather.hbs", {
        weatherCondition: "No Data Matched!",
        cityName: "",
        temperature: "0.00",
      });
    });

  res.render("weather.hbs", {
    weatherCondition: data.data.weather[0].description,
    cityName: data.data.name,
    temperature: data.data.main.temp,
  });
};
