import { CoreModule } from './core/core.module';
import { TodoModule } from './todo/todo.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoitemComponent } from './todo/todoitem/todoitem.component';
import { NaviComponent } from './core/navi/navi.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
