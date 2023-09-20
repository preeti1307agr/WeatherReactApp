import React from "react";
import {WelcomeWeatherLogo, ChooseCityLabel, SearchBox} from "../City/City.style";

/**
 * City Component: This component allows users to search for weather by city.
 *
 * @param {Object} props - Component properties.
 * @param {function} props.updateCity - Function to update the selected city.
 * @param {function} props.fetchWeather - Function to fetch weather data.
 */

const City = (props) => {
    const { updateCity, fetchWeather } = props;

    return (
      <>
        <WelcomeWeatherLogo src="/icons/perfect-day.svg" />
        <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
          <input
            type="text"
            required
            onChange={(e) => updateCity(e.target.value)}
            placeholder="City"
          />
          <button type={"submit"}>Search</button>
        </SearchBox>
      </>
    );
  };
  export default City;