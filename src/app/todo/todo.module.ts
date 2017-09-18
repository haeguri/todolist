import { TodoitemComponent } from './todoitem/todoitem.component';
import { TodolistComponent, IncompTodos, CompTodos } from './todolist/todolist.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TodolistComponent, TodoitemComponent, IncompTodos, CompTodos ],
  exports: [TodolistComponent, TodoitemComponent]
})
export class TodoModule { }
