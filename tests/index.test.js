import { testFunction, TEST_STRING } from "../src/index";

it("returns test string", () => {
  const expected = TEST_STRING;
  const result = testFunction();

  expect(result).toBe(expected);
});

it('adds 1 and 2', ()=>{
  let num = 1;
  let num2 = 2;
  let sum = num + num2;
  expect(sum).toBe(3);
});
