import { Todo } from './../../shared/todo';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent {
  @Input() todo: Todo;
  @Output() onToggleTodo = new EventEmitter();

  constructor() { }

  onCheckboxClick(id) {
    this.onToggleTodo.emit(id);
  }
}
