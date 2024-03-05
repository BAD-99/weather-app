const k = "f09a2da2a20345fcbab110929242802";
const base = "http://api.weatherapi.com/v1";

export default async function getWeatherData(lat, long) {
  try {
    const response = await fetch(
      base + "/forecast.json?key=" + k + "&q=" + lat + "," + long,
      {
        mode: "cors",
      }
    );
    const json = response.json();
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
