let nextId = 1;

export class Hero {
  id: number;

  constructor(
    public name: string,
    public selected: boolean = false) {
    this.id = nextId++;
  }
}
