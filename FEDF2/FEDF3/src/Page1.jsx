import React, { Component } from 'react';
import './css/Page1.css';
import axios from 'axios';

export default class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      weather: null,
      loading: false,
      error: null,
    };
  }

  handleChange = (e) => {
    this.setState({ city: e.target.value });
  };

  getWeather = () => {
    if (!this.state.city.trim()) {
      this.setState({ error: 'Please enter a city name.' });
      return;
    }

    this.setState({ loading: true, error: null });

    const apiKey = '2e8b83d55c4e53fa239e01820dd6cc3c'; // Your API key
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${apiKey}&units=metric`
      )
      .then((res) => {
        if (res.data.cod !== 200) {
          this.setState({ error: res.data.message, weather: null, loading: false });
        } else {
          this.setState({ weather: res.data, loading: false });
        }
      })
      .catch(() => {
        this.setState({
          error: 'Could not fetch weather data. Please check city name.',
          loading: false,
        });
      });
  };

  render() {
    const { weather, loading, error, city } = this.state;

    return (
      <div className="weather-app">
        <h1>Weather App</h1>
        <input
          type="text"
          value={city}
          placeholder="Enter City"
          onChange={this.handleChange}
        />
        <button onClick={this.getWeather} disabled={loading}>
          {loading ? 'Loading...' : 'Get Weather'}
        </button>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {weather && !error && (
          <div className="weather-info">
            <h2>{weather.name}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>{weather.weather[0].description}</p>
          </div>
        )}
      </div>
    );
  }
}
