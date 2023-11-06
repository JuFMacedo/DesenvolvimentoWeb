import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./faleconosco.css";

function FaleConosco() {
  const [mensagemEnviada, setMensagemEnviada] = useState(false);
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setMensagemEnviada(true);

    // Vai limpar os campos preenchidos
    setEmail("");
    setMensagem("");

    // Limpar a mensagem de "Mensagem enviada" após 3 segundos
    setTimeout(() => {
      setMensagemEnviada(false);
    }, 3000);
  };

  return (
    <>
      <header className="header">
        <Header />
      </header>
      <div className="content">
        <Container className="content-container">
          <Row>
            <Col md={6}>
              {mensagemEnviada ? (
                <p className="message">Mensagem enviada com sucesso.</p>
              ) : (
                <h5 className="h5 text-center mb-4">
                  Nos conte um pouco sobre o que podemos lhe ajudar e em até 24
                  horas entraremos em contato para que possa ser resolvido
                </h5>
              )}
            </Col>
            <Col md={6}>
              {mensagemEnviada ? null : (
                <Form onSubmit={handleFormSubmit}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>No que podemos lhe ajudar?</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Enviar
                  </Button>
                </Form>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default FaleConosco;
