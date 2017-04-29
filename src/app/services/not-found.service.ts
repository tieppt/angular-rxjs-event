import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs/Rx';

@Injectable()
export class NotFoundService {
  notFound$: Subject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
  emit(value: boolean) {
    this.notFound$.next(value);
  }
  get value(): boolean {
    return (this.notFound$ as BehaviorSubject<boolean>).getValue();
  }
}
