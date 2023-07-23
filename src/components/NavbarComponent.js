import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import MapleLogo from '../assets/maple.png'
import './Blog.css'


const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="secondary" fixed="top">
            <Container >

                <Navbar.Brand href="#home" style={{ fontSize: '2rem', fontFamily: "cursive" }}>
                    <div class="logo-container">
                        <img src={MapleLogo} alt="Logo" className="logo" />

                    </div>                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>

                    <Nav>
                        <Nav.Link href="#features">Archives</Nav.Link>
                        <Nav.Link href="#pricing">Search</Nav.Link>
                        <Nav.Link href="#deets" className='bold'>Credit</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent