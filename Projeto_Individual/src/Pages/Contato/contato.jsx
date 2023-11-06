import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import { useNavigate } from "react-router-dom";
import "./contato.css";

const Contato = () => {
  const navigate = useNavigate();

  // Vai redirecionar para a rota da página Home
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <div className="container">
        <h1>Contato</h1>
        <section className="contact-info ">
          <h2>Informações de Contato:</h2>
          <h3>Telefone: (24) 2200-0000</h3>
          <h3>Email: homedecor@gmail.com</h3>
          <button onClick={handleClick} className="centered-button">
            Clique para voltar para Home{" "}
          </button>
        </section>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contato;
