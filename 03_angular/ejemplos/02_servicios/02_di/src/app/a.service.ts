import { Injectable } from '@angular/core';

export class AService {

  public readonly random: number;

  constructor() {
    this.random = Math.floor((Math.random() * 100) + 1);
    console.log('>> created A Service', this.random);
  }

}
