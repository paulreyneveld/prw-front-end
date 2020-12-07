import React, { useEffect, useState } from 'react'
import axios from 'axios'
import countryInfo from '../countryInfo.json'

const CapitalsQuiz = () => {

    const getRandomCountry = () => {
        let randomIndex = Math.floor(countryInfo.length * Math.random())
        let randomCountry = countryInfo[randomIndex]
        return randomCountry
    }
    console.log(countryInfo)

    const makeRandomList = () => {
        let countryList = []
        for (let i = 0; i < 4; i++) {
            countryList.push(getRandomCountry())
        }
        return countryList
    }

    console.log(getRandomCountry())
    return (
        <>
        <h1>Testing</h1>
        <p>What is the capital of {}</p>

        </>
    )
}

export default CapitalsQuiz