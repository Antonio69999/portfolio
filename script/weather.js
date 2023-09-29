
const url = 'http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=c2a4b7a2d329cfb9121dc9a8cf0ed9ec&units=metric';

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });

    //request openweathermap api
    const getWeather = (cityName) => {
        const fetchWeather = fetch(
            'http://api.openweathermap.org/data/2.5/weather?q=' +
            cityName + 
            '&appid=' +
            'c2a4b7a2d329cfb9121dc9a8cf0ed9ec' +
            '&units=metric'
        );

        fetchWeather
        .then(function (resp) {
            return resp.json()
        }) //convert data to json
        .then(function (data){
            displayWeather(data);
        }) //call displayWeather
        .catch(function(){
            //catch error
        });
    }

    //insert data to id
    const displayWeather = (d) => {
        let fahrenheit = Math.round(d.main.temp);
        let description = d.weather[0].description;

        document.getElementById('description').innerHTML = description;
        document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
        document.getElementById('location').innerHTML = d.name;
    }

    //trigger after a page has been loaded
    window.onload = function () {
        getWeather( 'Saint-Etienne' );
    }

 