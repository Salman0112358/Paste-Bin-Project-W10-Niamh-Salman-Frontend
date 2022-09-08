import getFirstFiveLines from "./getFirstFiveLines";

test("greet returns a string, greeting the passed name", () => {
  expect(
    getFirstFiveLines(
      `way
    too much
    complication
    in this
    test for me
    losers say
    blah blah
    in their tests
    `
    )
  ).toBe(
    `way
    too much
    complication
    in this
    test for me`
  );
  expect(
    getFirstFiveLines(
      `this code
      only 
      has
      five 
      lines `
    )
  ).toBe(
    `this code
      only 
      has
      five 
      lines `
  );
  expect(
    getFirstFiveLines(
      `this has less than
      five lines`
    )
  ).toBe(
    `this has less than
      five lines`
  );
  expect(getFirstFiveLines(`this has less than five lines`)).toBe(
    `this has less than five lines`
  );
});
