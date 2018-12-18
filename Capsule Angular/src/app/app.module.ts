import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { ViewTaskComponent } from './viewtask/view-task.component';
import { AddTaskComponent } from './addtask/add-task.component';

@NgModule({
  imports:      [ BrowserModule,  AppRoutingModule ],
  declarations: [ AppComponent, TaskComponent, ViewTaskComponent, AddTaskComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

