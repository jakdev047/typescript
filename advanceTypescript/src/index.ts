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

/*
  Generic in Interface
*/

interface NameRollInterface<T, U = null> {
  name: string;
  roll: number;
  skill: T;
  contact?: U;
}

/*
  Generic in Function & Constraints in Generics
*/

const createArray = <T>(param: T): T[] => {
  return [param];
};

const createTupalArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

console.log(createArray<string>("Bangladesh")); // ["Bangladesh"]

console.log(createTupalArray<number, number>(1, 2)); // [1,2]

const getUser = <T extends User>(info: T) => {
  const skill = "Typescript";

  const modifyObj = { ...info, skill };

  return modifyObj;
};

const person1 = getUser({ name: "Hasan", age: 20 }); // name age skill

/*
  Generic Constraints Using Key 
*/

type PersonType = {
  name: string;
  age: number;
  number: string;
};

type PersonUnionType = "name" | "age" | "number";

type PersonTypeUsingKeyOf = keyof PersonType;

const a: PersonUnionType = "name";

const b: PersonTypeUsingKeyOf = "age";

const personInfo = {
  name: "Mr.X",
  age: 20,
};

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  return obj[key];
}

console.log(getProperty(personInfo, "age")); // 20

/*
  Asynchronous TypeScript
*/

// promise create
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fetched";

    if (data) {
      resolve(data);
    } else {
      reject("Failed to reject data");
    }
  });
};

const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();

  return data;
};

const promiseResult = async () => {
  const data = await getPromiseData();

  console.log(data);
};

promiseResult();

/*
  Conditional Types
*/

type a1 = string;

type b1 = a1 extends string ? string : null;

type PersonInfo = {
  skillOne: string;
  skillTwo: string;
};

type A = keyof PersonInfo; // skillOne | skillTwo

// normal
type CheckProperty<T> = T extends { skillOne: string } ? true : false;

type SkillOne = CheckProperty<PersonInfo>; // true

// generic K extends keyof PersonInfo (skillOne extends skillOne | skillTwo )
type CheckPropertyGeneric<T, K> = K extends keyof PersonInfo ? true : false;

type SkillTwo = CheckPropertyGeneric<PersonInfo, "skillOne">; // true

// remove
type NumberList = 1 | 2 | 3;

type RemvoveType<T> = T extends 1 ? never : T;

type currentType = RemvoveType<NumberList>; // 2 | 3

/*
  Mapped Types
*/

type Volume = {
  width: string;
  height: string;
};

type Area = {
  [key in keyof Volume]: number;
};

type Area2 = {
  [key in keyof Volume]: Volume[key];
};

type Area3<T> = {
  [key in keyof T]: T[key];
};

let area3: Area3<{ width: number; height: number }> = {
  width: 20,
  height: 30,
};
