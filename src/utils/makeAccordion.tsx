import { IPaste } from "../Interfaces/Interfaces";
import { Accordion } from "react-bootstrap";
import Card from "react-bootstrap/Card";
//import Form from "react-bootstrap/Form";

import "./makeAccordion.css";
import getLineNumber from "./getLineNumber";

const singleLineCharacterCount = 75;

function makeAccordion(item: IPaste, index: number): JSX.Element {
  return (
    <div key={item.paste_id}>
      <Accordion>
        <Accordion.Item eventKey={String(item.paste_id)}>
          <Accordion.Header as="h1">
            <b>
              {" "}
              {item.title} @ <small>({item.date})</small>
            </b>{" "}
          </Accordion.Header>
          <Card className="text-white bg-success">
            <Card.Body className="summary_Area text-white bg-success">
              {item.body.slice(0, singleLineCharacterCount * 5)}
            </Card.Body>
          </Card>
          <Accordion.Body className="text__Area summary_Area text-white bg-dark">
            {item.body}
          </Accordion.Body>
          {getLineNumber(item.body)}
        </Accordion.Item>
      </Accordion>
      <br />
    </div>
  );
}

export default makeAccordion;
