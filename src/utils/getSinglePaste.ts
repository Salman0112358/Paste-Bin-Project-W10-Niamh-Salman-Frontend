import axios from "axios";
import { IPaste } from "../Interfaces/Interfaces";

export const getSinglePaste = async (paste_id: number): Promise<IPaste> => {
  const response = await axios.get(
    `https://bluewhale-pastebin.herokuapp.com/pastes/${paste_id}`
  );

  const singlePasteData: IPaste = response.data;

  return singlePasteData;
};
