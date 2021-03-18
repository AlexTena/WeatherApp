

import cloudyImg from './components/assets/svg/021-cloudy-1.svg'
import AppRouter from './components/AppRouter'
import {HourContext} from './HourContext'
import axios from 'axios'
import {useState, useEffect} from 'react'


function App() {

  const weather = {
    high: '0°',
    low: '0°'
  }

  const [current, setCurrent] = useState(0);
  const [monday, setMonday] = useState(weather);
  const [tuesday, setTuesday] = useState(weather);
  const [wednesday, setWednesday] = useState(weather);
  const [thursday, setThursday] = useState(weather);
  const [friday, setFriday] = useState(weather);

  const apiKey = '94147d4c0c4593e1218065e74b4b5186';
  const excludes = 'minutely,alerts';
  const lat = '20.6668200';
  const lon = '-103.3918200';


  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${excludes}&appid=${apiKey}`)
      .then(res => {
        const data = res.data
        console.log(data)
        setCurrent(Math.round(data.current.temp))
        setMonday({
          ...weather, 
          high: Math.round(data.daily[1].temp.max), 
          low: Math.round(data.daily[1].temp.min)
        })
        setTuesday({
          ...weather, 
          high: Math.round(data.daily[2].temp.max), 
          low: Math.round(data.daily[2].temp.min)
        })
        setWednesday({
          ...weather, 
          high: Math.round(data.daily[3].temp.max), 
          low: Math.round(data.daily[3].temp.min)
        })
        setThursday({
          ...weather, 
          high: Math.round(data.daily[4].temp.max), 
          low: Math.round(data.daily[4].temp.min)
        })
        setFriday({
          ...weather, 
          high: Math.round(data.daily[5].temp.max), 
          low: Math.round(data.daily[5].temp.min)
        })
      })
  }, [])

  const hour = ['2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']
    
  return (
    <div>
      <HourContext.Provider value={{
        weather,
        hour,
        image: cloudyImg,
        current,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday
      }}>
        <AppRouter />
      </HourContext.Provider>
    </div>
  );
}

export default App;
