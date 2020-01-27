import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTodosComponent } from './item-todos.component';

describe('ItemTodosComponent', () => {
  let component: ItemTodosComponent;
  let fixture: ComponentFixture<ItemTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
