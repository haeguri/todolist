import { Todo } from './../../shared/todo';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  private task: string;

  @Input() todoDatas: Todo[];
  @Output() onAddTodo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTodo(task) {
    if (task) {
      this.onAddTodo.emit(task);
      this.task = '';
    }
  }

}
