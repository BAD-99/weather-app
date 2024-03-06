// head/main pic switchable to different day

const currentSection = (() => {
  const container = document.createElement("div");
  const img = document.createElement("img");
  const tempContainer = document.createElement("div");
  const temperature = document.createElement("div");
  const feelsLike = document.createElement("div");

  container.append(img, tempContainer);
  tempContainer.append(temperature, feelsLike);
  document.body.append(currentSection);

  return { container, img, tempContainer, temperature, feelsLike };
})();

//hourly forecast

const hourlySection = (()=>{
    const container = document.createElement('div');
    const info = document.createElement('div');
    const ul = document.createElement('ul');
    const lis = [];
    for(i = 0; i < 24; i++){
        const li = document.createElement('li');
    }
})()

//next days, clickable and changes outline focus to that day
