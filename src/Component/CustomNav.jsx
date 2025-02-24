import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Image,
  Container,
  Dropdown,
  InputGroup,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import {
  HouseDoorFill,
  PeopleFill,
  BriefcaseFill,
  ChatDotsFill,
  BellFill,
  Grid3x3GapFill,
  Search,
  SquareFill,
} from "react-bootstrap-icons";

const CustomNav = () => {
  return (
    <Navbar bg="white" expand="lg" className="px-3 shadow-sm container-fluid fixed-top">
      <Container>
        <Navbar.Brand href="#">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            width="34"
            height="34"
            alt="LinkedIn Logo"
          />
        </Navbar.Brand>
        <Form>
          <InputGroup style={{ backgroundColor: "#F4F2EE", borderRadius: "4px", overflow: "hidden" }}>
            <InputGroup.Text style={{ backgroundColor: "#F4F2EE", border: "none" }}>
              <Search />
            </InputGroup.Text>
            <FormControl type="search" placeholder="Cerca" style={{ backgroundColor: "#F4F2EE", border: "none" }} />
          </InputGroup>
        </Form>
        <Nav className="d-flex align-items-center ">
          <Nav.Link href="#" className="text-secondary text-center">
            <HouseDoorFill size={20} className="mb-1 mx-4" />
            <div>Home</div>
          </Nav.Link>
          <Nav.Link href="#" className="text-secondary text-center">
            <PeopleFill size={20} className="mb-1 mx-4" />
            <div>Rete</div>
          </Nav.Link>
          <Nav.Link href="#" className="text-secondary text-center">
            <BriefcaseFill size={20} className="mb-1 mx-4" />
            <div>Lavoro</div>
          </Nav.Link>
          <Nav.Link href="#" className="text-secondary text-center">
            <ChatDotsFill size={20} className="mb-1 mx-4" />
            <div>Messaggistica</div>
          </Nav.Link>
          <Nav.Link href="#" className="text-secondary text-center">
            <BellFill size={20} className="mb-1 mx-4" />
            <div>Notifiche</div>
          </Nav.Link>

          <Dropdown className="border-end ">
            <Dropdown.Toggle variant="white" className="text-dark border-0">
              <Image
                src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                roundedCircle
                width="24"
                height="24"
                className="me-1 d-block"
              />
              <span>Tu</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end mt-2">
              <Dropdown.Item href="#">
                <div className="d-flex aling-items-center">
                  <div>
                    <Image
                      src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                      roundedCircle
                      width="50"
                      height="50"
                      className="me-1 d-block"
                    />
                  </div>
                  <div className="align-content-center">
                    <h6 className="m-0">Team 3 Epicode</h6>
                    <p className="m-0 mt-1">Studente presso EPICODE</p>
                  </div>
                </div>
                <Button variant="outline-primary" className="rounded-pill fw-semibold px-5 py-0 my-2">
                  Visualizza profilo
                </Button>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <h6>Account</h6>
                <p className="fw-semibold text-secondary">
                  <SquareFill className="me-1" style={{ color: "rgb(173, 131, 51)" }} /> Prova 1 mese di Premium per 0
                  EUR
                </p>
                <p>Impostazioni e privacy</p>
                <p>Guida</p>
                <p>Lingua</p>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">
                <h6>Gestisci</h6>
                <p>Post e attività</p>
                <p>Account per la pubblicazione di of...</p>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">
                <p className="m-0">Esci</p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="white" className="text-dark border-0">
              <Grid3x3GapFill size={20} className="mb-1 mx-4 d-block" />
              <span>Per le aziende</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end mt-2" style={{ width: "680px" }}>
              <Container className="m-4">
                <Row xs={1} md={2}>
                  <Col className="border-end">
                    <div href="#">
                      <h6>Le mie App</h6>
                      <p className="mt-4 fw-semibold">Trova lead</p>
                      <p className="my-3 fw-semibold">Gruppi</p>
                      <p className="fw-semibold text-secondary mt-4">Talent</p>
                      <p className="my-3 fw-semibold">Talent Insights</p>
                      <p className="my-3 fw-semibold">Pubblica un'offerta di lavoro</p>
                      <p className="fw-semibold text-secondary mt-4">Vendite</p>
                      <p className="my-3 fw-semibold">Marketplace dei servizi</p>
                      <p className="fw-semibold text-secondary mt-4">Marketing</p>
                      <p className="my-3 fw-semibold">Pubblicizza</p>
                      <p className="fw-semibold text-secondary mt-4">Learning</p>
                      <p className="my-3 fw-semibold">Learning</p>
                    </div>
                  </Col>
                  <Col>
                    <div href="#">
                      <h6>Scopri altro per il business</h6>
                      <p className="mt-4 fw-semibold">Assumi su Linkedin</p>
                      <p>Trova, attrai e assumi</p>
                      <p className="mt-4 fw-semibold">Vendi con Linkedin</p>
                      <p>Trova, attrai e assumi</p>
                      <p className="mt-4 fw-semibold">Assumi su Linkedin</p>
                      <p>Trova, attrai e assumi</p>
                      <p className="mt-4 fw-semibold">Assumi su Linkedin</p>
                      <p>Trova, attrai e assumi</p>
                      <p className="mt-4 fw-semibold">Assumi su Linkedin</p>
                      <p>Trova, attrai e assumi</p>
                      <p className="mt-4 fw-semibold">Assumi su Linkedin</p>
                      <p>Trova, attrai e assumi</p>
                      <p className="mt-4 fw-semibold">Assumi su Linkedin</p>
                      <p>Trova, attrai e assumi</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link
            href="#"
            className="text-center"
            style={{ color: "rgb(131, 97, 24)", textDecorationLine: "underline" }}
          >
            <div>Prova Premium per 0 EUR</div>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNav;
