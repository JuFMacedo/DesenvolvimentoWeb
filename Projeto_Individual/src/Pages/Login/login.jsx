import React, { useState } from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const entrar = () => {
    console.log("FUNCAO ENTRAR");
    const dados = [
      { login: "julia@gmail.com", senha: "123" },
      { login: "rafael@gmail.com", senha: "1234" },
      { login: "usuario2", senha: "000" },
    ];

    if (login === "" || senha === "") {
      console.log("Preencha os campos de login e senha");
    } else {
      const usuario = dados.find((user) => {
        // Extraindo o nome de usuário do email inserido
        const inputUsername = login.split("@")[0];
        return user.login === inputUsername && user.senha === senha;
      });

      if (usuario) {
        const info = {
          login: login,
          senha: senha,
        };

        console.log(info);

        localStorage.setItem("info", JSON.stringify(info));

        setLogin("");
        setSenha("");

        navigate("/home/" + login);
      } else {
        console.log("Login ou Senha Inválidos!");
      }
    }
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <Container>
        <Form className="text-center">
          <h1>Seja bem-vindo a Home Decor</h1>
          <h2>Faça seu Login:</h2>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </Form.Group>
          <Link to={`/home/${login}`}>
            <Button variant="primary" type="button" onClick={entrar}>
              Entrar
            </Button>
          </Link>
        </Form>
      </Container>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Login;
