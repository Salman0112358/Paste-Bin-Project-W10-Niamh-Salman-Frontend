import axios from "axios";

export const deletePaste = async (paste_id: number): Promise<void> => {
  const response = await axios.delete(
    `https://bluewhale-pastebin.herokuapp.com/pastes/${paste_id}`
  );

  console.log(response.status);
  console.log(`Post ${paste_id} has been deleted`);
};
