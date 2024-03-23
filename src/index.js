function runCitySearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");
  let searchCityElement = document.querySelector("#weather-app-city");
  searchCityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", runCitySearch);
