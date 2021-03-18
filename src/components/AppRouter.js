import React from 'react'
import Container from 'react-bootstrap/Container'
import MondayCard from './MondayCard'
import TuesdayCard from './TuesdayCard'
import WednesdayCard from './WednesdayCard'
import ThursdayCard from './ThursdayCard'
import FridayCard from './FridayCard'
import WeatherCard from './WeatherCard'
import stormImg from './assets/svg/021-storm.svg'
import rainImg from './assets/svg/021-rain-2.svg'
import cloudyImg from './assets/svg/021-cloudy-1.svg'
import { useContext } from 'react'
import { HourContext } from '../HourContext'
import NavBar from './NavBar'
import CityName from './CityName'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'


const AppRouter = () => {

    const { monday, tuesday, wednesday, thursday, friday} = useContext(HourContext)

    return (
        <Router>
            <NavBar />           
            <Container>
            <div className="header-div">
                <h1> Weather Forecast</h1>
            </div>

            <div className="city-name">
                <CityName city="Guadalajara" />
            </div>
            
            <div className="grid-1">
                <WeatherCard day="Monday" weather={monday} weatherImg={stormImg}/>
                <WeatherCard day="Tuesday" weather={tuesday} weatherImg={stormImg}/>
                <WeatherCard day="Wednesday" weather={wednesday} weatherImg={rainImg} />
                <WeatherCard day="Thursday" weather={thursday} weatherImg={cloudyImg}/>
                <WeatherCard day="Friday" weather={friday} weatherImg={rainImg}/>
            </div>
            <Switch>
                <Route exact path="/monday" component={MondayCard} />
                <Route exact path="/tuesday" component={TuesdayCard} />
                <Route exact path="/wednesday" component={WednesdayCard} />
                <Route exact path="/thursday" component={ThursdayCard} />
                <Route exact path="/friday" component={FridayCard} />
                <Redirect to="/monday" />
            </Switch>
            </Container>
        </Router>
    )
}

export default AppRouter
