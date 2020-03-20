import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { MaterialModuleImports } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { InprogressItemComponent } from './todo-list/inprogress-item/inprogress-item.component';
import { DoneItemComponent } from './todo-list/done-item/done-item.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TodoListComponent,
    TodoItemComponent,
    InprogressItemComponent,
    DoneItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleImports,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
