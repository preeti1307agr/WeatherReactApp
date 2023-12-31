import Axios from "axios";
import React, { useState } from "react";
import City from "../src/components/City/City";
import { Container, AppLabel } from "./App.style";
import Template from "./components/Template/Template";
import { WEATHER_SERVICE_URL } from "../src/utils/constants";

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    
    const response = await Axios.get(
      `${WEATHER_SERVICE_URL}${city}`, {
        headers: {  
          'Content-Type': 'application/json'
        }
        }
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <Template weather={weather} city={city} />
      ) : (
        <City updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
