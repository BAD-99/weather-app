import "./style.css";
import getWeatherData, * as apis from "./api.js";
import * as dom from "./dom.js";

//Todo: implement error handling and manually entering location
const loc = apis.getLocation();
loc
  .then((geoPos) => {
    console.log(geoPos);
    return getWeatherData(geoPos.coords.latitude, geoPos.coords.longitude);
  })
  .then((weatherData) => {
    console.log(weatherData.forecast);
    dom.displayHourlyTemperatures(weatherData.forecast.forecastday[0].hour)
  });
