import { Component } from '@angular/core';
import { filter, map, from, fromEvent, interval, observable, Observable, of, takeUntil, throwError, Subject, BehaviorSubject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  ngOnInit(): void {

    const myObservable = of(1, 2, 3);

    const myObservable2 = throwError(() => new Error());

    const myObservable3 = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.error('err');
      observer.complete();
    });

    myObservable.subscribe({
     next: (x: number) => console.log(x),
     error: (err) => console.log('Error'),
     complete: () => console.log('Completed')
    });

    const infiniteObservable = interval(1000);
    const mySubscription = infiniteObservable.subscribe({
      next: (x: number) => console.log('Observer got a next value: ' + x),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    });
    // later
    mySubscription.unsubscribe();


    const myTurnObservable = interval(1000);
    const myTurn: number = 5;
    const isMyTurn = myTurnObservable.pipe(filter(t => t > myTurn));
    //filter emite valores que cumplan la condicion

    const subscription = myTurnObservable
    .pipe(takeUntil(isMyTurn))
    .subscribe({
      next: (x: number) => { console.log("Next number is " + x);
    },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log("Completed")
    })


    //emit array as a sequence of values
    const arraySource = from([1, 2, 3, 4, 5]);
    //output: 1,2,3,4,5
    const subscribe = arraySource.subscribe(val => console.log(val));

    const ofSource = of(1, 2, 3, 4, 5);
    //output: 1,2,3,4,5
    ofSource.subscribe(val => console.log(val));

    const intervalSource = interval(1000);
    //output: 1,2,3,4,5....
    intervalSource.subscribe(val => console.log(val));
    //create observable that emits click events
    const sourceEvent = fromEvent(document, 'click');
    //map to string with given event timestamp
    const example = sourceEvent.pipe(map(event => `Event time: ${event.timeStamp}`));
    //output (example): 'Event time: 7276.390000000001'
    example.subscribe(val => console.log(val));


    const observer = {
      next: (x: any) => console.log('Observer got a next value: ' + x),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    myObservable.subscribe(observer);

    const subject = new Subject<number>();

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(1);
    subject.next(2);

    // Logs:
    // observerA: 1
    // observerB: 1
    // observerA: 2
    // observerB: 2

    const behaviourSubject = new BehaviorSubject(0); // 0 is the initial value
    behaviourSubject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    behaviourSubject.next(1);
    behaviourSubject.next(2);

    behaviourSubject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    behaviourSubject.next(3);

    // Logs
    // observerA: 0
    // observerA: 1
    // observerA: 2
    // observerB: 2
    // observerA: 3
    // observerB: 3

  }

}
