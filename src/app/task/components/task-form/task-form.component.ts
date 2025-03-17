import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  standalone: false
})
export class TaskFormComponent  implements OnInit {
  

  taskForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private taskService: TaskService
  ) {

    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]], 
      description: ['', Validators.required], 
      date: ['', Validators.required],
      done: [false]
    });

  }

  minDate = new Date().toISOString(); // Fecha mínima = Hoy

  async submit() {
    if (this.taskForm.valid) {
      try {
        const response = await this.taskService.addTask(this.taskForm.value);
        console.log(response);
        
        
        this.taskForm.reset();
      } catch (error) {
        console.error('Error al agregar la tarea:', error);
      }
    }
  }
  

  ngOnInit() {}

}
