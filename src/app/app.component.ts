import { Component, OnInit } from '@angular/core';

import { Task as Task, TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public tasks: Task[] = [];
  public name: string = '';

  constructor(private taskService: TaskService) {
  }

  async ngOnInit() {
    this.tasks = await this.taskService.find();
  }

  async addTask() {
    let task = new Task();
    task.name = this.name;

    task = await this.taskService.save(task);

    this.tasks.push(task);
    this.name = '';
  }

  async removeTask(task: Task) {
    await this.taskService.delete(task.id);
    this.tasks = this.tasks.filter(x => x.id != task.id);
  }

  async toggleTaskComplete(task: Task) {
    task.complete = !task.complete;
    await this.taskService.save(task);
  }

}
