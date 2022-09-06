import { IPaste } from "../Interfaces/Interfaces";
import { Accordion } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

const singleLineCharacterCount = 141;

function makeAccordion(item : IPaste, index : number, summaryDisplay : boolean, setSummaryDisplay : React.Dispatch<React.SetStateAction<boolean>>) : JSX.Element {


    return (
      <Accordion key={item.paste_id} onClick={() => (setSummaryDisplay(!summaryDisplay))}>
      <Accordion.Item eventKey={String(item.paste_id)} >
        <Accordion.Header as="h1"><b> {index + 1}  {item.title}</b> </Accordion.Header>
        {summaryDisplay ? <Card style={{display : "block"}}>
                <Card.Body>{(item.body).slice(0,singleLineCharacterCount*5)}</Card.Body>
        </Card> :
        <Card style={{display : "none"}}>
        <Card.Body>{(item.body).slice(0,singleLineCharacterCount*5)}</Card.Body>
        </Card>  }
        <Accordion.Body>
          {item.body}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    )
  }

  export default makeAccordion;