// head/main pic switchable to different day

export function displayWeatherForecast(processedWeatherData) {
  displayCurrentWeather(processedWeatherData.current);
}

function displayCurrentWeather(data) {
  const section = currentSection;
  section.high.textContent = data.high;
  section.low.textContent = data.high;
  section.temperature.textContent = data.temperature;
  section.feelsLike.textContent = data.feelsLike;
  section.location.textContent = data.location;
  section.condition.textContent = data.condition.text;
  section.humidity.textContent = data.humidity;
  section.wind.textContent = data.wind;
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
  const location = document.createElement("div");
  const condition = document.createElement("div");
  const numBox = document.createElement("div");
  const humidity = document.createElement("div");
  const wind = document.createElement("div");

  container.append(topBox, bottomBox);

  topBox.append(highLowBox, img, tempBox);
  bottomBox.append(wordBox, numBox);

  highLowBox.append(high, low);
  tempBox.append(temperature, feelsLike);
  wordBox.append(location, condition);
  numBox.append(humidity, wind);

  document.body.append(container);
  return {
    container,
    high,
    low,
    img,
    temperature,
    feelsLike,
    location,
    condition,
    humidity,
    wind,
  };
})();

//hourly forecast

const hourlySection = (() => {
  const container = document.createElement("div");
  const info = document.createElement("div");
  const ul = document.createElement("ul");
  const hours = [];
  for (let i = 0; i < 24; i++) {
    const hour = {};
    const li = document.createElement("li");
    const infoBox = document.createElement("div");
    hour.name = document.createElement("div");
    hour.img = document.createElement("img");
    hour.temperature = document.createElement("div");
    const precipBox = document.createElement("div");
    hour.precipitationImg = document.createElement("img");
    hour.percent = document.createElement("div");

    li.append(infoBox, precipBox);

    infoBox.append(hour.name, hour.img, hour.temperature);
    precipBox.append(hour.precipitationImg, hour.percent);

    ul.append(li);
    hours.push(hour);
  }

  container.append(info, ul);
  document.body.append(container);

  return { container, info, hours };
})();

//next days, clickable and changes outline focus to that day

const dailySection = (() => {
  const container = document.createElement("div");
  const days = [];
  for (let i = 0; i < 3; i++) {
    const day = {};
    const box = document.createElement("div");
    const infoBox = document.createElement("div");
    day.name = document.createElement("div");
    day.img = document.createElement("img");
    const highLowBox = document.createElement("div");
    day.high = document.createElement("div");
    day.low = document.createElement("div");
    const precipBox = document.createElement("div");
    day.precipitationImg = document.createElement("img");
    day.percent = document.createElement("div");

    container.append(box);

    box.append(infoBox, highLowBox, precipBox);

    infoBox.append(day.name, day.img);
    highLowBox.append(day.high, day.low);
    precipBox.append(day.precipitationImg, day.percent);

    days.push(box);
  }

  container.append(...days);
  document.body.append(container);

  return { container, days };
})();
