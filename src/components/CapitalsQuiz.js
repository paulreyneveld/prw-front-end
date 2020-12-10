import React, { useState, useEffect } from 'react'
import countryInfo from '../countryInfo.json'

const CapitalsQuiz = () => {

    const [quizContents, setQuizContents] = useState([])    
    const [randomIndex, setRandomIndex] = useState(null)
    const [answer, setAnswer] = useState([])
    const [update, setUpdate] = useState(false)

    const getRandomCountry = () => {
        let randomIndex = Math.floor(countryInfo.length * Math.random())
        let randomCountry = countryInfo[randomIndex]
        return randomCountry
    }

    useEffect(() => makeRandomList(), [])
    
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

        const numInRange = Math.floor(Math.random() * 4)
        setQuizContents(quizContents.concat(countryList))
        setRandomIndex(numInRange)
    }

    console.log(quizContents)
    return (
        <>
        <h1>Testing</h1>
        <p>{quizContents[0].country}</p>
        </>
    )
}

export default CapitalsQuiz