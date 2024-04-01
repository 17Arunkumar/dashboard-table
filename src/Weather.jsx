import React, { useState } from 'react';
import './App.css';

function Weather() {
    const [city, setCity] = useState('');
    const [currWeather, setCurrWeather] = useState(null);
    const [hourlyForecast, setHourlyForecast] = useState([]);

    const apiKey = '150145a9ec15a24744e27e869b84f8f9';

    const displayWeather = (data) => {
        if (data.cod === '404') {
            alert(data.message);
        } else {
            setCurrWeather(data);
        }
    };

    const displayHourlyForecast = (data) => {
        if (data && data.list) {
            setHourlyForecast(data.list.slice(0,8));
        }
    };

    const getWeather = (e) => {
        e.preventDefault();

        if (!city) {
            alert("Please enter a city name");
            return;
        }

        const currWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
        console.log(currWeatherUrl);
        fetch(currWeatherUrl)
            .then(res => res.json())
            .then(data => displayWeather(data))
            .catch(error => {
                console.log("Error in fetching weather data", error);
                alert("Error while fetching weather data");
            });

        fetch(forecastUrl)
            .then(res => res.json())
            .then(data => displayHourlyForecast(data))
            .catch(error => {
                console.log("Error in fetching hourly data", error);
                alert("Error while fetching hourly data");
            });
    };

    return (
        <div id="total">
            <form onSubmit={getWeather}>
                <h2>Weather App</h2>
                <div className="btn">
                <input
                    type="text"
                    placeholder='Enter city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type='submit'>Submit</button>
                </div>

                {currWeather && (
                    <> 
                        <img src={`https://openweathermap.org/img/w/${currWeather.weather[0].icon}.png`} alt="Weather icon" />
                        <div>{Math.round(currWeather.main.temp - 273.15)}°C</div>
                        <div>{currWeather.name}</div>
                        <div>{currWeather.weather[0].description}</div>
                    </>
                )}

                <div id="hour-forecast">
                    {hourlyForecast.map(item => (
                        <div key={item.dt}>
                            <img src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="HourImage" />
                            <div>
                            <span>{new Date(item.dt * 1000).getHours()}:00</span>
                            <span>{Math.round(item.main.temp - 273.15)}°C</span>
                            </div>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
}

export default Weather;