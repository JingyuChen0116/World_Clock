import React from 'react'
import City from './City'
import ClockBackground from './ClockBackground'
import ClockPointer from './ClockPointer'
import Time from './Time'

export default function Clock(props) {
  const { city, timezone } = props

  const unitDeg = 360 / 60
  const hourUnitDeg = 360 / 12

  const [year, setYear] = React.useState()
  const [month, setMonth] = React.useState()
  const [day, setDay] = React.useState()
  const [hour, setHour] = React.useState()
  const [minute, setMinute] = React.useState()
  const [second, setSecond] = React.useState()

  const [secondDeg, setSecondDeg] = React.useState()
  const [minuteDeg, setMinuteDeg] = React.useState()
  const [hourDeg, setHourDeg] = React.useState()

  const [light, setLight] = React.useState(true)

  const setTime = () => {
    const currentTime = new Date()
    const currentTimeWithTimezone = new Date(currentTime.getTime() + timezone * 60 * 60 * 1000)
    setYear(currentTimeWithTimezone.getUTCFullYear())
    setMonth(currentTimeWithTimezone.getUTCMonth() + 1)
    setDay(currentTimeWithTimezone.getUTCDay())
    setHour(currentTimeWithTimezone.getUTCHours())
    setMinute(currentTimeWithTimezone.getUTCMinutes())
    setSecond(currentTimeWithTimezone.getUTCSeconds())

    let pureHourDeg = currentTimeWithTimezone.getUTCHours() * hourUnitDeg
    let pureMinuteDeg = currentTimeWithTimezone.getUTCMinutes() * unitDeg
    let pureSecondDeg = currentTimeWithTimezone.getUTCSeconds() * unitDeg

    setHourDeg(pureHourDeg + pureMinuteDeg / 12)
    setMinuteDeg(pureMinuteDeg + pureSecondDeg / 60)
    setSecondDeg(pureSecondDeg)
  }

  React.useEffect( () => {
    setTime()
    // update every 20ms
    const handle = setInterval(() => {
      setTime()
    }, 200)
    return () => {
      clearInterval(handle)
    }
  }, [])

  React.useEffect( () => {
    // if (+hour >= 6 && +hour < 18) {
    //   setLight(true)
    // } else {
    //   setLight(false)
    // }

    (+hour >= 6 && +hour < 18) ? setLight(true) : setLight(false)
  }, [hour])

  return (
    <ClockBackground size={'400px'} light={light}>
      <City light={light}>{city}</City>
      <ClockPointer 
        light={light} 
        hourDeg={hourDeg} 
        minuteDeg={minuteDeg} 
        secondDeg={secondDeg} />
      <Time light={light}>
        {year}-{month}-{day} {hour}:{minute}:{second}
      </Time>
    </ClockBackground>
  )
}