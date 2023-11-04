import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <header>
      <>
        <div className="Logo">
          <img src={Logo} alt="logo Home Decor" />
        </div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Home Decor</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Home" id="basic-nav-dropdown">
                  <Nav.Link as={Link} to="/home">
                    Home
                  </Nav.Link>
                  <NavDropdown.Item href="#action/3.1">Sala</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Quarto</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Cozinha
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>

                <Nav.Link as={Link} to="/contato">
                  Contato
                </Nav.Link>
                <Nav.Link as={Link} to="/faleconosco">
                  Fale Conosco
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </header>
  );
};

export default Header;
