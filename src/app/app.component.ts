import { Component } from '@angular/core';

import { Task as Task } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public tasks: Task[] = [];
  public name: string = '';

  addTask() {
    const task = new Task();
    task.id = (new Date()).getTime() + '';
    task.name = this.name;

    this.tasks.push(task);
    this.name = '';
  }

  removeTask(task: Task) {
    this.tasks = this.tasks.filter(x => x.id != task.id);
  }

  toggleTaskComplete(todo: Task) {
    todo.complete = !todo.complete;
  }

}
