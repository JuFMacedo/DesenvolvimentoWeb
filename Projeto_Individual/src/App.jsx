import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/login";
import Home from "./Pages/Home/home";
import Sala from "./Pages/Sala/sala";
import Contato from "./Pages/Contato/contato";
import FaleConosco from "./Pages/FaleConosco/FaleConosco";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/" element={<Home />} />
        <Route path="/home/:login" element={<Home />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/faleconosco" element={<FaleConosco />} />
        <Route path="/sala" element={<Sala />} />
        <Route path="*" element={<h1>Pagina não encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;
