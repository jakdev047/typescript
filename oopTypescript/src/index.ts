console.log("OOP Typescript...");

/*
  class
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
