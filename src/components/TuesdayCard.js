import { useContext } from 'react'
import { HourContext } from '../HourContext'
import stormImg from './assets/svg/021-storm.svg'
import rainImg from './assets/svg/021-rain-2.svg'
import HourCard from './HourCard'

const TuesdayCard = () => {
    const {weather, hour, image} = useContext(HourContext)
    return (
        <div className="hour-row">
            <HourCard hour={hour[0]} weather="25°" weatherImg={rainImg}/>
            <HourCard hour={hour[1]} weather={weather.low} weatherImg={image}/>
            <HourCard hour={hour[2]} weather={weather.low} weatherImg={rainImg}/>
            <HourCard hour={hour[3]} weather="19°" weatherImg={image}/>
            <HourCard hour={hour[4]} weather={weather.low} weatherImg={image}/>
            <HourCard hour={hour[5]} weather="18°" weatherImg={stormImg}/>
        </div>
        
    )
}

export default TuesdayCard
