const locationBtn = document.getElementById("locationBtn");

const input = document.getElementById("location");
console.clear();
const displayBox = document.getElementById("weatherInfo");

locationBtn.addEventListener("click", () => {
  let inputValue = input.value;
  console.log(inputValue);
  displayBox.innerHTML = "";
  getWeather(inputValue);
});

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b3683168d5msh565dc41aa019aecp1c95c9jsncb69f32b0898",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
  }
};

function cityNotFound() {
  displayBox.innerHTML = "";
  let newElement = document.createElement("p");
  newElement.innerHTML =
    "Sorry! I do not have information realted to this city";
  displayBox.appendChild(newElement);
}
function appendEle(response, city) {
  let newElement = document.createElement("p");
  newElement.innerHTML =
    "City name: " +
    city +
    "<br>" +
    "Temperature is: " +
    response.temp +
    "<br>" +
    "Feels like: " +
    response.feels_like +
    "<br>" +
    "Wind flow direction: " +
    response.wind_degrees +
    "<br>" +
    "Humidity: " +
    response.humidity;
  displayBox.appendChild(newElement);
}
const getWeather = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      if (response.temp === undefined) {
        //console.log(err);
        cityNotFound();
      } else {
        appendEle(response, city);
      }
    })
    .catch((err) => {
      console.log(err);
      displayErr();
    });
};

function displayErr() {
  let newElement = document.createElement("p");
  newElement.innerHTML = "Sorry! I have just encountered some issues";
  displayBox.appendChild(newElement);
}
