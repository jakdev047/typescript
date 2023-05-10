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
