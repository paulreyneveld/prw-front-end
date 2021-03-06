import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WEATHER_API_KEY = `1239bcbd17a16f2dd54d2c5e86076811`
const weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=45.4712&lon=-122.5988&units=imperial&exclude=minutely&appid=${WEATHER_API_KEY}`

const WeatherAPI = () => {
    const [ weatherData, setWeatherData ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const getWeatherData = () => {
        return axios.get(weatherApiUrl)
            .then(response => {
                setWeatherData(response.data.hourly)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }

    useEffect(getWeatherData, [])
    
    const treatedHourlyData = weatherData.map(hour => {
        const timeStamp = hour.dt
        const date = new Date(timeStamp * 1000)
        const hours = date.getHours();
        return { time: hours, pop: hour.pop, temp: hour.temp, feels_like: hour.feels_like }
    })

    const viewWeatherInfo = () => {
        if (loading) {
            return (<p>loading. . . </p>)
        }
        if (treatedHourlyData.length > 0) {
            return (
                treatedHourlyData.slice(0,8).map((entry, i) => 
                <>
                <h6 key={entry.temp}>{entry.time}:00</h6>
                <li className="sidebar-li" key={i}>Probability of Precipitation: {Math.round(entry.pop * 100)}%<br />
                Temperature: {Math.round(entry.temp)} <br />
                Feels Like: {Math.round(entry.feels_like)}</li>
                </>
                )
            )
        }
    }

    return (
        <>
        <h6>PDX Hourly Weather</h6>
        <ul className="sidebar-ul">
        {viewWeatherInfo()}
        </ul>
        </>
    )
}

export default WeatherAPI