/*
  Type Assertion
*/

let typeAssertion: any;

typeAssertion = "Type Assertion";

console.log((typeAssertion as string).length); // 14

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;

    return `The converted result is: ${value} gram`;
  }

  if (typeof param === "number") {
    const value = param * 1000;

    return value;
  }
}

const resultToBeString = kgToGram("1000") as string; // string type return
const resultToBeNumber = <number>kgToGram(1000); // string type return
