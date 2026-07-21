//DOM elements

const button = document.getElementById("searchBtn");
const city = document.getElementById("cityName");
const cityInput = document.getElementById("cityInput");
const errormsg = document.getElementById("error");
const apikey = "0ad7f5e25082602853f5f38840452fef";

//event listeners

button.addEventListener("click", searchWeather);
cityInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    searchWeather();
  }
});

//search function

function searchWeather() {
  const inputText = cityInput.value.trim();

  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${inputText}&limit=1&appid=${apikey}`;

  if (!inputText) {
    errormsg.classList.remove("hidden");
  } else {
    errormsg.classList.add("hidden");
    console.log(inputText);
  }
}
