import { IPaste } from "../Interfaces/Interfaces";
import { Accordion } from "react-bootstrap";
import Card from "react-bootstrap/Card";
//import Form from "react-bootstrap/Form";

const singleLineCharacterCount = 75;

function makeAccordion(
  item: IPaste,
  index: number
): JSX.Element {

  return (
      <div key={item.paste_id}>
       <Accordion>
      <Accordion.Item eventKey={String(item.paste_id)}>
        <Accordion.Header as="h1" >
          <b>
            {" "}
            {index + 1} {item.title}
          </b>{" "}
        </Accordion.Header>
          <Card >
            <Card.Body>
              {item.body.slice(0, singleLineCharacterCount * 5)}
            </Card.Body>
          </Card>
        <Accordion.Body>{item.body}</Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </div>
   
  );
}

export default makeAccordion;
