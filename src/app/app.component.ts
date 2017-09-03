import { Todo } from './shared/todo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todoDatas: Todo [];

  constructor() {
    this.todoDatas = [
      {task: '첫 번째 할일', done: false},
      {task: '두 번째 할일', done: false}
    ];
  }

  onAddTodo(task) {
    this.todoDatas = [...this.todoDatas, {task, done: false}];
  }
}
