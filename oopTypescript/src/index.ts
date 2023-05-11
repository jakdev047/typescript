console.log("OOP Typescript...");

/*
  Class
*/

class Animal {
  // property
  public name: string;
  public species: string;

  // constructor
  constructor(name: string, species: string, public sound: string) {
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
  constructor(
    public name: string,
    public age: string,
    public address: string
  ) {}

  // method
  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours}`;
  }
}

class Student extends Person {
  // constructor
  constructor(public name: string, public age: string, public address: string) {
    super(name, age, address);
  }
}

class Teacher extends Person {
  // constructor
  constructor(
    public name: string,
    public age: string,
    public address: string,
    public designation: string
  ) {
    super(name, age, address);
  }

  // method
  takeClasses(numOfClass: number): string {
    return `This ${this.name} will take for ${numOfClass}`;
  }
}

/*
  Type Guards
*/

type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: string;
};

function getUser(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return `I am an admin and my role is ${user.role}`;
  } else {
    return `I am a normal user and my name is ${user.name}`;
  }
}

const normalUser1: NormalUserType = { name: "Jubayer" };

const adminUser1: AdminUserType = { name: "Hasan", role: "admin" };

console.log(getUser(normalUser1));

class Dog extends Animal {
  // constructor
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
    super(name, species, sound);
  }

  // method
  bark() {
    return `I am a ${this.species} and I bark like a ${this.sound}`;
  }
}

class Cat extends Animal {
  // constructor
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
    super(name, species, sound);
  }

  // method
  meaw() {
    return `I am a ${this.species} and I meaw like a ${this.sound}`;
  }
}

function isDog(animal: Animal): animal is Dog {
  return animal instanceof Dog;
}

function getAnimal(animal: Animal) {
  if (isDog(animal)) {
    return animal.bark();
  } else if (animal instanceof Cat) {
    return animal.meaw();
  } else {
    return animal.makeSound();
  }
}

const cat1 = new Cat("Pertian", "cat", "meaw meaw");

console.log(getAnimal(cat1));

/*
  Access Modifiers: Public, Private, Protected
*/

class BankAccount {
  // property
  public readonly id: number;
  public name: string;
  private _balance: number;

  // constructor
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  // getter
  get balance(): number {
    return this._balance;
  }

  // setter
  set deposit(amount: number) {
    this._balance += amount;
  }

  // method
  getBalance() {
    return `My current balace is ${this._balance}`;
  }

  addDeposit(amount: number) {
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
  static counter: number = 0;

  static increment(): number {
    return ++Counter.counter;
  }

  static decrement(): number {
    return --Counter.counter;
  }
}

console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2

/*
  Polymorphism
*/

class Shape {
  getArea(): void {}
}

class Circle extends Shape {
  // property
  radius: number;

  // constructor
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  // method
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

/*
  Abstraction
*/

// interface

interface IVehicle {
  // property
  name: string;
  brand: string;
  model: string;

  // method
  startEngine(): void;
  moveEngine(): void;
  stopEngine(): void;
}

class Vehicle implements IVehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: string
  ) {}

  startEngine(): string {
    // throw new Error("Method not implemented.");
    return `I am starting engine`;
  }

  moveEngine(): string {
    return `I am moving engine`;
  }

  stopEngine(): string {
    return `I am stopping engine`;
  }
}

abstract class AbstractVehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: string
  ) {}

  abstract startEngine(): void;

  abstract moveEngine(): void;

  abstract stopEngine(): void;
}

class Car extends AbstractVehicle {
  startEngine(): string {
    return `I am starting engine`;
  }

  moveEngine(): string {
    return `I am moving engine`;
  }

  stopEngine(): string {
    return `I am stopping engine`;
  }
}

/*
  utility
*/

interface IPerson {
  name: string;
  email: string;
  contactNo: string;
}

type Contact = Pick<IPerson, "contactNo" | "email">;

type Name = Omit<IPerson, "contactNo" | "email">;

type Optional = Partial<IPerson>;

type RequiredProps = Required<IPerson>;

const person1: Readonly<IPerson> = {
  name: "Jubayer",
  email: "abc@example.com",
  contactNo: "0123456789",
};

// person1.name = "Alam"; // error

type ColorList = {
  [key: string]: string;
};

type ColorListRecord = Record<"red" | "green", string>;

const colorList: ColorListRecord = {
  red: "red",
  green: "green",
};

/*
  to use multiple interface as a type and create a model for a class
*/

// properties
interface IUser {
  firstName: string;
  lastName: string;
}

// method
interface IMethods {
  getFullName(): string;
}

// Model
interface IModel<TData, TMethod> {
  data: TData;
  methods: TMethod;
}

// type
type UserModel = IModel<IUser, IMethods>;

// class
class User implements UserModel {
  // peoperty
  data: IUser;
  methods: IMethods;

  // constructor
  constructor(firstName: string, lastName: string) {
    this.data = { firstName, lastName };
    this.methods = {
      getFullName: () => `${firstName} ${lastName}`,
    };
  }
}

const user1 = new User("Jubayer", "Khan");

console.log(user1.methods.getFullName()); // Jubayer Khan
