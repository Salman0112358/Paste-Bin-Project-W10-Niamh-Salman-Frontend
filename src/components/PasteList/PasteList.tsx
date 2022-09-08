import React, { useEffect } from "react";
import axios from "axios";

import "./PasteList.css";

// Interface IMPORTS
import { IPaste } from "../../Interfaces/Interfaces";

// Utility Functions
import MakeAccordion from "../MakeAccordion/MakeAccordion";
import useStateManager from "../../useStateManager";

const PasteList = (): JSX.Element => {
  const { pasteArray, setPasteArray } = useStateManager();

  useEffect(() => {
    async function getAllPaste() {
      const pasteResponse = await axios.get(
        // this any can be removed??
        "https://bluewhale-pastebin.herokuapp.com/pastes"
      );
      const pasteData: IPaste[] = pasteResponse.data;

      setPasteArray(pasteData);
    }

    getAllPaste();
  }, [setPasteArray]);

  return (
    <>{pasteArray.map((item, index) => MakeAccordion(item, setPasteArray))}</>
  );
};

export default PasteList;
