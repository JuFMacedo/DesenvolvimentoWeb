import "./home.css";

const Home = () => {
  return (
    <div>
      <header>
        <Heather />
      </header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1>
              <span>Home Decor</span>
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Departamento
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Banheiro
                  </a>
                  <a className="dropdown-item" href="#">
                    Cozinha
                  </a>
                  <a className="dropdown-item" href="#">
                    Sala
                  </a>
                  <a className="dropdown-item" href="#">
                    Quarto
                  </a>
                </div>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <h2>Transformando Espaços em Lares</h2>
      <p>
        <strong>
          Os itens de decoração para casa são os toques mágicos que transformam
          casas em lares.
          <br />
          São eles que conferem personalidade e charme a cada canto, tornando os
          ambientes verdadeiramente únicos.
        </strong>
      </p>
      <div className="d-flex justify-content-center">
        <div
          id="carouselExample"
          className="carousel slide"
          style={{ maxWidth: "80%" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/assets/item1.jpg" // Corrija o caminho da imagem
                alt="Jarros coloridos para enfeite"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/item2.jpg" // Corrija o caminho da imagem
                alt="almofadas brancas"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/item3.png" // Corrija o caminho da imagem
                alt="almofadas coloridas"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>

      <p>
        <strong>
          Das paredes ao chão, dos móveis aos acessórios, cada escolha de
          decoração conta uma história, reflete gostos pessoais e cria uma
          atmosfera acolhedora. A diversidade de itens de decoração para casa é
          infinita, e a escolha é completamente sua. Pode ser uma peça de arte
          única que você encontrou em uma viagem ou uma herança de família que
          carrega memórias preciosas. Independentemente do seu estilo, a
          decoração é a sua chance de contar a história da sua casa e criar um
          refúgio que seja verdadeiramente seu.
        </strong>
      </p>
      <nav>
        <ul>
          <a className="btn btn-primary" href="contato.html" role="button">
            Contato
          </a>
          <a className="btn btn-primary" href="contato.html" role="button">
            Login
          </a>
        </ul>
      </nav>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
