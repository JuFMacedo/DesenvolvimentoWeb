import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import { useNavigate } from "react-router-dom";

const Contato = () => {
  const navigate = useNavigate();

  // Vai redirecionar para a rota da página Home
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="contact-container">
        <h1>Contato</h1>
        <section>
          <h2>Informações de Contato:</h2>
          <h3>Telefone: (24) 2200-0000</h3>
          <h3>Email: homedecor@gmail.com</h3>
        </section>
      </div>
      <button onClick={handleClick}>Clique para voltar para Home </button>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contato;
