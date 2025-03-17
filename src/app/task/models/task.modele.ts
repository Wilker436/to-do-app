export interface Task {
    id?: string;         // ID (generado por Firebase)
    title: string;       // Título de la tarea
    description: string; // Descripción de la tarea
    date: Date;          // Fecha de la tarea
    done: boolean;       // Estado (completada o no)
  }
  