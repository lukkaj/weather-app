import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    process.stdout.write(error);
    // console.error(error);
  }
  return {};
};

const getForecastFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/forecast`);
    return response.json();
  } catch (error) {
    process.stdout.write(error);
    // console.error(error);
  }

  return {};
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: '',
      forecastIcon: '',
      time: '',
    };
  }

  async componentDidMount() {
    const weather = await getWeatherFromApi();
    const forecast = await getForecastFromApi();
    this.setState({
      icon: weather.icon.slice(0, -1),
      forecastIcon: forecast.weather.icon.slice(0, -1),
      time: String(new Date(forecast.time)),
    });
  }

  render() {
    const { icon, forecastIcon, time } = this.state;
    const weatherStyle = {
      width: 50,
      height: 50,
      margin: 20,
    };
    return (
      <div>
        <div className="icon">
          <p style={{
            float: 'left',
            fontSize: '8pt',
            textAlign: 'left',
            horizontalAlign: 'left',
          }}
          >
            { icon && <img alt="weather" src={`/img/${icon}.svg`} style={weatherStyle} /> }
            <h2> Current Weather in Helsinki </h2>
          </p>
          <p style={{
            float: 'left',
            fontSize: '8pt',
            textAlign: 'left',
            horizontalAlign: 'left',
          }}
          >
            { icon && <img alt="forecast" src={`/img/${forecastIcon}.svg`} style={weatherStyle} /> }
            <h2> Forecasted weather in Helsinki </h2>
            { time }
          </p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app'),
);
