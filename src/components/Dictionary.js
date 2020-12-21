import React, { useState } from 'react'
import axios from 'axios'


const Dictionary = () => {

    // Merriam API KEY
    const WEBSTER_API_KEY = process.env.REACT_APP_WEBSTERS_API_KEY
    const API_URL = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=${WEBSTER_API_KEY}`
    console.log(WEBSTER_API_KEY)
    const [searchTerm, setSearchTerm] = useState('')
    const [definition, setDefinition] = useState([])
    
    const queryAPI = (event) => {
        event.preventDefault()
        console.log(searchTerm)
        axios.get(API_URL)
            .then(response => {
                console.log(response.data)
                setDefinition(response.data[0].shortdef)
            })
            .catch(error => console.log(error))

    }
    
    console.log(definition)


    return (
        <>
        <h1> hello world</h1> 
        <form onSubmit={queryAPI}>
            <label>Search Term:</label>
            <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            <button>Submit</button>
        </form>
        {definition.map(entry => <p>{entry}</p>)}
        </>
    )
}

export default Dictionary