import getLineNumber from "./getLineNumber";

test("should return the correct number of lines for the given string", () => {
  expect(
    getLineNumber(
      `Testing what is happening
    sjkdhsadasdsjhd
     asdkjasjdasd
    askjdjasasda`
    )
  ).toBe(5);
});
