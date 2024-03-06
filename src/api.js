const k = "f09a2da2a20345fcbab110929242802";
const base = "http://api.weatherapi.com/v1";

export default async function getWeatherData(lat, long) {
  try {
    const response = await fetch(
      //   base + "/forecast.json?key=" + k + "&q=" + lat + "," + long,
      `${base}/forecast.json?key=${k}&q=${lat},${long}&days=3`,
      {
        mode: "cors",
      }
    );
    const json = await response.json();
    return json;
  } catch (error) {}
}

export async function getLocation() {
  let navPromise = new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      try {
        navigator.geolocation.getCurrentPosition((pos) => {
          resolve(pos);
        });
      } catch {
        reject("Couldn't get location");
      }
    } else {
      reject("Geolocation not available");
    }
  });
  return navPromise;
}

const impTemp = " °F";
const impDist = "mph";
const metTemp = " °C";
const metDist = "kph";

export function processWeatherData(weatherData, useMetric) {
  const current = {};
  const hourly = [];
  const daily = [];
  console.log(weatherData);
  if (!useMetric) {
    current.temp = weatherData.current.temp_f + impTemp;
    current.feelsLike = weatherData.current.feelsLike_f + impTemp;
    current.high = weatherData.forecast.forecastday[0].day.maxtemp_f + impTemp;
    current.low = weatherData.forecast.forecastday[0].day.mintemp_f + impTemp;
    current.location = weatherData.location.name;
    current.condition = weatherData.current.condition;
    current.humidity = weatherData.current.humidity;
    current.wind =
      weatherData.current.wind_mph +
      impDist +
      " " +
      weatherData.current.wind_dir;

    for (let i = 0; i < 3; i++) {}
  }

  const currentHour = new Date(Date.now()).getHours() - 1;
  for (let i = 0; i < 24; i++) {
    const day = i + currentHour >= 24 ? 1 : 0;
    const hour = (i + currentHour) % 24;
    const selected = weatherData.forecast.forecastday[day].hour[hour];
    hourly[i] = {};
    hourly[i].hour = `${(hour % 12) + 1}${
      hour > 10 && hour != 23 ? "PM" : "AM"
    }`;
    hourly[i].temperature = useMetric ? selected.temp_c : selected.temp_f;
    hourly[i].rain = selected.will_it_rain;
    hourly[i].snow = selected.will_it_snow;
    hourly[i].rainChance = selected.chance_of_rain;
    hourly[i].snowChance = selected.chance_of_snow;
  }

  return {current, hourly, daily};
}
