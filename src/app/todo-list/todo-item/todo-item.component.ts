import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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

  constructor() { }
  isEditMode: boolean = false;

  ngOnInit() { }

  editTodoItem(editedValue, index) {
    this.todoValueChange.emit({
      value: editedValue,
      index,
      action: 'edit',
      onWhichTable: 'todo'
    });
    this.toggleTodoEditMode(index);
  }

  deleteTodoItem(index) {
    this.todoValueChange.emit({
      index,
      action: 'delete',
      onWhichTable: 'todo'
    });
    this.todo.splice(index, 1);
  }

  toggleTodoEditMode(index) {
    this.todo[index]['isEditMode'] = !this.todo[index]['isEditMode'];
  }

  drop(event: CdkDragDrop<todoListI[]>) {
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