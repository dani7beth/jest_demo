import { testFunction, TEST_STRING, sum , minus, divide, addPeriodatEnd} from "../src";

it("returns test string", () => {
  const expected = TEST_STRING;
  const result = testFunction();

  expect(result).toBe(expected);
});

// it('adds 1 and 1', ()=>{
//   let num = 1;
//   let num2 = 2;
//   let sum = num + num2;
//   expect(sum).toBe(3);
// });

describe('add tests', ()=>{

  test('adds 1 and 1', ()=>{
    let value = sum(1,1);
    expect(value).toBe(2);
  });
  
  test('adds 2 and 2', ()=>{
    let value = sum(2,2);
    expect(value).toBe(4);
  });
 
});

describe("it test divide function", ()=>{
  test("basic divide test", ()=>{
    let value = divide(4,2);
    expect(value).toBe(2);
  });
});

describe("it test addPeriodatEnd fucntion", ()=>{
  test("adding a period at end", ()=>{
    let value = addPeriodatEnd(["string1", "string2", "string3"]);
    expect(value).toEqual(["string1.", "string2.","string3."]);
  });
});