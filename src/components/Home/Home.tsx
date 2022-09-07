import React from "react";

//IMPORT BOOTSTRAP

//IMPORT REACT COMPONEN|TS
import NewPaste from "../NewPaste/NewPaste";
import PasteList from "../PasteList/PasteList";

//IMPORT BOOTSTRAP
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = (): JSX.Element => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <NewPaste />
          </Col>
          <Col xs={6}>
            <PasteList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
