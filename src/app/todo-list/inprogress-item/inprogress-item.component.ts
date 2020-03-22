import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { todoListI } from '../todo-list.interface';

@Component({
  selector: 'app-inprogress-item',
  templateUrl: './inprogress-item.component.html',
  styleUrls: ['./inprogress-item.component.scss']
})
export class InprogressItemComponent implements OnInit {
  @Input('inprogressList') inprogress: todoListI[] = [];
  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
