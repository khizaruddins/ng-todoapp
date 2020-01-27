import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { ItemTodosComponent } from './list-todos/item-todos/item-todos.component';
import { MaterialModuleImports } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListTodosComponent,
    ItemTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
