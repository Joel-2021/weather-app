const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const apikey = "1c54b25ebaa9e9c686d1cf898bbb2fbc";
const icon_url = "http://openweathermap.org/img/wn/10d@2x.png";

let temp = document.getElementById("temp");
let pressure = document.getElementById("pressure");
let humidity = document.getElementById("humidity");
let description = document.getElementById("description");
let city = document.getElementById("city_country");
let country = document.getElementById("country");
let icon = document.getElementById("icon");

let input = document.getElementById("input");
submit_button = document.getElementById("search");

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    input = document.getElementById("input").value;
    console.log(input);
    api_call();
  }
});

submit_button.addEventListener("click", () => {
  input = document.getElementById("input").value;
  console.log(input);
  api_call();
});

function api_call() {
  if (input !== null) {
    fetch(url + input + "&units=metric&appid=" + apikey)
      .then((response) => response.json())
      // .then(data=>console.log(data))
      .then((data) => {
        icon.innerHTML=`<img src=http://openweathermap.org/img/wn/`+data.weather[0].icon+`@2x.png>`
        temp.innerHTML ="Temperature: "+ data.main.temp + " `C";
        pressure.innerHTML ="Pressure: "+ data.main.pressure;
        description.innerHTML = "Description: "+data.weather[0].description;
        city.innerHTML = "City: "+data.name+','+data.sys.country;
        humidity.innerHTML="Humidity: "+data.main.humidity;
      });
  }
}
