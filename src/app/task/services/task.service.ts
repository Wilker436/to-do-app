import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Task } from '../models/task.modele';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private fireStore: Firestore) { }

  addTask(task: Task){
    const taskRef = collection(this.fireStore, 'tasks');
    return addDoc(taskRef, task);
  }

  getTasks():Observable<Task[]>{
    const taskRef = collection(this.fireStore, 'tasks');
    return collectionData(taskRef, {idField: 'id'}) as Observable<Task[]>;
  }

  deleteTask(task: Task){
    const taskRef = doc(this.fireStore, `tasks/${task.id}`);
    return deleteDoc(taskRef);
  }

  updateTask(task: Task){
    const taskRef = doc(this.fireStore, `tasks/${task.id}`);
    return updateDoc(taskRef, { done: task.done }); // Solo actualiza "done"
  }

  updateAllTask(task: Task){
    const taskRef = doc(this.fireStore, `tasks/${task.id}`);
    return updateDoc(taskRef, { ...task }); // Actualiza todos los campos de la tarea
  }

  
}
