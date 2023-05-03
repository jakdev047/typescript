"use strict";
/*
  Primitive Data type
    string number boolean null undefined
*/
const topics = "Welcome Typescript !!!";
const numberOfstudents = 50;
const isKnowJavascript = true;
console.log(topics, numberOfstudents, isKnowJavascript);
/*
  Array and Tuples in typescript
*/
const studentName = ["Jubayer", "Sabith", "Hasan"];
const singleUser = ["Jubayer", 123456];
/*
  Object, Literal Types and Optional types
*/
const userDetails = {
    name: "Jubayer Alam Khan",
    contactNo: 1234567890,
    isActive: true,
    country: "Bangladesh",
};
/*
  Functions in Typescript
*/
const number = [1, 2, 3, 4, 5];
const add = (a, b = 10) => {
    return a + b;
};
const person = {
    name: "Jubayer",
    balance: 15,
    addBalance: function (money) {
        return this.balance + money;
    },
    totalBalance: function () {
        console.log(`Total Balance of ${this.addBalance(100) + this.balance}`);
    },
};
console.log("add", add(10, 15));
console.log("map function", number.map((itm) => itm * itm));
/*
  Spread, Rest and Destructuring
*/
const oldStudent = ["Jubayer", "Alam"];
const newStudent = ["Sabith", "Hasan"];
oldStudent.push(...newStudent);
console.log("oldStudentId: ", oldStudent);
const greetFreinds = (...freinds) => console.log(freinds);
console.log(greetFreinds("Sabith", "Hasan"));
const user02 = {
    fullName: "Jubayer",
    isActive: true,
};
const { fullName: userFullName } = user02;
console.log(userFullName);
const player1 = {
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
const isActive = false;
const calculate = (num1, num2, operation) => {
    return operation(num1, num2);
};
console.log(calculate(5, 5, (x, y) => x * y));
var Level;
(function (Level) {
    Level["junior"] = "junior";
    Level["mid"] = "mid";
    Level["senior"] = "senior";
})(Level || (Level = {}));
const newDeveloper = {
    name: "Jubayer Alam Khan",
    expertise: "Javascript",
    experience: 1,
};
const nextLevelDeveloper = {
    name: "Jubayer Alam Khan",
    expertise: "Javascript",
    experience: 1,
    leadershipExperience: 2,
    level: Level === null || Level === void 0 ? void 0 : Level.senior,
};
/*
  Null, Unknown and Never Types

    strictNullChecks
*/
const getMyCarSpeed = (speed) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) | 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    else if (typeof speed === "string") {
        const [value, unit] = speed.split(" ");
        const convertedSpeed = (parseFloat(value) * 1000) | 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    else {
        console.log("There is wrong type");
    }
};
getMyCarSpeed(10);
getMyCarSpeed("10 kmh^-1");
getMyCarSpeed(true);
// function throwError(message: string): never {
//   throw new Error(message);
// }
// throwError("Error has happened");
/*
  Ternary Operator , Nullish Coeslancing Operator,
*/
const isAuthenticatedUser = "";
const user1 = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : "Guest";
const user2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
console.log({ user1, user2 }); // {user1: "", user2: "Guest"}
