import React, { useState } from 'react'
import countryInfo from '../countryInfo.json'

const CapitalsQuiz = () => {
    
    const getRandomCountry = () => {
        let randomIndex = Math.floor(countryInfo.length * Math.random())
        let randomCountry = countryInfo[randomIndex]
        return randomCountry
    }
    
    const makeRandomList = () => {
        // Initialize empty array
        let countryList = []
        // Stock array with values
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

    const [countryList, setCountryList] = useState(makeRandomList())

    console.log(countryList)

    let randomIndex = Math.floor(Math.random() * 4) 
    console.log(countryList[randomIndex])
    const answer = countryList[randomIndex]

    return (
        <>
        <h1>Testing</h1>
        <p>What is the capital of </p>
        </>
    )
}

export default CapitalsQuiz