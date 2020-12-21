import React, { useState } from "react";
import axios from "axios";

export default function SearchEng() {
  const [city, setCity] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      maxTemperature: Math.round(response.data.main.temp_max),
      minTemperature: Math.round(response.data.main.temp_min),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "4bcfbdb544c93af9fee3bcc561f8a283";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="Searching" onSubmit={handleSubmit}>
      <input
        type="Search"
        placeholder="Please enter a city... "
        onChange={updateCity}
      />
      <button type="Submit"> Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            Max Temperature:
            {weather.maxTemperature}°C
          </li>

          <li>
            {" "}
            Min Temperature:
            {weather.minTemperature}°C
          </li>

          <li> Description: {weather.description} </li>

          <li>
            Wind Speed:
            {weather.wind}km/h
          </li>
          <li>humidity:{weather.humidity}%</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
