import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";

const Header = () => {
  const [pesquisa, setPesquisa] = useState("");
  const navigate = useNavigate();

  const handlePesquisa = () => {
    if (pesquisa.trim() !== "") {
      // Redirecionar para a página Sala com o termo de pesquisa na URL
      history.push(`/sala?pesquisa=${pesquisa}`);
    }
  };

  return (
    <header>
      <Container fluid>
        <Navbar expand="lg" className="custom-navbar-bg ml-3">
          <Navbar.Brand as={Link} to="/">
            <img
              src={Logo}
              alt="Logo"
              height="80"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Login
              </Nav.Link>
              <NavDropdown title="Home" id="basic-nav-dropdown">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <NavDropdown.Item as={Link} to="/sala">
                  Sala
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link as={Link} to="/contato" className="d-none d-lg-block">
                Contato
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/faleconosco"
                className="d-none d-lg-block"
              >
                Fale Conosco
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                className="me-2"
                aria-label="Search"
              />
              <button onClick={() => navigate("/outra-rota")}>Buscar</button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
