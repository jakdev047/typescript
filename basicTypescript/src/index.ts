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
