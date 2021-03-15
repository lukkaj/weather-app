import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

const getForecastFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/forecast`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "",
      forecastIcon: "",
      time: "",
    };
  }

  async componentDidMount() {
    const weather = await getWeatherFromApi();
    const forecast = await getForecastFromApi();
    this.setState({
      icon: weather.icon.slice(0, -1), 
      forecastIcon: forecast.weather.icon.slice(0, -1),
      time: String(new Date(forecast.time))
    });
  }

  render() {
    const { icon, forecastIcon, time } = this.state;

    return (
      <div>
        Current weather 
        <div className="icon">
          { icon && <img src={`/img/${icon}.svg`} /> }
        </div>

        <div className='icon'>
          Two hours forecasted weather
          <p>{time}
          </p>
          { icon && <img src={`/img/${forecastIcon}.svg`} /> }
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
