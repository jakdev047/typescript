/*
  Primitive Data type
    string number boolean null undefined
*/
const topics: string = "Welcome Typescript !!!";
const numberOfstudents: number = 50;
const isKnowJavascript: boolean = true;

console.log(topics, numberOfstudents, isKnowJavascript);

/*
  Array and Tuples in typescript
*/
const studentName: string[] = ["Jubayer", "Sabith", "Hasan"];
const singleUser: [string, number] = ["Jubayer", 123456];

/*
  Object, Literal Types and Optional types
*/
const userDetails: {
  name: string;
  contactNo: number;
  isActive: boolean;
  readonly country: "Bangladesh";
} = {
  name: "Jubayer Alam Khan",
  contactNo: 1234567890,
  isActive: true,
  country: "Bangladesh",
};

/*
  Functions in Typescript
*/
const number: number[] = [1, 2, 3, 4, 5];

const add = (a: number, b: number = 10): number => {
  return a + b;
};

const person: {
  name: string;
  balance: number;
  addBalance(money: number): number;
  totalBalance: () => void;
} = {
  name: "Jubayer",
  balance: 15,
  addBalance: function (money: number): number {
    return this.balance + money;
  },
  totalBalance: function (): void {
    console.log(`Total Balance of ${this.addBalance(100) + this.balance}`);
  },
};

console.log("add", add(10, 15));

console.log(
  "map function",
  number.map((itm: number) => itm * itm)
);

/*
  Spread, Rest and Destructuring
*/

const oldStudent: string[] = ["Jubayer", "Alam"];

const newStudent: string[] = ["Sabith", "Hasan"];

oldStudent.push(...newStudent);

console.log("oldStudentId: ", oldStudent);

const greetFreinds = (...freinds: string[]): void => console.log(freinds);

console.log(greetFreinds("Sabith", "Hasan"));

const user02 = {
  fullName: "Jubayer",
  isActive: true,
};

const { fullName: userFullName } = user02;

console.log(userFullName);

/*
  Type alias and optional types
*/

type PersonType = {
  name?: string;
};

type IsActive = boolean;

const player1: PersonType = {
  name: "Jubayer",
};
const player2 = {
  name: "Alam",
};
const player3 = {
  name: "Sabith",
};
const player4 = {
  name: "Hasan",
};

const isActive: IsActive = false;

type OperationType = (x: number, y: number) => number;

const calculate = (num1: number, num2: number, operation: OperationType) => {
  return operation(num1, num2);
};

console.log(calculate(5, 5, (x, y) => x * y));
