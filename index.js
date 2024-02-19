const express = require('express');
const axios = require('axios');
const cors = require("cors");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

const apiKey = process.env.API_KEY;

app.get('/', (req, res) => {
  res.send('Hello! This is Weather API! This is made bye Nipun!');
});

app.get('/city/:city', (req, res) => {
  const { city } = req.params;
  getWeather(city)
    .then(weather => {
      res.json({ weather });
    })
    .catch(error => {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.post('/getWeather', async (req, res) => {
  try {
    const { cities } = req.body;

    if (!cities || !Array.isArray(cities) || cities.length === 0) {
      return res.status(400).json({ error: 'Invalid input. Please provide an array of cities.' });
    }

    const weatherPromises = cities.map(city => getWeather(city));
    const weatherResults = await Promise.all(weatherPromises);

    const weatherResponse = {};
    weatherResults.forEach((result, index) => {
      const city = cities[index];
      weatherResponse[city] = result;
    });

    res.json({ weather: weatherResponse });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

async function getWeather(city) {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    const temperature = response.data.main.temp;
    return `${temperature}°C`;
  } catch (error) {
    console.error(`Error fetching weather for ${city}:`, error.message);
    return 'N/A';
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
