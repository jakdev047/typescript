"use strict";
console.log("OOP Typescript...");
/*
  class
*/
class Animal {
    // constructor
    constructor(name, species, sound) {
        this.sound = sound;
        this.name = name;
        this.species = species;
    }
    // method
    makeSound() {
        console.log(`This ${this.name} says ${this.sound}`);
    }
}
// instance
const dog = new Animal("German Shepard", "dog", "ghew ghew");
dog.makeSound(); // This German Shepard says ghew ghew
/*
  Inheritence
*/
class Person {
    // constructor
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    // method
    makeSleep(hours) {
        return `This ${this.name} will sleep for ${hours}`;
    }
}
class Student extends Person {
    // constructor
    constructor(name, age, address) {
        super(name, age, address);
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
class Teacher extends Person {
    // constructor
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designation;
    }
    // method
    takeClasses(numOfClass) {
        return `This ${this.name} will take for ${numOfClass}`;
    }
}
function getUser(user) {
    if ("role" in user) {
        return `I am an admin and my role is ${user.role}`;
    }
    else {
        return `I am a normal user and my name is ${user.name}`;
    }
}
const normalUser1 = { name: "Jubayer" };
const adminUser1 = { name: "Hasan", role: "admin" };
console.log(getUser(normalUser1));
class Dog extends Animal {
    // constructor
    constructor(name, species, sound) {
        super(name, species, sound);
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    // method
    bark() {
        return `I am a ${this.species} and I bark like a ${this.sound}`;
    }
}
class Cat extends Animal {
    // constructor
    constructor(name, species, sound) {
        super(name, species, sound);
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    // method
    meaw() {
        return `I am a ${this.species} and I meaw like a ${this.sound}`;
    }
}
function isDog(animal) {
    return animal instanceof Dog;
}
function getAnimal(animal) {
    if (isDog(animal)) {
        return animal.bark();
    }
    else if (animal instanceof Cat) {
        return animal.meaw();
    }
    else {
        return animal.makeSound();
    }
}
const cat1 = new Cat("Pertian", "cat", "meaw meaw");
console.log(getAnimal(cat1));
/*
  Access Modifiers: Public, Private, Protected
*/
class BankAccount {
    // constructor
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    // getter
    get balance() {
        return this._balance;
    }
    // setter
    set deposit(amount) {
        this._balance += amount;
    }
    // method
    getBalance() {
        return `My current balace is ${this._balance}`;
    }
    addDeposit(amount) {
        this._balance += amount;
    }
}
const myAccount = new BankAccount(123456, "Jubayer", 20);
console.log(myAccount.balance); // 20
myAccount.deposit = 80;
console.log(myAccount.balance); // 100
/*
  Static in Class
*/
class Counter {
    static increment() {
        return ++Counter.counter;
    }
    static decrement() {
        return --Counter.counter;
    }
}
Counter.counter = 0;
console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2
/*
  Polymorphism
*/
class Shape {
    getArea() { }
}
class Circle extends Shape {
    // constructor
    constructor(radius) {
        super();
        this.radius = radius;
    }
    // method
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        // throw new Error("Method not implemented.");
        return `I am starting engine`;
    }
    moveEngine() {
        return `I am moving engine`;
    }
    stopEngine() {
        return `I am stopping engine`;
    }
}
class AbstractVehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
}
class Car extends AbstractVehicle {
    startEngine() {
        return `I am starting engine`;
    }
    moveEngine() {
        return `I am moving engine`;
    }
    stopEngine() {
        return `I am stopping engine`;
    }
}
const person1 = {
    name: "Jubayer",
    email: "abc@example.com",
    contactNo: "0123456789",
};
const colorList = {
    red: "red",
    green: "green",
};
// class
class User {
    // constructor
    constructor(firstName, lastName) {
        this.data = { firstName, lastName };
        this.methods = {
            getFullName: () => `${firstName} ${lastName}`,
        };
    }
}
const user1 = new User("Jubayer", "Khan");
console.log(user1.methods.getFullName()); // Jubayer Khan
