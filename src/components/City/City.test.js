import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import City from './City';

// Mock the functions passed as props
const mockUpdateCity = jest.fn();
const mockFetchWeather = jest.fn();

describe('City Component', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(
      <City updateCity={mockUpdateCity} fetchWeather={mockFetchWeather} />
    );

    // Check if the components are rendered
    expect(getByText('Find Weather of your city')).toBeInTheDocument();
    expect(getByPlaceholderText('City')).toBeInTheDocument();
    expect(getByText('Search')).toBeInTheDocument();
  });

  it('calls updateCity when input value changes', () => {
    const { getByPlaceholderText } = render(
      <City updateCity={mockUpdateCity} fetchWeather={mockFetchWeather} />
    );

    const inputElement = getByPlaceholderText('City');
    fireEvent.change(inputElement, { target: { value: 'New York' } });

    // Check if updateCity was called with the correct value
    expect(mockUpdateCity).toHaveBeenCalledWith('New York');
  });
});
