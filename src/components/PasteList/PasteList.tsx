import React, { useState, useEffect } from "react";
import axios from "axios";

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
      </ul>
    </>
  );
};

export default PasteList;
