import { Todo } from './../../shared/todo';
import { Component, OnInit, Input, EventEmitter, Output, ViewChild, AfterViewInit, PipeTransform, Pipe } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements AfterViewInit {
  @ViewChild('taskInput')
  taskInput;

  todoDatas: Todo [];
  task: string;

  constructor() {
    this.todoDatas = [
      {id: 1, task: '첫 번째 할일', done: false},
      {id: 2, task: '두 번째 할일', done: false}
    ];
  }

  ngAfterViewInit() {
    this.taskInput.nativeElement.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        this.onAddTodo(e.target.value);
      }
    });
  }

  onAddTodo(task) {
    let id;
    if (this.todoDatas.length === 0) {
      id = 1;
    } else {
      id = this.todoDatas.reduce(
        (p, c) => p > c ? p : c
      ).id + 1;
    }
    this.todoDatas = [
      ...this.todoDatas,
      {id, task, done: false}
    ];
    this.task = '';
  }

  onToggleTodo(id) {
    const index = this.todoDatas.findIndex((t) => t.id === id);
    const originTodo = this.todoDatas[index];
    if (index >= 0) {
      this.todoDatas = [
        ...this.todoDatas.slice(0, index),
        Object.assign({},
          originTodo,
          { done: !originTodo.done }
        ),
        ...this.todoDatas.slice(index + 1)
      ];
    }
  }
}

@Pipe({name: 'incompTodos'})
export class IncompTodos implements PipeTransform {
  transform(todos: Todo[]) {
    return todos.filter(todo => {
      return !todo.done;
    });
  }
}

@Pipe({name: 'compTodos'})
export class CompTodos implements PipeTransform {
  transform(todos: Todo[]) {
    return todos.filter(todo => todo.done);
  }
}
