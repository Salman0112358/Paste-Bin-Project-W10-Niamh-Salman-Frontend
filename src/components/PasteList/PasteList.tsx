import React, { useState, useEffect } from "react";
import axios from "axios";

// Interface IMPORTS
import { IPaste } from "../../Interfaces/Interfaces";

// Utility Functions
import makeAccordion from "../../utils/makeAccordion";

const PasteList = (): JSX.Element => {
  const [pasteArray, setPasteArray] = useState<IPaste[]>([]); // array state
  const [summaryDisplay, setSummaryDisplay] = useState(true);

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

  return (
    <>
      {pasteArray.map((item, index) =>
        makeAccordion(item, index, summaryDisplay, setSummaryDisplay)
      )}
    </>
  );
};

export default PasteList;
