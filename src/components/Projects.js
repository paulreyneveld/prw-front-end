import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import groceryImage from '../images/grocery-app-screen.png'
import quizAppImage from '../images/quiz-app-screen.png'
import coursesAppImage from '../images/courses-app-screen.png'

const Projects = () => {
    return (
        <>
        <p>Disclaimer: Please allow a few moments for individual projects to load. </p>
        <Row>
        <Col className="gutterfix">
                <a href="https://thproj10api.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Image src={coursesAppImage} /></a>
                <p>This project was the culmination of my  Treehouse Techdegree experience. It consists of a frontend 
                running React with state management through the Context API and a backend via Express. It is a fully functional course management tool. 
                For demo purposes, the database is Sqlite with Sequelize functioning
                as an ORM. One can also feel free to create a new user account for testing purposes or use the credentials below. 
                </p>
                <p>For testing purposes: <br />
                    Username: joe@smith.com
                    <br />
                    Password: joepassword
                </p>
                <p><a href="#">Repo</a></p>
        </Col>
        <Col>
        <a href="https://immense-lowlands-07888.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Image src={groceryImage} /></a>
                <p>This is a clone of a grocery list app that I put together to synchronize the the needs of myself and my partner. 
                It's running with a React frontend. State management is through the Hooks API, and data persistence is handled through 
                MongoDB</p>
                <p><a href="#">Repo</a></p>
        </Col>
        <Col>
            <a href="https://paulreyneveld.github.io/THProj4/" target="_blank" rel="noopener noreferrer"><Image src={quizAppImage} /></a>
        </Col>
        </Row>
        </>
    )
}

export default Projects