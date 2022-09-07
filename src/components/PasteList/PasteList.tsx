import React, { useEffect } from "react";
import axios from "axios";

// Interface IMPORTS
import { IPaste } from "../../Interfaces/Interfaces";

// Utility Functions
import makeAccordion from "../../utils/makeAccordion";
import useStateManager from "../../useStateManager";

const PasteList = (): JSX.Element => {
  const { pasteArray, setPasteArray } = useStateManager();

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

  return <>{pasteArray.map((item, index) => makeAccordion(item, index))}</>;
};

export default PasteList;
