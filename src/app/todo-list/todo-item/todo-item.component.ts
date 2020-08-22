import { TodoListService } from './../todo-list.service';
import { Component, OnInit, Input, EventEmitter, Output, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';
import { todoListI } from '../todo-list.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input('todoList') todo: todoListI[] = [];
  @Output() todoValueChange = new EventEmitter();
  
  constructor(
    private renderer: Renderer2
  ) { }
  isEditMode: boolean = false;

  ngOnInit():void { 
  }

  addColor(colorValue: string, elRef: any, index: number): void {
    this.checkColorClassExistsAndRemove(elRef);
    this.renderer.addClass(elRef,`${colorValue}-bg`);
    this.changeColorInParentList(index, colorValue);
  }

  changeColorInParentList(index, colorValue){
    this.todoValueChange.emit({
      index,
      action: 'change-color',
      onWhichTable: 'todo',
      color: colorValue
    });
  }

  checkColorClassExistsAndRemove(elRef: any){
    elRef.classList.forEach(element => {
      if(element.includes('-bg')){
        this.renderer.removeClass(elRef, element);
      }
    });
  }

  editTodoItem(editedValue: string, index: number): void {
    this.todoValueChange.emit({
      value: editedValue,
      index,
      action: 'edit',
      onWhichTable: 'todo'
    });
    this.toggleTodoEditMode(index);
  }

  deleteTodoItem(index: number): void {
    this.todoValueChange.emit({
      index,
      action: 'delete',
      onWhichTable: 'todo'
    });
  }

  toggleTodoEditMode(index: number): void {
    this.todo[index]['isEditMode'] = !this.todo[index]['isEditMode'];
  }

  drop(event: CdkDragDrop<todoListI[]>): void {npm x
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
        );
    }
  }

}