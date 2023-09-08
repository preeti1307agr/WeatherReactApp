import React from "react";
import {WelcomeWeatherLogo, ChooseCityLabel, SearchBox} from "../City/City.style";

const City = (props) => {
    const { updateCity, fetchWeather } = props;

    return (
      <>
        <WelcomeWeatherLogo src="/icons/perfect-day.svg" />
        <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
          <input
            onChange={(e) => updateCity(e.target.value)}
            placeholder="City"
          />
          <button type={"submit"}>Search</button>
        </SearchBox>
      </>
    );
  };
  export default City;