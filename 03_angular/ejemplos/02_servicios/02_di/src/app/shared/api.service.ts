export class ApiService {

  public readonly random: number;

  constructor() {
    this.random = Math.floor((Math.random() * 100) + 1);
    console.log('>> created ApiService', this.random);
  }

}
