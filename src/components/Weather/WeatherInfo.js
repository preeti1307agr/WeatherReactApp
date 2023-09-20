import React from "react";
import {InfoContainer, InfoIcon, InfoLabel} from "../Weather/Weather.style";


// weather info icons for the weather condition
const WeatherInfoIcons = {
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg",
};

/* WeatherInfo Component: This component displays the weather condition - wind, pressure, weather icon for your city.
*
* @param {Object} props - Component properties.
* @param {function} props.name - Function to display the condition name.
* @param {function} props.value - Function to display the condition value.
*/

const WeatherInfo = (props) => {
    const {name, value} = props;
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};

export default WeatherInfo;