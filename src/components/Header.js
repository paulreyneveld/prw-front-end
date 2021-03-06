import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Button, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" className="navbar-padding">
        <Nav>
            <Navbar.Brand>prw</Navbar.Brand>
            <Nav.Item>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            </Nav.Item>
            </Nav>
        </Navbar>

        <Jumbotron className="bg-image">
            <h1>Well, Hello world!</h1>
            <p>
            Welcome to Paul Reinvents Wheels.</p>
            <p>
            <Button variant="primary">Contact</Button>
            </p>
        </Jumbotron>
        </>
    )
}

export default Header