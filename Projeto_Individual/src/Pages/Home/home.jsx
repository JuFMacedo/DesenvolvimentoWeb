import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Carousel from "react-bootstrap/Carousel";
import firstImage from "../../assets/item1.jpg";
import secondImage from "../../assets/item2.jpg";
import thirdImage from "../../assets/arranjo.jpg";
import { useParams } from "react-router-dom";

function Home() {
  const { login } = useParams();
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className=" Texto1">
        <h2>Transformando Espaços em Lares {login}!</h2>
        <p>
          Os itens de decoração para casa são os toques mágicos que transformam
          casas em lares. São eles que conferem personalidade e charme a cada
          canto, tornando os ambientes verdadeiramente únicos.
        </p>
      </div>
      <Carousel fade className="carousel-rectangular-landscape">
        <Carousel.Item>
          <img src={firstImage} alt="First slide" className="carousel-image" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={secondImage}
            alt="Second slide"
            className="carousel-image"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={thirdImage} alt="Third slide" className="carousel-image" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className=" Texto2">
        <p>
          Das paredes ao chão, dos móveis aos acessórios, cada escolha de
          decoração conta uma história, reflete gostos pessoais e cria uma
          atmosfera acolhedora. A diversidade de itens de decoração para casa é
          infinita, e a escolha é completamente sua. Pode ser uma peça de arte
          única que você encontrou em uma viagem ou uma herança de família que
          carrega memórias preciosas. Independentemente do seu estilo, a
          decoração é a sua chance de contar a história da sua casa e criar um
          refúgio que seja verdadeiramente seu.
        </p>
      </div>
      <div className="categories">
        <ul>
          <li>
            <Link to="/sala">Sala</Link>
          </li>
        </ul>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
