let x = document.getElementById("check");
let latitude;
let longitude;
let appid = '479e261c6e9812ab2ad1c8b7f883ae19';
let weather;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    var http = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude.toString() + '&lon=' + longitude.toString() + '&appid=' + appid;
    fetch(http)
        .then((response) => {
            var data = response.json();
            return data;

        }).then
        ((data) => {
            var iconId = data.weather[0].icon;
            var temp = Math.round((data.main.temp - 272) * 10) / 10;
            weather = { temperature: `<span>${temp} &#8451;<span/>`, picture: `<img src="icons/${iconId}.png"/>`, city: data.name, country: data.sys.country, clouds: "Cloudly" };
            setWeather();

        })
        ;



}


function setWeather() {

    document.getElementById("temperature").innerHTML = weather.temperature;
    document.getElementById("picture").innerHTML = weather.picture;
    document.getElementById("city").innerHTML = weather.city;
    document.getElementById("country").innerHTML = weather.country;
    document.getElementById("clouds").innerHTML = weather.clouds;


}



getLocation();


