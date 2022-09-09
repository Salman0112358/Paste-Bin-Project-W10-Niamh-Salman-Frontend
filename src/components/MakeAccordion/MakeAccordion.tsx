import { IPaste } from "../../Interfaces/Interfaces";
import { Accordion } from "react-bootstrap";
//import Form from "react-bootstrap/Form";

import "./MakeAccordion.css";

//Importing utility function///
import getFirstFiveLines from "../../utils/getFirstFiveLines";
// Importing React Component///
import PreviewCard from "../PreviewDrawer/PreviewCard";

function MakeAccordion(
  item: IPaste,
  setPasteArray: React.Dispatch<React.SetStateAction<IPaste[]>>
): JSX.Element {
  return (
    <div key={item.paste_id}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header as="h2">
            <b>
              {item.title} @ <small>({item.date})</small>{" "}
            </b>
          </Accordion.Header>
          <Accordion.Body className="text__Area summary_Area text-white bg-dark">
            {getFirstFiveLines(item.body)}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <PreviewCard
        title={item.title}
        body={item.body}
        paste_id={item.paste_id}
        setPasteArray={setPasteArray}
      />
      <br />
    </div>
  );
}

export default MakeAccordion;
