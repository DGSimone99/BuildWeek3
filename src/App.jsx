import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfiloPrincipale from "./Component/Profilo/ProfiloPrincipale";
import Chat from "./Component/Profilo/Chat";
import { Container } from "react-bootstrap";
import CustomNav from "./Component/Nav_Footer/CustomNav";
import MyHome from "./Component/Home/MyHome";
import { BrowserRouter, Route, Routes } from "react-router";
import MainUtente from "./Component/Utenti/MainUtente";
import PageLavoro from "./Component/Lavoro/PageLavoro";
import EditExperiences from "./Component/EditExperiences/EditExperiences";
import FdMp from "./Component/FdMp";

function App() {
  return (
    <BrowserRouter>
      <CustomNav />
      <Container fluid className="p-0">
        <Routes>
          <Route
            path="/"
            element={
              <Container className="pt-3">
                <MyHome />
              </Container>
            }
          />
          <Route
            path="/me"
            element={
              <Container className="pt-3">
                <ProfiloPrincipale />
              </Container>
            }
          />
          <Route
            path="/:id"
            element={
              <Container className="pt-3">
                <MainUtente />
              </Container>
            }
          />
          <Route
            path="/jobs"
            element={
              <Container className="pt-3">
                <PageLavoro />
              </Container>
            }
          />
          <Route path="/editexperiences" element={<EditExperiences />} />
          <Route path="shrek" element={<FdMp />} />
        </Routes>
      </Container>
      <Chat />
    </BrowserRouter>
  );
}

export default App;
