import React from "react";
import {WelcomeWeatherLogo, ChooseCityLabel, SearchBox} from "../City/City.style";
import day from "../../perfect-day.svg"

const City = (props) => {
    const { updateCity, fetchWeather } = props;

    return (
      <>
        <WelcomeWeatherLogo src={day} />
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