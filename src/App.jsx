import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfiloPrincipale from "./Component/Profilo/ProfiloPrincipale";
import Chat from "./Component/Profilo/Chat";
import { Container } from "react-bootstrap";
import CustomNav from "./Component/Nav_Footer/CustomNav";
import MyHome from "./Component/Home/MyHome";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <CustomNav />
      <Routes>
        <Container fluid className="pt-3">
          <Container>
            <Route path="/" element={<MyHome />} />
            <Route path="/me" element={<ProfiloPrincipale />} />
          </Container>
        </Container>
      </Routes>
      <Chat />
    </BrowserRouter>
  );
}

export default App;
