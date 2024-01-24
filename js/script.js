const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

const getData = () => {
    event.preventDefault();
    const url = "https://api.openweathermap.org/data/2.5/weather?q=";
    const api_key = "183a43f38c097a03731da43ca5d6ad28";
    let cityName = document.querySelector(".input-box").value;

    fetch(url + cityName + `&appid=${api_key}`).then((res) => {
        return res.json().then((data) => {
            console.log("data", data);

            if (data.cod === `404`) {
                location_not_found.style.display = "flex";
                weather_body.style.display = "none";
            }
            else {
                location_not_found.style.display = "none";
                weather_body.style.display = "flex";
            }

            temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}<sup>°C</sup>`;
            description.innerHTML = `${data.weather[0].description}`;

            humidity.innerHTML = `${data.main.humidity}%`;
            wind_speed.innerHTML = `${data.wind.speed}Km/H`;

            if (data.weather[0].main === 'Clouds') {
                weather_img.src = "images/cloud.png";
            }
            else if (data.weather[0].main === 'Clear') {
                weather_img.src = "images/clear.png";
            }
            else if (data.weather[0].main === 'Rain') {
                weather_img.src = "images/rain.png";
            }
            else if (data.weather[0].main === 'Mist') {
                weather_img.src = "images/mist.png";
            }
            else if (data.weather[0].main === 'Snow') {
                weather_img.src = "images/snow.png";
            }
        })
    }).catch((err) => {
        console.log("Error", err);
    });
};