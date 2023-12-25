import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-to-dos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-to-dos.component.html',
  styleUrl: './list-to-dos.component.css'
})
export class ListToDosComponent {
  todos = [
    new Todo(1,'Learn to Dance',false, new Date()),
    new Todo(2, 'Become an Expert at Angular',false, new Date()),
    new Todo(3, 'hello', false, new Date())
  ]
  // todo = {
  //   id : 1,
  //   description: 'Learn to Dance'
  // }
}
