const router = require("express").Router();
const weather = require("./controllers/weather");
const weatherByName = require("./controllers/weatherByName");

module.exports.getWeather = router.get("/", weather);

module.exports.setWeather = router.post("/", weatherByName);
