import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BlogPosts = () => {

    const [blogPosts, setBlogPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/blogs')
            .then(response => {
                console.log(response)
                setBlogPosts(response)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <h1>Testing</h1>
    )
}

export default BlogPosts