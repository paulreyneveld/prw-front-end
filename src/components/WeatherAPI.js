import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WEATHER_API_KEY = `1239bcbd17a16f2dd54d2c5e86076811`
const weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=45.4712&lon=-122.5988&units=imperial&exclude=minutely&appid=${WEATHER_API_KEY}`

const WeatherAPI = () => {
    const [ weatherData, setWeatherData ] = useState([])

    const getWeatherData = () => {
        return axios.get(weatherApiUrl)
            .then(response => {
                setWeatherData(response.data.hourly)
            })
            .catch(error => console.log(error))
    }

    useEffect(getWeatherData, [])
    console.log(weatherData)
    const treatedHourlyData = weatherData.map(hour => {
        const timeStamp = hour.dt
        const date = new Date(timeStamp * 1000)
        const hours = date.getHours();
        return { time: hours, pop: hour.pop, temp: hour.temp, feels_like: hour.feels_like }
    })

    // const viewWeatherInfo = () => {
    //     if (treatedHourlyData.length > 0) {
    //         return (
    //             `At ${treatedHourlyData[0].time}:00
    //             Probability of Precipitation: ${treatedHourlyData[0].pop}`
    //         )
    //     }
    // }

    const viewWeatherInfo = () => {
        if (treatedHourlyData.length > 0) {
            return (
                treatedHourlyData.map((entry, i) => 
                <>
                <h5 key={entry.temp}>At {entry.time}:00 GMT</h5>
                <p key={i}>Probability of Precipitation: {entry.pop}<br />
                Temperature: {entry.temp} <br />
                Feels Like: {entry.feels_like}</p>
                </>
                )
            )
        }
    }

    return (
        <>
        <h4>PDX Hourly Weather: </h4>
        <ul>
        {viewWeatherInfo()}
        </ul>
        </>
    )
}

export default WeatherAPI