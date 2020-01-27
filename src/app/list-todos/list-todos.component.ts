import { Component, OnInit } from '@angular/core';
import { todoList } from '../data.storage';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.scss']
})
export class ListTodosComponent implements OnInit {

  constructor() { }

  todoList = todoList

  ngOnInit() {
  }

}
