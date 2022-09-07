import { useState } from "react";
import { IPaste } from "./Interfaces/Interfaces";

import { InterfaceUseStateManager } from "./Interfaces/Interfaces";

const useStateManager = (): InterfaceUseStateManager => {
  const [inputTitle, setTitle] = useState("");
  const [inputBody, setBody] = useState("");
  const [uploadTrigger, setUploadTrigger] = useState(false);
  const [pasteArray, setPasteArray] = useState<IPaste[]>([]); // array state
  const [showOnlyTitles, setShowOnlyTitles] = useState(true);
  const [bodyCharacterCount, setBodyCharacterCount] = useState(0);
  const [showSummary, setShowSummary] = useState(true);

  return {
    inputTitle,
    setTitle,
    inputBody,
    setBody,
    uploadTrigger,
    setUploadTrigger,
    pasteArray,
    setPasteArray,
    showOnlyTitles,
    setShowOnlyTitles,
    bodyCharacterCount,
    setBodyCharacterCount,
    showSummary,
    setShowSummary,
  };
};

export default useStateManager;
