import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfiloPrincipale from "./Component/Profilo/ProfiloPrincipale";
import Chat from "./Component/Profilo/Chat";
import { Container } from "react-bootstrap";
import CustomNav from "./Component/Nav_Footer/CustomNav";
import MyHome from "./Component/Home/MyHome";
import { BrowserRouter, Route, Routes } from "react-router";
import CustomFooter from "./Component/Nav_Footer/CustomFooter";
import MainUtente from "./Component/Utenti/MainUtente";
import PageLavoro from "./Component/Lavoro/PageLavoro";
import EditExperiences from "./Component/EditExperiences/EditExperiences";

function App() {
  return (
    <BrowserRouter>
      <CustomNav />
      <Container fluid className="pt-3">
        <Routes>
          <Route
            path="/"
            element={
              <Container>
                <MyHome />
              </Container>
            }
          />
          <Route
            path="/me"
            element={
              <Container>
                <ProfiloPrincipale />
              </Container>
            }
          />
          <Route
            path="/:id"
            element={
              <Container>
                <MainUtente />
              </Container>
            }
          />
          <Route
            path="/jobs"
            element={
              <Container>
                <PageLavoro />
              </Container>
            }
          />
          <Route path="/editexperiences" element={<EditExperiences />} />
        </Routes>
      </Container>
      <Chat />
      <CustomFooter />
    </BrowserRouter>
  );
}

export default App;
