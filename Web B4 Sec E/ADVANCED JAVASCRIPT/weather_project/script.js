let cityInput = document.getElementById("city-input");

async function getWeather() {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=af9e17959ccd65ee0ea00d9fae75dd18&units=metric`,
  );

  let data = await response.json();
  let weatherResult = document.getElementById("weather-result");
  weatherResult.innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Description: ${data.weather[0].description}</p>
  `;
  console.log(data);
}
