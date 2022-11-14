import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  public countSubject: Subject<number> = new Subject<number>();

  constructor() { }

  public changeCount(count: number){
    this.countSubject.next(count);
  }
}
