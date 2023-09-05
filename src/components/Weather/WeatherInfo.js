import React from "react";
import {InfoContainer, InfoIcon, InfoLabel} from "../Weather/Weather.style";

const WeatherInfoIcons = {
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg",
};

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