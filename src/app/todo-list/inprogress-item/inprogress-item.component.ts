import { TodoListService } from './../todo-list.service';
import { Component, OnInit, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { todoListI } from '../todo-list.interface';

@Component({
  selector: 'app-inprogress-item',
  templateUrl: './inprogress-item.component.html',
  styleUrls: ['./inprogress-item.component.scss']
})
export class InprogressItemComponent implements OnInit {
  @Input('inprogressList') inprogress: todoListI[] = [];
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

  editInProgressItem(editedValue: string, index: number): void {
    this.todoValueChange.emit({
      value: editedValue,
      index,
      action: 'edit',
      onWhichTable: 'inprogress'
    });
    this.toggleInProgressEditMode(index);
  }

  deleteInProgressItem(index: number): void {
    this.todoValueChange.emit({
      index,
      action: 'delete',
      onWhichTable: 'inprogress'
    });
    this.inprogress.splice(index, 1);
  }

  toggleInProgressEditMode(index: number): void {
    this.inprogress[index]['isEditMode'] = !this.inprogress[index]['isEditMode'];
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
