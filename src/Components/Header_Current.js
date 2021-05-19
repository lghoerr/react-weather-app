import React from 'react';
import weather_icon from '../images/weather_icon.png';

const Header_Current = ({temp, weather}) => {

return (
    <div style={{ textAlign: "center", color: "darkblue" }}>
        <h1>Weather App</h1>
        <img src={weather_icon} alt="Weather"/>
        <h2>Temperature: {temp}</h2> 
        <h2>Forecast: {weather}</h2>
    </div>
);
}

export default Header_Current;