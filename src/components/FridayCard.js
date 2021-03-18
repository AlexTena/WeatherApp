import { useContext } from 'react'
import { HourContext } from '../HourContext'
import sunny from './assets/svg/021-sun.svg'
import HourCard from './HourCard'

const FridayCard = () => {
    const {weather, hour} = useContext(HourContext)
    return (
        <div className="hour-row">
            <HourCard hour={hour[0]} weather="29" weatherImg={sunny}/>
            <HourCard hour={hour[1]} weather={weather.high} weatherImg={sunny}/>
            <HourCard hour={hour[2]} weather={weather.low} weatherImg={sunny}/>
            <HourCard hour={hour[3]} weather="11" weatherImg={sunny}/>
            <HourCard hour={hour[4]} weather={weather.high} weatherImg={sunny}/>
            <HourCard hour={hour[5]} weather="12" weatherImg={sunny}/>
        </div>
        
    )
}

export default FridayCard
