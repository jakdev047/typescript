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

/*
  Interface, Type vs Interface
*/

type User = {
  name: string;
  age: number;
};

interface IUser {
  name: string;
  age: number;
}

interface ExtendUser extends IUser {
  role: string;
}

const userWithTypeAlias: User = {
  name: "Type Alias",
  age: 100,
};

const userWithInterface: IUser = {
  name: "Interface",
  age: 100,
};

type addTypeNumbers = (num1: number, num2: number) => number;

const addNumbers: addTypeNumbers = (num1, num2) => num1 + num2;

interface IAddNumbers {
  (num1: number, num2: number): number;
}

type rollTypeNumbers = number[];

interface IRollNumbers {
  [index: number]: number;
}

const rollNumbers: rollTypeNumbers = [1, 2, 3, 4];
