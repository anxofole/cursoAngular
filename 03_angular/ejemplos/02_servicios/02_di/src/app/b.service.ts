import { Injectable } from '@angular/core';

export class BService {

  public readonly random: number;

  constructor() {
    this.random = Math.floor((Math.random() * 100) + 1);
    console.log('>> created B Service', this.random);
  }

}
