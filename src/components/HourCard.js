import React from 'react'


const HourCard = ({hour, weather, weatherImg}) => {
    return (
        <div className="hour-card">
            <h4>{hour}</h4>
            <img src={weatherImg} alt="hour-card"/>
            <p>{weather}</p>
        </div>
        
    )
}

export default HourCard
