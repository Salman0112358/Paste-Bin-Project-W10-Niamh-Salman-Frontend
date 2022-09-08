import axios from "axios";

export const deletePaste = async (paste_id: number): Promise<void> => {
  axios.delete(`https://bluewhale-pastebin.herokuapp.com/pastes/${paste_id}`);
};
