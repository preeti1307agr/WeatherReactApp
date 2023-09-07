import React from "react";
import { render, screen } from "@testing-library/react";
import Weather from "./Weather";

// Mock the data that you want to test with
const mockWeatherData = [
  {
    forecastWeather: {
      time: 12,
      weather: {
        weatherCondition: "Clear",
        description: "Clear sky",
        weatherIcon: "01d",
      },
      temperature: {
        temp: 25,
        pressure: 1013,
      },
      wind: {
        speed: 5,
      },
    },
    weatherDate: "2023-09-07"
  }
];

describe("Weather component", () => {
  it("renders Weather component with mock data", () => {
    // Render the component with the mock data
    render(<Weather weather={mockWeatherData} city="New York" />);

    expect(screen.getByText("NEW YORK")).toBeInTheDocument(); 
    expect(screen.getByText("Weather Info")).toBeInTheDocument();
  });
});
