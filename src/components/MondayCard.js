import { useContext } from 'react'
import { HourContext } from '../HourContext'
import stormImg from './assets/svg/021-storm.svg'
import rainImg from './assets/svg/021-rain-2.svg'
import cloudyImg from './assets/svg/021-cloudy-1.svg'
import HourCard from './HourCard'


const MondayCard = () => {
    const {weather, hour} = useContext(HourContext)

    return (
        <div className="hour-row">
            <HourCard hour={hour[0]} weather={weather.low} weatherImg={stormImg}/>
            <HourCard hour={hour[1]} weather={weather.low} weatherImg={rainImg}/>
            <HourCard hour={hour[2]} weather={weather.low} weatherImg={cloudyImg}/>
            <HourCard hour={hour[3]} weather={weather.low} weatherImg={cloudyImg}/>
            <HourCard hour={hour[4]} weather={weather.low} weatherImg={rainImg}/>
            <HourCard hour={hour[5]} weather={weather.low} weatherImg={stormImg}/>
        </div>
    )
}

export default MondayCard
