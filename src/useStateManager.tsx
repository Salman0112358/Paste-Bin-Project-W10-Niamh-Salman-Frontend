import {useState} from 'react'
import { IPaste } from './Interfaces/Interfaces';

import { InterfaceUseStateManager } from './Interfaces/Interfaces';


const useStateManager =  () : InterfaceUseStateManager => {


const [inputTitle, setTitle] = useState("");
const [inputBody, setBody] = useState("");
const [uploadTrigger, setUploadTrigger] = useState(false);
const [pasteArray, setPasteArray] = useState<IPaste[]>([]); // array state
const [summaryDisplay, setSummaryDisplay] = useState(true);
const [showOnlyTitles, setShowOnlyTitles] = useState(true);

return ({inputTitle,setTitle, inputBody,setBody,uploadTrigger,setUploadTrigger, pasteArray, setPasteArray, summaryDisplay, setSummaryDisplay, showOnlyTitles, setShowOnlyTitles})
}
  
export default useStateManager;