import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  private logs: string[] = [];

  public add(log: string): void {
    this.logs.push(log);
  }

  public getAll(): string[] {
    return this.logs;
  }

}
