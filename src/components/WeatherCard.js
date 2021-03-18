import React from 'react'

const WeatherCard = ({day, weather, weatherImg}) => {
    return (
        <div className="weather-card">
            <div className="card-image">
                <h3>{day}</h3>
                <img  src={weatherImg} alt="Weather Sun"/>
                <p> {`${weather.high}° / ${weather.low}°`} </p>
            </div>
        </div>
    )
}

export default WeatherCard
