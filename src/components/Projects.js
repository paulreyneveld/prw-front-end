import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import test from '../images/grocery-app-screen.png'

const Projects = () => {
    return (
        <Row>
        <Col className="gutterfix">
                <a href="https://immense-lowlands-07888.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Image src={test} /></a>
        </Col>
        <Col>
            <a href="https://immense-lowlands-07888.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Image src={test} /></a>
        </Col>
        <Col>
            <a href="https://immense-lowlands-07888.herokuapp.com/" target="_blank" rel="noopener noreferrer"><Image src={test} /></a>
        </Col>
        </Row>
        
    )
}

export default Projects