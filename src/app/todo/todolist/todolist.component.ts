import { Todo } from './../../shared/todo';
import { Component, OnInit, Input, EventEmitter, Output, ViewChild, AfterViewInit, PipeTransform, Pipe } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements AfterViewInit {
  @Input() todos: Todo[];
  @Input() activeCategory: number;

  @ViewChild('taskInput') taskInput;

  task: string;

  constructor() {
  }

  ngAfterViewInit() {
    this.taskInput.nativeElement.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        this.onAddTodo(e.target.value);
      }
    });
  }

  onAddTodo(task) {
    const category = this.activeCategory;
    let id;
    if (this.todos.length === 0) {
      id = 1;
    } else {
      id = this.todos.reduce(
        (p, c) => p > c ? p : c
      ).id + 1;
    }
    this.todos = [
      ...this.todos,
      {category, id, task, done: false}
    ];
    this.task = '';
  }

  onToggleTodo(id) {
    const index = this.todos.findIndex((t) => t.id === id);
    const originTodo = this.todos[index];
    if (index >= 0) {
      this.todos = [
        ...this.todos.slice(0, index),
        Object.assign({},
          originTodo,
          { done: !originTodo.done }
        ),
        ...this.todos.slice(index + 1)
      ];
    }
  }
}

@Pipe({name: 'incompTodos'})
export class IncompTodos implements PipeTransform {
  transform(todos: Todo[], activeCategory: number) {
    return todos.filter(todo => {
      return !todo.done && todo.category === activeCategory;
    });
  }
}

@Pipe({name: 'compTodos'})
export class CompTodos implements PipeTransform {
  transform(todos: Todo[], activeCategory: number) {
    return todos.filter(todo => {
      return todo.done && todo.category === activeCategory;
    });
  }
}
