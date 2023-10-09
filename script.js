function getWeather() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const cityInput = document.getElementById('cityInput').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            if (data.cod === 200) {
                const { name, main, weather } = data;
                weatherInfo.innerHTML = `
                    <h2>Weather in ${name}</h2>
                    <p>Temperature: ${main.temp}°C</p>
                    <p>Humidity: ${main.humidity}%</p>
                    <p>Weather: ${weather[0].description}</p>
                `;
            } else {
                weatherInfo.innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
