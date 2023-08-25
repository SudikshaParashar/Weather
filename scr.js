document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

function getWeather() {
    const apiKey = '27964fc470b140268df40b36a0feece9'; // Replace with your Weatherbit API key
    const city = document.getElementById("cityInput").value;
    const apiUrl = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cityName = data.data[0].city_name;
            const temperature = data.data[0].temp;
            const description = data.data[0].weather.description;

            document.getElementById("cityName").textContent = cityName;
            document.getElementById("temperature").textContent = `Temperature: ${temperature}°C`;
            document.getElementById("description").textContent = `Description: ${description}`;

            document.getElementById("weatherInfo").classList.remove("hidden");
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}
