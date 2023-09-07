import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Template from './Template'; // Make sure to import your component correctly

describe('Template component', () => {
  it('renders without errors', () => {
    render(<Template city="TestCity" weather="TestWeather" />);
  });

  it('renders the "Find Weather of your city" label', () => {
    const { getByText } = render(<Template city="TestCity" weather="TestWeather" />);
    const labelElement = getByText('Find Weather of your city');
    expect(labelElement).toBeInTheDocument();
  });

  it('renders the "Find temperature of your city" label', () => {
    const { getByText } = render(<Template city="TestCity" weather="TestWeather" />);
    const labelElement = getByText('Find temperature of your city');
    expect(labelElement).toBeInTheDocument();
  });
});
