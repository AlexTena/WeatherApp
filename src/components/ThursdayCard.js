import { useContext } from 'react'
import { HourContext } from '../HourContext'
import HourCard from './HourCard'

const ThursdayCard = () => {
    const {weather, hour, image} = useContext(HourContext)
    return (
        <div className="hour-row">
            <HourCard hour={hour[0]} weather="12°" weatherImg={image}/>
            <HourCard hour={hour[1]} weather={weather.low} weatherImg={image}/>
            <HourCard hour={hour[2]} weather={weather.low} weatherImg={image}/>
            <HourCard hour={hour[3]} weather="31°" weatherImg={image}/>
            <HourCard hour={hour[4]} weather={weather.low} weatherImg={image}/>
            <HourCard hour={hour[5]} weather="30" weatherImg={image}/>
        </div>
        
    )
}

export default ThursdayCard
