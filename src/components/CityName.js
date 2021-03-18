import { useContext } from 'react'
import { HourContext } from '../HourContext'

const CityName = ({city}) => {
    const {current} = useContext(HourContext)
    return (
        <div>
            <h3>{`${city}: ${current}°`}</h3>
            <hr />
        </div>
    )
}

export default CityName
