import React, { useState } from 'react'
import axios from 'axios'


const Dictionary = () => {

    const [searchTerm, setSearchTerm] = useState('')
    
    const queryAPI = (event) => {
        event.preventDefault()
        console.log(searchTerm)
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