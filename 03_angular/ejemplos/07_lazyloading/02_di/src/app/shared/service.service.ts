import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {
    const random = Math.floor(Math.random() * 100 + 1);
    console.log('>> created', random);
  }
}
