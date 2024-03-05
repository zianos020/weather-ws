function fetchWeatherData() {
    const country = document.getElementById('country-input').value;
    const apiKey = 'e8150981ffd6db128e95e6f917c553a4';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const location = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            document.getElementById('location').textContent = location;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('description').textContent = `Description: ${description}`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}
