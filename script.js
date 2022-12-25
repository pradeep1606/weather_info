const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "53f359e5e7msh15aa219ea1d97f7p1fe0b0jsn2b2515969bf3",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

// function for search city data
const getWeather = (city) => {
  city_name.innerHTML = city.toUpperCase();
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      //   console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp1.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity1.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed1.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("DELHI");

let ct = ["Lucknow", "Mumbai", "Bangalore", "Kolkata"];
// function for above city data
for (let i in ct) {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + ct[i],
    options
  )
    .then((response) => response.json())
    .then((response) => {
      let cityrow = document.createElement("tr");
      let cityname = document.createElement("th");
      cityname.innerHTML = ct[i];

      let city_temp = document.createElement("td");
      city_temp.innerHTML = `${response.temp}&#8451;`;

      let city_humidity = document.createElement("td");
      city_humidity.innerHTML = `${response.humidity} %`;

      let city_wind = document.createElement("td");
      city_wind.innerHTML = `${response.wind_speed} km/h`;

      document.getElementById("thead").style.textAlign = "center";
      document.getElementById("tdata").style.textAlign = "center";
      document.getElementById("tdata").style.fontWeight = "500";
      document.getElementById("tdata").appendChild(cityrow);
      document.getElementById("tdata").appendChild(cityname);
      document.getElementById("tdata").appendChild(city_temp);
      document.getElementById("tdata").appendChild(city_humidity);
      document.getElementById("tdata").appendChild(city_wind);
      // console.log(cityname)
    })
    .catch((err) => console.error(err));
}


// changing extra css

