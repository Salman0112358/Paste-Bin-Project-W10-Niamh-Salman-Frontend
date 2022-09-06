import React, {useState} from "react";



//IMPORT BOOTSTRAP
import { IPaste } from "../../Interfaces/Interfaces";

//IMPORT REACT COMPONEN|TS
import NewPaste from "../NewPaste/NewPaste";
import PasteList from "../PasteList/PasteList";

//IMPORT BOOTSTRAP
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = (): JSX.Element => {

  const [inputTitle, setTitle] = useState("");
  const [inputBody, setBody] = useState("");
  const [uploadTrigger, setUploadTrigger] = useState<boolean>(false);
  const [pasteArray, setPasteArray] = useState<IPaste[]>([]); // array state
  const [summaryDisplay, setSummaryDisplay] = useState(true);

  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <NewPaste
              inputTitle={inputTitle}
              setTitle={setTitle}
              inputBody={inputBody}
              setBody={setBody}
              uploadTrigger={uploadTrigger}
              setUploadTrigger={setUploadTrigger}
             />
          </Col>
          <Col xs={6}>
            <PasteList
              pasteArray={pasteArray}
              setPasteArray={setPasteArray}
              summaryDisplay={summaryDisplay}
              setSummaryDisplay={setSummaryDisplay}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
