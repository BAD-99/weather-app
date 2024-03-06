// head/main pic switchable to different day

const currentSection = (() => {
  const container = document.createElement("div");
  const img = document.createElement("img");
  const tempContainer = document.createElement("div");
  const temperature = document.createElement("div");
  const feelsLike = document.createElement("div");

  container.append(img, tempContainer);
  tempContainer.append(temperature, feelsLike);
  document.body.append(container);

  return { container, img, tempContainer, temperature, feelsLike };
})();

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

export function displayHourlyTemperatures(hourlyData){
  for(let i = 0; i < 24; i++){
    hourlySection.lis[i].textContent = hourlyData[i].temp_f;
  }
}
