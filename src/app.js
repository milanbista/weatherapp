const express = require("express");
const hbs = require("hbs");
const env = require("dotenv").config();
const bodyParser = require("body-parser");

const { getWeather, setWeather } = require("../routes.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(express.static("public"));

app.use("/", getWeather);
app.use("/city", setWeather);

//STARTING THE SERVER
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
