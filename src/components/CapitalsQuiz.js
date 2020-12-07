import React from 'react'
import countryInfo from '../countryInfo.json'

const CapitalsQuiz = () => {

    const getRandomCountry = () => {
        let randomIndex = Math.floor(countryInfo.length * Math.random())
        let randomCountry = countryInfo[randomIndex]
        return randomCountry
    }

    const makeRandomList = () => {
        let countryList = []
        for (let i = 0; i < 4; i++) {
            countryList.push(getRandomCountry())
        }
        return countryList
    }

    let answer = getRandomCountry()

    return (
        <>
        <h1>Testing</h1>
        <p>What is the capital of {answer.country}</p>
        <button>{answer.city}</button>
        <br></br>
        <button>{getRandomCountry().city}</button>
        <button>{getRandomCountry().city}</button>
        <button>{getRandomCountry().city}</button>



        </>
    )
}

export default CapitalsQuiz