import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-todos',
  templateUrl: './item-todos.component.html',
  styleUrls: ['./item-todos.component.scss']
})
export class ItemTodosComponent implements OnInit {

  constructor() { }

  @Input() item;

  ngOnInit() {
  }

}
