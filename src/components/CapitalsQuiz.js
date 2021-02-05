import React, { useState } from 'react'
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

        for (let i = 0; i < countryList.length; i++) {
            for (let j = i + 1; j < countryList.length - 1; j++) {
                if (countryList[i] === countryList[j]) {
                    makeRandomList()
                }
            }
        }
        return countryList
    }

    const status = () => {
        if (veracity) {
            return (
            <>
            <p>Nice job</p>
            <button onClick={() => setCountryList(makeRandomList())}>Next question</button>
            </>
            )
        }
    }

    const [countryList, setCountryList] = useState(makeRandomList())
    const [score, setScore] = useState(0)
    const [veracity, setVeracity] = useState(null)

    let randomIndex = Math.floor(Math.random() * 4) 
    const answer = countryList[randomIndex]

    const handleButtonClick = (guess) => {
        if (guess === answer.city) {
            setScore(() => score + 1)
            setVeracity(true)
            setCountryList(makeRandomList())
        }
        else {
            alert('wrong')
            setCountryList(makeRandomList())
        }
    }

    return (
        <>
        <h1>Capital Quiz</h1>
        <p>What is the capital of {answer.country}?</p>
        {
            countryList.map((country, index) => 
                <button key={index} onClick={() => handleButtonClick(country.city)}>{country.city}</button>
            )
        }
        <p>Score {score}</p>
        {status()}
        </>
    )
}

export default CapitalsQuiz