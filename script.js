let weather = {
    "apikey": "338e0f9ce2e8435d8870a7983b292afb",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city
            +" &units=metric&appid=" 
            + this.apikey
         )
        .then((response) => response.json())
        .then((data) => this.displayweather(data));

    },

    displayweather: function(data) {
       const { name} = data
       const { icon, description } = data.weather[0];
       const { temp, humidity } = data.main;
       const { speed } = data.wind;
       document.querySelector(".city ").innerText = "Weather in  " + name;
       document.querySelector(".description ").innerText = description;
       document.querySelector(".temp ").innerText = temp + "°C ";
       document.querySelector(".humidity ").innerText = "humidity: " + humidity + "%";
       document.querySelector(".wind ").innerText = "Wind speed: " + speed + "km/h" ;
    },
    search: function(){
      this.fetchWeather(document.querySelector(".search-bar") .value);

    }
};

document
.querySelector(".search button")
.addEventListener("click", function(){
    weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
 if (event.key == "Enter") {
    weather.search();
 }
});

   