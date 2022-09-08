import axios from "axios";

export const deletePaste = async (paste_id: number): Promise<void> => {
  await axios.delete(
    `https://bluewhale-pastebin.herokuapp.com/pastes/${paste_id}`
  );

  console.log(`Post ${paste_id} has been deleted`);
};
