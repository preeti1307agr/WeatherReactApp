import React from "react";
import { WeatherContainer, Condition, WeatherIcon, Location, WeatherInfoLabel, WeatherInfoContainer } from "../Weather/Weather.style";
import WeatherInfo from "./WeatherInfo";
import { WEATHER_ICONS } from "../../utils/constants"

/**
 * Weather Component: This component displays the weather condition for your city.
 *
 * @param {Object} props - Component properties.
 * @param {function} props.city - Function to update the selected city.
 * @param {function} props.weather - Function to fetch weather data.
 */

const Weather = (props) => {
    const {weather, city} = props;
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();

    //the format in which the date is received 
    const formattedDate = `${year}-${month}-${day}`;

    // get the current hour
    let hour = currentDate.getHours();

    let weatherCond= "";
    let temperature = "";
    let description = "";
    let weatherIcon = "";
    let speed = "";
    let pressure = "";

    const getWeatherData = () => { 
        const weatherArray = [];
        weather.map(we =>{
        if(we.weatherDate === formattedDate){
            weatherArray.push(we);
        }
    })
    const weatherObjects = [];
    const timeToweatherCondition = new Map();
    const timeToweatherDescription = new Map();
    const timeToweatherIcon = new Map();
    const timeToTemp = new Map();
    const timeToWind = new Map();
    const timeToPressure = new Map();
    weatherArray.map(weather => {
       weatherObjects.push(weather.forecastWeather.time);
       timeToweatherCondition.set(weather.forecastWeather.time, weather.forecastWeather.weather.weatherCondition);
       timeToweatherDescription.set(weather.forecastWeather.time, weather.forecastWeather.weather.description);
       timeToweatherIcon.set(weather.forecastWeather.time, weather.forecastWeather.weather.weatherIcon);
       timeToTemp.set(weather.forecastWeather.time, weather.forecastWeather.temperature.temp);
       timeToPressure.set(weather.forecastWeather.time, weather.forecastWeather.temperature.pressure);
       timeToWind.set(weather.forecastWeather.time, weather.forecastWeather.wind.speed);
    })

    //calculate the closest hour/ weather object to display the conditions when the user searched
    var closestTime = weatherObjects.reduce(function(prev, curr) {
    return (Math.abs(curr - hour) < Math.abs(prev - hour) ? curr : prev);
    });

    weatherCond = timeToweatherCondition.get(closestTime);
    temperature = timeToTemp.get(closestTime);
    speed = timeToWind.get(closestTime);
    pressure = timeToPressure.get(closestTime);
    description = timeToweatherDescription.get(closestTime);
    weatherIcon = timeToweatherIcon.get(closestTime);
}
    return (
        <>
        {getWeatherData()}
            <Location>{`${city.toUpperCase()}`}</Location>
            <WeatherContainer>
                <Condition>
                    <span>{`${temperature}°C`}</span>
                    {`  |  ${description}`}
                </Condition>
                <WeatherIcon src={WEATHER_ICONS[weatherIcon]}/>
            </WeatherContainer>

            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfo name={"wind"} value={speed}/>
                <WeatherInfo name={"pressure"} value={pressure}/>
            </WeatherInfoContainer>
        </>
    );
};

export default Weather;