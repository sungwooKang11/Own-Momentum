const API_KEY = "20d3ea9ebdb399b0edf375ee7d5085c0";

function geoGood(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name; 
        weather.innerText = `${data.weather[0].main} ${data.main.temp}`;
    });
}
function geoError() {
    alert("Can't find you. Where?");
}

navigator.geolocation.getCurrentPosition(geoGood, geoError);  