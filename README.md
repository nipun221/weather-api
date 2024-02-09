# Weather API Documentation

## Introduction

The Weather API provides real-time weather information for a list of specified cities. It utilizes the OpenWeatherMap API to fetch weather data and responds with the current temperature in Celsius for each city.

## Base URL

The base URL for the API is:

```
http://localhost:5000
```

Replace `http://localhost:5000` with the appropriate URL if you deploy this API to a different server.

## Authentication

No authentication is required to use this API.

## Endpoints

### 1. Get Weather Information for Multiple Cities

#### Endpoint

```
POST /getWeather
```

#### Request

- **Headers:**
  - `Content-Type: application/json`

- **Body:**
  - Type: JSON
  - Example:

  ```json
  {
    "cities": ["toronto", "mumbai", "london", "delhi", "zug"]
  }
  ```

#### Response

- Type: JSON
- Example:

  ```json
    {
        "weather": {
            "toronto": "1°C",
            "mumbai": "27.99°C",
            "london": "10.54°C",
            "delhi": "13.05°C",
            "zug": "13.19°C"
        }
    }
  ```

- Status Codes:
  - `200 OK`: Successful request
  - `400 Bad Request`: Invalid input or missing cities array
  - `500 Internal Server Error`: Server-side error

## Error Handling

In case of errors, the API responds with appropriate error messages in the JSON format.

Example:

```json
{
  "error": "Invalid input. Please provide an array of cities."
}
```

## Rate Limiting

The API does not currently implement rate limiting. However, it is recommended to implement rate limiting in a production environment to prevent abuse.

## API Key

The API key for the OpenWeatherMap API is required for fetching weather data. Please provide the API key in the `.env` file under the name `API_KEY`.

Example `.env` file:

```
PORT=5000
API_KEY=your_openweathermap_api_key
```

## Dependencies

- [Express.js](https://expressjs.com/): A web application framework for Node.js.
- [Axios](https://axios-http.com/): A promise-based HTTP client for the browser and Node.js.
- [CORS](https://expressjs.com/en/resources/middleware/cors.html): A middleware for handling Cross-Origin Resource Sharing.

## Getting Started

1. Clone github repository

   ```bash
   git clone https://github.com/nipun221/weather-api.git
   cd weather-api
   ```
   
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and provide your port & OpenWeatherMap API key:

   ```
   PORT=5000
   API_KEY=your_openweathermap_api_key
   ```

4. Start the server:

   ```bash
   nodemon index.js
   ```

5. Access the API at `http://localhost:5000`.

## Snapshot
![Screenshot (63)](https://github.com/nipun221/weather-api/assets/98182168/640ec5bc-6276-45f0-a54f-aa348efad5b7)

