import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import almofadasBrancas from "./Almofadasbrancas.png";
// import almofadasColoridas from "./Almofadascoloridas.png";
// import abajurPequeno from "./pq.png";
// import abajurGrande from "./abg.png";
import "./sala.css";

const Sala = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="card-container">
        <Card className="custom-card">
          <Card.Img variant="top" src={almofadasBrancas} />
          <Card.Body>
            <Card.Title>Almofadas Brancas</Card.Title>
            <Card.Text>Elegância e conforto em um toque suave</Card.Text>
            <Button variant="primary">R$179,00</Button>
          </Card.Body>
        </Card>

        <Card className="custom-card">
          <Card.Img variant="top" src={almofadasColoridas} />
          <Card.Body>
            <Card.Title>Almofadas Coloridas</Card.Title>
            <Card.Text>Elegância e conforto em um toque suave</Card.Text>
            <Button variant="primary">R$159,90</Button>
          </Card.Body>
        </Card>

        <Card className="custom-card">
          <Card.Img variant="top" src={abajurPequeno} />
          <Card.Body>
            <Card.Title>Abajur</Card.Title>
            <Card.Text>
              Um abajur que brilha com charme e elegância, trazendo um toque de
              luz suave aos seus momentos mais acolhedores.
            </Card.Text>
            <Button variant="primary">R$109,90</Button>
          </Card.Body>
        </Card>

        <Card className="custom-card">
          <Card.Img variant="top" src={abajurGrande} />
          <Card.Body>
            <Card.Title>Abajur</Card.Title>
            <Card.Text>
              Um abajur que brilha com charme e elegância, trazendo um toque de
              luz suave aos seus momentos mais acolhedores.
            </Card.Text>
            <Button variant="primary">R$189,90</Button>
          </Card.Body>
        </Card>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Sala;
