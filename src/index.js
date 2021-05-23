//Feature 1
let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let h4 = document.querySelector("h4");
h4.innerHTML = `${day}, ${hours}:${minutes}`;

//Feature 2
function displayWeatherCondition(response) {
  document.querySelector("#cityName").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "42cd377212708e14d030c89f051bf208";
  let city = document.querySelector("#search-text-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

//Feature 3
function fahrenheit(event) {
  event.preventDefault();
  let temparature = document.querySelector("#temparature");
  temparature.innerHTML = "60.80°";
}
let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", fahrenheit);

function celsius(event) {
  event.preventDefault();
  let celsius = document.querySelector("#temparature");
  temparature.innerHTML = "16°";
}
let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", celsius);