export class Person {
  // public id: number;
  // public name: string;
  // public surname: string;
  // public age: number;
  // public email: string;
  // public username: string;
  // public enabled: boolean;

  // constructor(
  //   id: number,
  //   name: string,
  //   surname: string,
  //   age: number,
  //   email: string,
  //   username: string,
  //   enabled: boolean
  // ) {
  //   this.id = id;
  //   this.name = name;
  //   this.surname = surname;
  //   this.age = age;
  //   this.email = email;
  //   this.username = username;
  //   this.enabled = enabled;
  // }

  constructor(
    public id: number,
    public name: string,
    public surname: string,
    public age: number,
    public email: string,
    public username: string,
    public enabled: boolean
  ) {}
}
