import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task.modele';
import { TaskService } from '../../services/task.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  standalone: false
})
export class TaskItemComponent  implements OnInit {

  @Input() task!: Task; 
  
  toggleStatus: string = 'Por hacer';

  async onToggleChange(event: any, task: Task) {
    if (!task) return;
  
    task.done = event.detail.checked;
  
    await this.updateTask(task);
  }
  
  

  constructor(
    private taskService: TaskService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    if (this.task) {
      this.toggleStatus = this.task.done ? 'Hecha' : 'Por hacer';
    }
  }
  
  async deleteTask(task: Task) {
    const response = await this.taskService.deleteTask(task);
    this.presentToast('top', 'Tarea eliminada');
  }
  
  async updateTask(task: Task) {
    const response = await this.taskService.updateTask(task);
    this.presentToast('top', 'Tarea actualizada');
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', messages: string = 'Tarea eliminada') {
    const toast = await this.toastController.create({
      message: messages,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }



  

}
