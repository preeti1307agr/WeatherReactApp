import React, {useState} from "react";
import {ChooseCityLabel} from "../City/City.style";
import Temperatures from "../Temperatures/Temperatures";
import Weather from "../Weather/Weather";
import Button from "../Button/Button";

/**
 * Template Component: This component allows users to search for weather or temperature by city.
 *
 * @param {Object} props - Component properties.
 * @param {function} props.city - Function to update the selected city.
 * @param {function} props.weather - Function to fetch weather data.
 */

const Template = (props) => {
    const { city, weather } = props;
    const [tempComponent, setTempComponent] = useState(false);
    const [weatherComponent, setWeatherComponent] = useState(false);

    //toggle between temperature and weather component
    const showTemperatures = () => {
      setTempComponent(true);
      setWeatherComponent(false);
    }

    const showWeather = () => {
      setWeatherComponent(true);
      setTempComponent(false);
    }

    return (
      <>
        <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
        <div>
            {weatherComponent ? "" : <Button onClick={()=>{showWeather()}}>Click Me!</Button>}  
            {weatherComponent && <Weather city={city} weather={weather}/>}
        </div>
        <ChooseCityLabel>Find temperature of your city</ChooseCityLabel>
        <div>
            {tempComponent ? "" : <Button onClick={()=>{showTemperatures()}}>Click Me!</Button>}   
            {tempComponent && <Temperatures temperature={weather}/>}
        </div>
      </>
    );
  };
  export default Template;