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

    const handleChoice = (event) => {
        console.log(event.target.innerText)
        const userAnswer = event.target.innerText
        if (userAnswer === answer.city) {
            alert('Right')
        }
        else {
            alert('Wrong')
        }
    }

    const randomList = makeRandomList()
    console.log(randomList)
    let randomIndex = Math.floor(Math.random() * 4) 
    let answer = randomList[randomIndex]
    console.log(answer)

    return (
        <>
        <h1>Testing</h1>
        <p> What is the capital of {answer.country} </p>
        {randomList.map( (country, index) => 
            <button key={index} onClick={handleChoice}>{country.city}</button>
        )}
        </>
    )
}

export default CapitalsQuiz