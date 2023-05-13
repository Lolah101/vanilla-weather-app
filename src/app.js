function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "0fa6704f3387fb503d492b33889f6cc9";

let apiURL =
  "https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=0fa6704f3387fb503d492b33889f6cc9&units=metric";

console.log(apiURL);
axios.get(apiURL).then(displayTemperature);
