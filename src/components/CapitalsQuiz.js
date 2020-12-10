import React from 'react'
// First, I need to import the compiled json for all of the countries/capitals.
import countryInfo from '../countryInfo.json'

/* Okay, so what are the steps I need to take?

First, I need to import the compiled json for all of the countries/capitals.

Second, I need to generate a random country/capital combination. One of these will be the question answer.

Third, I need to generate three more random country/capital combinations. I don't want there to be any
duplicates. 

*/ 

// Second, I need to generate a random country/capital combination. One of these will be the question answer.

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
        let countrySet = new Set(countryList)
        if (countrySet.length < 4) {
            makeRandomList()
        }
        return countrySet
    }

    let randomList = makeRandomList()
    console.log(randomList)
    let arrayified = new Array(randomList)
    console.log(arrayified)

    return (
        <>
        <h1>Testing</h1>
        <p>What is the capital of</p>
        </>
    )
}

export default CapitalsQuiz