/*
params: 
    - string, call it inputStr
return: string
*/

export default function getFirstFiveLines(inputStr: string): string {
  const lines = inputStr.split("\n");
  const summary = lines.slice(0, 5).join("\n");

  return summary;
}
