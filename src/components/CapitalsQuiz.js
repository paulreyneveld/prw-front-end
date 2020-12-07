import React, { useEffect, useState } from 'react'
import axios from 'axios'


const CapitalsQuiz = ({ countryData }) => {

    const getRandomCountry = () => {
        let randomIndex = Math.floor(countryData.length * Math.random())
        let randomCountry = countryData[randomIndex]
        return randomCountry
    }

    const makeRandomList = () => {
        let countryList = []
        for (let i = 0; i < 4; i++) {
            countryList.push(getRandomCountry())
        }
        return countryList
    }

    let randomCountry = getRandomCountry()
    console.log(randomCountry)
    console.log(randomCountry.name)
    return (
        <>
        <h1>Testing</h1>
        <p>What is the capital of {}</p>
        {countryData.map(country => {
          return <p>{country.name}</p>
        })}

        </>
    )
}

export default CapitalsQuiz