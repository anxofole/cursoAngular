import { Animal } from "./animal";

export class Person extends Animal {
  // public turnYear(): void {
  //     this.age += 1;
  // }
  public turnYear = () => (this.age += 1);
}
