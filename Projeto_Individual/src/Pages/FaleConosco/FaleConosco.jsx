import Form from "react-bootstrap/Form";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import "./faleconosco.css";

function FaleConosco() {
  return (
    <>
      <header>
        <Header />
      </header>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Digite sua Mensagem">
          <Form.Label>No que podemos lhe ajudar? </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default FaleConosco;
