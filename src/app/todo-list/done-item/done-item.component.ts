import { TodoListService } from './../todo-list.service';
import { Component, OnInit, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { transferArrayItem, moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-done-item',
  templateUrl: './done-item.component.html',
  styleUrls: ['./done-item.component.scss']
})
export class DoneItemComponent implements OnInit {
  @Input('doneList') done = [];
  @Output() todoValueChange = new EventEmitter();
  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  addColor(colorValue: string, elRef: any): void {
    this.checkColorClassExistsAndRemove(elRef);
    this.renderer.addClass(elRef,`${colorValue}-bg`);
  }

  checkColorClassExistsAndRemove(elRef: any){
    elRef.classList.forEach(element => {
      if(element.includes('-bg')){
        this.renderer.removeClass(elRef, element);
      }
    });
  }


  editDoneItem(editedValue: string, index: number): void {
    this.todoValueChange.emit({
      value: editedValue,
      index,
      action: 'edit',
      onWhichTable: 'todo'
    });
    this.toggleDoneEditMode(index);
  }

  toggleDoneEditMode(index: number): void {
    this.done[index]['isEditMode'] = !this.done[index]['isEditMode'];
  }

  deleteDoneItem(index: number): void {
    this.todoValueChange.emit({
      index,
      action: 'delete',
      onWhichTable: 'todo'
    });
    this.done.splice(index, 1);
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
