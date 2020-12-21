import React, { useState } from 'react'
import axios from 'axios'


const Dictionary = () => {

    // Merriam API KEY
    const API_KEY = `9e686b93-b427-4a2d-9f53-14c1ea4f8f8a`
    const API_URL = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=${API_KEY}`

    const [searchTerm, setSearchTerm] = useState('')

    
    const queryAPI = (event) => {
        event.preventDefault()
        console.log(searchTerm)
        axios.get(API_URL)
            .then(response => console.log(response.data))

    }

    return (
        <>
        <h1> hello world</h1> 
        <form onSubmit={queryAPI}>
            <label>Search Term:</label>
            <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            <button>Submit</button>
        </form>
        </>
    )
}

export default Dictionary