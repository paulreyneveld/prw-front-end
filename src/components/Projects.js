import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import groceryImage from '../images/grocery-app-screen.png'
import quizAppImage from '../images/quiz-app-screen.png'
import coursesAppImage from '../images/courses-app-screen.png'

const Projects = () => {
    return (
        <Row>
        <Col className="gutterfix">
                <a href="https://thproj10api.herokuapp.com/courses" target="_blank" rel="noopener noreferrer"><Image src={coursesAppImage} /></a>
        </Col>
        <Col>
        <a href="https://immense-lowlands-07888.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Image src={groceryImage} /></a>
        </Col>
        <Col>
            <a href="https://paulreyneveld.github.io/THProj4/" target="_blank" rel="noopener noreferrer"><Image src={quizAppImage} /></a>
        </Col>
        </Row>
        
    )
}

export default Projects