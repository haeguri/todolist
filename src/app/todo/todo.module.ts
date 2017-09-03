import { TodoitemComponent } from './todoitem/todoitem.component';
import { TodolistComponent } from './todolist/todolist.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TodolistComponent, TodoitemComponent],
  exports: [TodolistComponent, TodoitemComponent]
})
export class TodoModule { }
