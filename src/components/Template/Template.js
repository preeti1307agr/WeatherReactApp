import React, {useState} from "react";
import {WelcomeWeatherLogo, ChooseCityLabel, SearchBox} from "../City/City.style";
import day from "../../perfect-day.svg"
import Temperatures from "../Temperatures/Temperatures";
import Weather from "../Weather/Weather";
import Button from "../Button/Button";
// import {useNavigate} from "react-router-dom";
import City from "../City/City";

const Template = (props) => {
    const { city, weather } = props;
    const [tempComponent, setTempComponent] = useState(false);
    const [weatherComponent, setWeatherComponent] = useState(false);
    // let history = useNavigate();

    const showTemperatures = () => {
      setTempComponent(true);
      setWeatherComponent(false);
    }

    const showWeather = () => {
      setWeatherComponent(true);
      setTempComponent(false);
    }

    // const handleClick = () => {
    //     history(<City/>)
    // }

    return (
      <>
        {/* <div>
            <button onClick={() => handleClick()}>Go Back</button>
        </div> */}
        {/* <WelcomeWeatherLogo src={day} /> */}
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