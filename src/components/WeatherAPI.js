import React, { useState, useEffect } from 'react'
import axios from 'axios'

// const WEATHER_API_KEY = '563a8ff5a030aa673a38e6c9efc493f8'
// let weatherApiUrl = `http://api.weatherstack.com/current?access_key=${WEATHER_API_KEY}&query=Portland`

const WEATHER_API_KEY = `1239bcbd17a16f2dd54d2c5e86076811`
const weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=45.4712&lon=-122.5988&units=imperial&exclude=minutely&appid=${WEATHER_API_KEY}`

const WeatherAPI = () => {
    const [ weatherData, setWeatherData ] = useState([])

    const getWeatherData = () => {
        return axios.get(weatherApiUrl)
            .then(response => {
                console.log(response.data)
                setWeatherData(response.data.current)
            })
            .catch(error => console.log(error))
    }

    useEffect(getWeatherData, [])
    console.log(weatherData.temp)
    console.log(weatherData.current)
    return (
        <>
        <h4>Portland Weather: </h4>
        <ul>
            <li>Temp: {weatherData.temp}</li>
        </ul>
        </>
    )
}

export default WeatherAPI