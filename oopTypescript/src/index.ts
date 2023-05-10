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
