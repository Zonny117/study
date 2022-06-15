const API_KEY = "8d4d8349a48330abd0a910c0ffdaaed6";

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const citySpan = document.querySelector("#weather span:first-child");
        const weatherSpan = document.querySelector("#weather span:last-child");
        citySpan.innerText = data.name;
        weatherSpan.innerText = `${data.weather[0].main} / ${data.main.temp}°`;
    });
}

function onGeoError() {
    alert("Allow to get information from your location.");
}