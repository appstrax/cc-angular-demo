import { Injectable } from '@angular/core';

export class Task {
  id: string = '';
  name: string = '';
  complete: boolean = false;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
}
