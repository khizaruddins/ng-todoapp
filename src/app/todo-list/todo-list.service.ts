import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TodoListService {
    constructor() { }

    subject = new BehaviorSubject<any>('');


    // common functions

    sendData(value) {
        this.subject.next(value);
    }

    getObservableData() {
        return this.subject.asObservable();
    }
}