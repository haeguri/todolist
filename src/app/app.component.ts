import { Category } from './shared/category';
import { Todo } from './shared/todo';
import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activeCategory: number;

  sampleCategories: Category[] = [
    { id: 1, name: 'TODAY' },
    { id: 2, name: 'WEEK' }
  ];

  sampleTodos: Todo[] = [
    {category: 1, id: 1, task: '첫 번째 할일', done: false},
    {category: 1, id: 2, task: '두 번째 할일', done: false},
    {category: 2, id: 3, task: '한 주 할일 1', done: false},
    {category: 2, id: 4, task: '한 주 할일 2', done: false},
    {category: 2, id: 5, task: '한 주 할일 3', done: false},
    {category: 2, id: 6, task: '한 주 할일 4', done: false}
  ];

  constructor() {
    this.activeCategory = this.sampleCategories[0].id;
  }

  onSwitchCategory(id) {
    this.activeCategory = id;
  }
}
