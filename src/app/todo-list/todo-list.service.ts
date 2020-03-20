import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TodoListService {
    constructor() { }

    subject = new BehaviorSubject<any>('');

    sendData(value) {
        this.subject.next(value);
    }

    getObservableData() {
        return this.subject.asObservable();
    }

    editTableValue(value: string, whichArray, index: number) {
        whichArray[index] = value;
    }

    onDeleteItem(item, table) {
        setTimeout(() => {
            const index = table.indexOf(item);
            table.splice(index, 1);
        }, 300);
    }
}