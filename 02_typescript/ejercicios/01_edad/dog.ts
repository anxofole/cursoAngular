import { Animal } from "./animal";

const BIGYEAR = 8;
const SMALLYEAR = 6;

export class Dog extends Animal {
  // private isBig: boolean;

  // constructor (name: string, age: number, isBig: boolean) {
  //     super(name, age);
  //     this.isBig = isBig;
  // }
  constructor(name: string, age: number, private isBig: boolean) {
    super(name, age);
  }

  public turnYear(): void {
    this.age += this.isBig ? BIGYEAR : SMALLYEAR;
  }
}
