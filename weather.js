const apiKey = "97a12bf6dbd0f758f35e467d0364f2aa";
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const cityName = document.getElementById("city-name").value;
  getWeatherData(cityName);
  //console.log(cityName);
});

async function getWeatherData(cityName) {
  try {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    showWeatherInfo(data);
  } catch (err) {
    alert("Sorry! This city is not my data");
  }
}

function showWeatherInfo(data) {
  let imgIcon =
    "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  //console.log(data);
  const weatherInfo = document.getElementById("weather-info");
  weatherInfo.innerHTML = `
  
    <h2>Country Code: ${data.sys.country}</h2>

    <h3>City Name: ${data.name}</h3>

    <h3>City Coordinate: Longitude: ${data.coord.lon}&deg; , Latitude: ${
    data.coord.lat
  }&deg;</h3>

    <h3>Temperature: ${data.main.temp}&deg;F (In Celcius: ${Math.round(
    data.main.temp - 273.15
  )}&deg;C)</h3>

    <h3>Weather: ${data.weather[0].main} , Description: ${
    data.weather[0].description
  } <img src=${imgIcon} height="30" width="45"></h3>

    <h3>Humidity: ${data.main.humidity}%</h3>

    <h3>Pressure: ${data.main.pressure} hPa</h3>

    <h3>Wind Speed: ${data.wind.speed}m/s</h3>

    <h3>Sunrise: ${data.sys.sunrise}</h3>

    <h3>Sunset: ${data.sys.sunset}</h3>

    <h3>Sea level: ${data.main.sea_level} m&uarr;</h3>

  `;
}
