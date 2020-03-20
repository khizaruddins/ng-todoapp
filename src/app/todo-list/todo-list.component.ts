import { Component, OnInit, ElementRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TodoListService } from './todo-list.service';

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

  todo = [];
  inprogress = [];
  done = [];

  toggleEditInput(i) { }

  ngOnInit() {
    this.todoListService.getObservableData()
      .subscribe(res => {
        if (res !== '') {
          if (res.option === 'todo') {
            this.todo.push(res.input);
          }
          if (res.option === 'inprogress') {
            this.inprogress.push(res.input)
          }
          if (res.option === 'done') {
            this.done.push(res.input);
          }
        }
      });
  }
}
