import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./sala.css";
import { useLocation } from "react-router-dom";

const produtosSala = [
  {
    id: 1,
    nome: "Almofadas Brancas",
    descricao: "Elegância e conforto em um toque suave",
    preco: 179.9,
    imagem: "/assets/Almofadasbrancas.png",
  },
  {
    id: 2,
    nome: "Almofadas Coloridas",
    descricao: "Elegância e conforto em um toque suave",
    preco: 159.9,
    imagem: "/assets/Almofadascoloridas.png",
  },
  {
    id: 3,
    nome: "Abajur",
    descricao:
      "Um abajur que brilha com charme e elegância, trazendo um toque de luz suave aos seus momentos mais acolhedores.",
    preco: 109.9,
    imagem: "/assets/pq.png",
  },
  {
    id: 4,
    nome: "Abajur Grande",
    descricao:
      "Um abajur que brilha com charme e elegância, trazendo um toque de luz suave aos seus momentos mais acolhedores",
    preco: 189.9,
    imagem: "/assets/abg.png",
  },
];

const Sala = () => {
  const location = useLocation();
  const termoPesquisa = new URLSearchParams(location.search).get("pesquisa");
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);

  useEffect(() => {
    if (termoPesquisa) {
      const produtos = produtosSala.filter((produto) =>
        produto.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
      );
      setProdutosFiltrados(produtos);
    } else {
      setProdutosFiltrados(produtosSala);
    }
  }, [termoPesquisa]);

  return (
    <>
      <header>
        <Header />
      </header>

      <div>
        <h1 className="custom-text">
          Transforme a sua sala em um refúgio acolhedor e encantador, repleto de
          personalidade, com a mágica dos itens de decoração. Desde almofadas
          que adicionam elegância e conforto a um toque suave, até abajures que
          brilham com charme e elegância, cada peça conta uma história e cria
          uma atmosfera única. Escolha com carinho e deixe que sua sala reflita
          seus gostos pessoais, transformando-a em um lar onde a beleza se
          entrelaça com o aconchego. Permita que cada escolha de decoração conte
          a história da sua casa e crie um espaço verdadeiramente seu.
        </h1>
      </div>
      <div>
        <div className="card-container">
          {produtosFiltrados.map((produto) => (
            <Card key={produto.id} className="custom-card">
              <Card.Img variant="top" src={produto.imagem} />
              <Card.Body>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>{produto.descricao}</Card.Text>
                <Button variant="primary">R${produto.preco.toFixed(2)}</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Sala;
