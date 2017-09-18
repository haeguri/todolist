import { FormsModule } from '@angular/forms';
import { NaviComponent } from './navi/navi.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NaviComponent, CategoryComponent],
  exports: [NaviComponent]
})
export class CoreModule { }
