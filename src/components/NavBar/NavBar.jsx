import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src="https://i.ibb.co/V2jcGcT/logo.jpg" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Sucursales</Nav.Link>
            <Nav.Link href="#link">Quiero arreglar mi equipo</Nav.Link>
            <NavDropdown title="Equipos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Iphone</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Samsung</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar