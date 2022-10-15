let weather = {
    apiKey: "628b4e8ad6db4b8b4434648c1ad74aa4",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city  
            + "&units=metrics&appid=" 
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
    displayWeather: function(data) {

    }
};
    
