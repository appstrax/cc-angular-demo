import { Injectable } from '@angular/core';
import { CrudService, Model, Ignore } from '@appstrax/database';

export class Task extends Model {

  name: string = '';
  complete: boolean = false;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService extends CrudService<Task> {

  constructor() {
    super('tasks', Task);
  }
}
