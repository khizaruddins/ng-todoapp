import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoListService } from '../todo-list/todo-list.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  todoListForm: any;

  constructor(
    private fb: FormBuilder,
    private todoListService: TodoListService
  ) { }

  ngOnInit() {
    this.createForm();
    this.todoListForm.valueChanges.subscribe(res=> console.log(this.todoListForm));
  }

  createForm() {
    this.todoListForm = this.fb.group({
      input: [, Validators.required],
      option: [, Validators.required]
    });
  }

  addTodo() {
    if (this.todoListForm.valid) {
      if (
        this.todoListForm.get('input').value !== '' &&
        this.todoListForm.get('input').value &&
        this.todoListForm.get('input').value !== null
      ) {
        console.log(this.todoListForm.value);
        this.todoListForm.value['color'] = 'white';
        this.todoListService.sendData(this.todoListForm.value);
        this.todoListForm.reset();
      }
    } else {
      this.todoListForm.markAllAsTouched();
    }
  }

}
