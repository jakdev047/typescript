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

/*
  Introduction of Generic in Type
*/

type GenericArray<T> = Array<T>;

type NameRollType = { name: string; roll: number };

type GenericTuple<X, Y> = [X, Y];

const rollNumbers2: GenericArray<number> = [1, 2, 3, 4];

const rollNumbers3: Array<string> = ["one", "two", "three"];

const userNameAndRollNumber: Array<NameRollType> = [{ name: "Mr. X", roll: 2 }];

const person: GenericTuple<string, number> = ["Jubayer", 2];
