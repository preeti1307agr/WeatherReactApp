import React from "react";
import {WeatherContainer, Condition, WeatherIcon, Location, WeatherInfoLabel, WeatherInfoContainer} from "../Weather/Weather.style";
import WeatherInfo from "./WeatherInfo";

const WeatherIcons = {
    "01d": "/icons/sunny.svg",
    "01n": "/icons/night.svg",
    "02d": "/icons/day.svg",
    "02n": "/icons/cloudy-night.svg",
    "03d": "/icons/cloudy.svg",
    "03n": "/icons/cloudy.svg",
    "04d": "/icons/perfect-day.svg",
    "04n": "/public/icons/cloudy-night.svg",
    "09d": "/icons/rain.svg",
    "09n": "/icons/rain-night.svg",
    "10d": "/icons/rain.svg",
    "10n": "/icons/rain-night.svg",
    "11d": "/icons/storm.svg",
    "11n": "/icons/storm.svg",
  };

const Weather = (props) => {
    console.log("In weather component");
    const {weather, city} = props;
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();

    const formattedDate = `${year}-${month}-${day}`;
    let hour = currentDate.getHours();
    let weatherCond= "";
    let temperature = "";
    let description = "";
    let weatherIcon = "";
    let speed = "";
    let pressure = "";

    const temp = () => { 
        const arr = [];
        weather.map(we =>{
        if(we.weatherDate === formattedDate){
            arr.push(we);
        }
    })
    console.log("arr", arr);
    const arr1 = [];
    const timeToweatherCondition = new Map();
    const timeToweatherDescription = new Map();
    const timeToweatherIcon = new Map();
    const timeToTemp = new Map();
    const timeToWind = new Map();
    const timeToPressure = new Map();
    arr.map(weather => {
       arr1.push(weather.forecastWeather.time);
       timeToweatherCondition.set(weather.forecastWeather.time, weather.forecastWeather.weather.weatherCondition);
       timeToweatherDescription.set(weather.forecastWeather.time, weather.forecastWeather.weather.description);
       timeToweatherIcon.set(weather.forecastWeather.time, weather.forecastWeather.weather.weatherIcon);
       timeToTemp.set(weather.forecastWeather.time, weather.forecastWeather.temperature.temp);
       timeToPressure.set(weather.forecastWeather.time, weather.forecastWeather.temperature.pressure);
       timeToWind.set(weather.forecastWeather.time, weather.forecastWeather.wind.speed);
    })

    var closest = arr1.reduce(function(prev, curr) {
    return (Math.abs(curr - hour) < Math.abs(prev - hour) ? curr : prev);
    });

    weatherCond = timeToweatherCondition.get(closest);
    temperature = timeToTemp.get(closest);
    speed = timeToWind.get(closest);
    pressure = timeToPressure.get(closest);
    description = timeToweatherDescription.get(closest);
    weatherIcon = timeToweatherIcon.get(closest);
}
    return (
        <>
        {temp()}
            <Location>{`${city.toUpperCase()}`}</Location>
            <WeatherContainer>
                <Condition>
                    <span>{`${temperature}°C`}</span>
                    {`  |  ${description}`}
                </Condition>
                <WeatherIcon src={WeatherIcons[weatherIcon]}/>
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