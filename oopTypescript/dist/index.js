"use strict";
/*
  Type Assertion
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let typeAssertion;
typeAssertion = "Type Assertion";
console.log(typeAssertion.length); // 14
function kgToGram(param) {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The converted result is: ${value} gram`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
}
const resultToBeString = kgToGram("1000"); // string type return
const resultToBeNumber = kgToGram(1000); // string type return
const userWithTypeAlias = {
    name: "Type Alias",
    age: 100,
};
const userWithInterface = {
    name: "Interface",
    age: 100,
};
const addNumbers = (num1, num2) => num1 + num2;
const rollNumbers = [1, 2, 3, 4];
const rollNumbers2 = [1, 2, 3, 4];
const rollNumbers3 = ["one", "two", "three"];
const userNameAndRollNumber = [{ name: "Mr. X", roll: 2 }];
const person = ["Jubayer", 2];
/*
  Generic in Function & Constraints in Generics
*/
const createArray = (param) => {
    return [param];
};
const createTupalArray = (param1, param2) => {
    return [param1, param2];
};
console.log(createArray("Bangladesh")); // ["Bangladesh"]
console.log(createTupalArray(1, 2)); // [1,2]
const getUser = (info) => {
    const skill = "Typescript";
    const modifyObj = Object.assign(Object.assign({}, info), { skill });
    return modifyObj;
};
const person1 = getUser({ name: "Hasan", age: 20 }); // name age skill
const a = "name";
const b = "age";
const personInfo = {
    name: "Mr.X",
    age: 20,
};
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty(personInfo, "age")); // 20
/*
  Asynchronous TypeScript
*/
// promise create
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const data = "Data is fetched";
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to reject data");
        }
    });
};
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    return data;
});
const promiseResult = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getPromiseData();
    console.log(data);
});
promiseResult();
let area3 = {
    width: 20,
    height: 30,
};
