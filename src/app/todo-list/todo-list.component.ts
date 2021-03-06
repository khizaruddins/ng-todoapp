import { Component, OnInit, ElementRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TodoListService } from './todo-list.service';
import { todoListI } from './todo-list.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(
    private todoListService: TodoListService
  ) { }
  isEditMode: boolean = false;

  todo: todoListI[] = [
    { value: "Try to Delete this", isEditMode: false, color: 'white' },
    { value: "Try to drag this to progress", isEditMode: false, color: 'green' },
    { value: "Try change color of this", isEditMode: false, color: 'black' },
    { value: "Try to Edit this", isEditMode: false, color: 'red' },
  ];
  inprogress = [];
  done = [];

  ngOnInit() {
    this.getValuesFromObservable();
  }

  getValuesFromObservable() {
    this.todoListService.getObservableData()
      .subscribe(res => {
        if (res !== '') {
          switch (true) {
            case res.option === 'todo':
              this.todo.push({
                value: res.input,
                isEditMode: false,
                color: 'white'
              });
              break;
            case res.option === 'inprogress':
              this.inprogress.push({
                value: res.input,
                isEditMode: false,
                color: 'white'
              })
              break;
            case res.option === 'done':
              this.done.push({
                value: res.input,
                isEditMode: false,
                color: 'white'
              });
              break;
          }
        }
      });
  }

  editTable(event) {
    switch (event.onWhichTable) {
      case 'todo':
        this.todo[event.index].value = event.value;
        break;
      case 'inprogress':
        this.inprogress[event.index].value = event.value;
        break;
      case 'done':
        this.done[event.index].value = event.value;
        break;
    }
    console.log(this.todo);
  }

  deleteTable(event) {
    switch (event.onWhichTable) {
      case 'todo':
        this.todo.splice(event.index, 1);
        break;
      case 'inprogress':
        this.inprogress.splice(event.index, 1);
        break;
      case 'done':
        this.done.splice(event.index, 1)
        break;
    }
    console.log(this.todo);
  }

  valueChangesOnTodo(event) {
    switch (event.action) {
      case 'edit':
        this.editTable(event);
        break;
      case 'delete':
        this.deleteTable(event);
        break;
      case 'change-color':
        this.changeColor(event);
    }
  }


  changeColor(event) {
    switch (event.onWhichTable) {
      case 'todo':
        this.todo[event.index].color = event.color;
        break;
      case 'inprogress':
        this.inprogress[event.index].color = event.color;
        break;
      case 'done':
        this.done[event.index].color = event.color;
        break;
    }
  }
}
