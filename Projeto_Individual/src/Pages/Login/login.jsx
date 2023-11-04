import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();
  const { parametro } = useParams();
  console.log(parametro);

  // function entrar(){}
  const entrar = () => {
    console.log("FUNCAO ENTRAR");
    if (login == "" || senha == "") {
      console.log("Preencha os campo de login e senha");
    } else if (login == dados.login && senha == dados.senha) {
      const info = {
        login: login,
        senha: senha,
      };
      console.log(info);

      localStorage.setItem("info", JSON.stringify(info));

      setLogin("");
      setSenha("");

      navigate("/home/" + login);
      // navigate(/${login});
    } else {
      console.log("Login ou Senha Inválidos!");
    }
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <Form>
        <h2>Faça seu Login:</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Digite seu email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha" />
        </Form.Group>
        <Link to="/home">
          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Link>
      </Form>

      <footer>
        <Footer />
      </footer>
    </>
  );

  const dados = [
    { login: "julia", senha: "123" },
    { login: "rafael", senha: "1234" },
    { login: "usuario2", senha: "000" },
  ];
};
export default Login;
