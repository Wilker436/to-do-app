import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TaskFormComponent,
    TaskListComponent,
    TaskItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule
  ],
  exports: [
    TaskFormComponent,
    TaskListComponent
  ]
})
export class TaskModule { }
