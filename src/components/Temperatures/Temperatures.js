import React from "react";
import "../Temperatures/Temperatures.css";

/**
 * Temperatures Component: This component allows users to see the list of temperatures for your city.
 *
 * @param {Object} props - Component properties.
 * @param {function} props.temperature - Function to fetch the temperature of the selected city.
 */

const Temperatures = (props) => {

    const {temperature} = props;

    return (
        <div className="temperature-table">
          <h1>Temperature for 3 days</h1>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Temperature (°C)</th>
              </tr>
            </thead>
            <tbody>
              {temperature.map(temp => (
                <tr key={Date.now()}>
                  <td>{temp.weatherDate}</td>
                  <td>{temp.forecastWeather.time}</td>
                  <td>{temp.forecastWeather.temperature.temp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

};

export default Temperatures;