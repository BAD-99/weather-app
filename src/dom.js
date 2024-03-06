// head/main pic switchable to different day

export function displayWeatherForecast(weatherData) {
  displayCurrentWeather(weatherData.current);
}

const currentSection = (() => {
  const container = document.createElement("div");

  const topBox = document.createElement("div");
  const highLowBox = document.createElement("div");
  const high = document.createElement("div");
  const low = document.createElement("div");
  const img = document.createElement("img");
  const tempBox = document.createElement("div");
  const temperature = document.createElement("div");
  const feelsLike = document.createElement("div");

  const bottomBox = document.createElement("div");
  const wordBox = document.createElement("div");
  const locationName = document.createElement("div");
  const condition = document.createElement("div");
  const numBox = document.createElement("div");
  const humidity = document.createElement("div");
  const wind = document.createElement("div");

  container.append(topBox, bottomBox);

  topBox.append(highLowBox, img, tempBox);
  bottomBox.append(wordBox, numBox);

  highLowBox.append(high, low);
  tempBox.append(temperature, feelsLike);
  wordBox.append(locationName, condition);
  numBox.append(humidity, wind);

  document.body.append(container);
  return {
    container,
    high,
    low,
    img,
    temperature,
    feelsLike,
    locationName,
    condition,
    humidity,
    wind,
  };
})();

function updateCurrentSection(weatherData) {
  currentSection.temperature.textContent = currentWeather.temp_f + " °F";
}

//hourly forecast

const hourlySection = (() => {
  const container = document.createElement("div");
  const info = document.createElement("div");
  const ul = document.createElement("ul");
  const lis = [];
  for (let i = 0; i < 24; i++) {
    const li = document.createElement("li");
    lis.push(li);
  }

  ul.append(...lis);
  container.append(info, ul);
  document.body.append(container);

  return { container, info, ul, lis };
})();

//next days, clickable and changes outline focus to that day

const dailySection = (() => {
  const container = document.createElement("div");
  const days = [];
  for (let i = 0; i < 3; i++) {
    const day = document.createElement("div");
    days.push(day);
  }

  container.append(...days);
  document.body.append(container);

  return { container, days };
})();

function displayHourlyTemperatures(hourlyData) {
  for (let i = 0; i < 24; i++) {
    hourlySection.lis[i].textContent = hourlyData[i].temp_f;
  }
}
