import { Category } from './../../shared/category';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  @Input() categories: Category[];
  @Output() onSwitchCategory = new EventEmitter();
  categoryName: string;

  constructor() {}

  ngOnInit() {
  }

  categoryClicked(id) {
    console.log(id);
    this.onSwitchCategory.emit(id);
  }

  onAddCategory() {
    // TODO: 중복 검사
    const newId = this.categories.reduce((p, c) => p.id > c.id ? p : c).id + 1;
    this.categories = [
      ...this.categories,
      {id: newId, name: this.categoryName}
    ];
    this.categoryName = '';
  }
}
