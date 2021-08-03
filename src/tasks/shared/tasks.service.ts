import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    { id: 1, description: 'Task 1', completed: false },
    { id: 2, description: 'Task 2', completed: false },
    { id: 3, description: 'Task 3', completed: false },
    { id: 4, description: 'Task 4', completed: false },
    { id: 5, description: 'Task 5', completed: false },
    { id: 6, description: 'Task 6', completed: false },
    { id: 7, description: 'Task 7', completed: false },
    { id: 8, description: 'Task 8', completed: false },
    { id: 9, description: 'Task 9', completed: false },
    { id: 10, description: 'Task 10', completed: false },
  ];

  index = () => this.tasks;

  show = (id: number) => this.tasks.find((task) => task.id == id);

  store = (task: Task) => {
    let lastId = 0;
    if (this.tasks.length > 0) {
      lastId = this.tasks[this.tasks.length - 1].id;

      task.id = lastId + 1;
      this.tasks.push(task);

      return task;
    }
  };

  edit = (id: number, task: Task) => {
    const taskIndex = this.tasks.findIndex((t) => t.id == id);

    if (taskIndex === -1) {
      throw new Error('Not Found');
    }

    this.tasks[taskIndex] = { ...task };

    return this.tasks[taskIndex];
  };

  destroy = (id: number) => {
    const index = this.tasks.findIndex((t) => t.id == id);
    this.tasks.splice(index, 1);
    return;
  };
}
