import React, { useState, useEffect } from "react";
import axios from "axios";

// BOOTSTRAP REACT COMPONENTS IMPORT//
import Accordion from "react-bootstrap/Accordion";

interface IPaste {
  paste_id: number;
  title: string;
  body: string;
  date: string;
}

const PasteList = (): JSX.Element => {
  const [pasteArray, setPasteArray] = useState<IPaste[]>([]); // array state

  async function getAllPaste() {
    const pasteResponse = await axios.get(
      // this any can be removed??
      "https://bluewhale-pastebin.herokuapp.com/pastes"
    );
    const pasteData: IPaste[] = pasteResponse.data;

    setPasteArray(pasteData);
  }

  useEffect(() => {
    getAllPaste();
  }, []);

  console.log(pasteArray);

  return (
    <>
      <ul className="list-group">
        {pasteArray.map((item) => (
          <li className="list-group-item" key={item.paste_id}>
            {item.body}
          </li>
        ))}
        {/* <li className="list-group-item">Cras justo odio</li> */}

        {/* <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> */}
      </ul>
    </>
  );
};

export default PasteList;
