import { Col, Row } from "react-bootstrap";
import CreaPost from "./CreaPost";
import PrimoPiano from "./PrimoPiano";
import User from "./User";
import ConsigliPerTe from "./ConsigliPerTe";

const MyHome = () => {
  return (
    <>
      <Row xs={1} md={2} lg={3}>
        <Col md={4} lg={3}>
          <User />
        </Col>
        <Col md={8} lg={6}>
          <CreaPost />
          <ConsigliPerTe />
        </Col>
        <Col lg={3}>
          <PrimoPiano />
        </Col>
      </Row>
    </>
  );
};
export default MyHome;
