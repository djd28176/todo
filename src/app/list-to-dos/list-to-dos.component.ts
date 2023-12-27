import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

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
  message: string =''
  // todo = {
  //   id : 1,
  //   description: 'Learn to Dance'
  // }
  constructor(private todoService: TodoDataService){}
  ngOnInit(){
    this.refreshToDos();
  }
  refreshToDos(){
    this.todoService.retrieveAllItems('test').subscribe(
      response => {
        console.log(response);
      }
    )
  }
  deleteToDo(id: number) {
    console.log(`delete todo ${id}`)
    this.todoService.deleteToDo('username',id).subscribe(
      response =>{
        console.log(response);
        this.message = 'Delete Successful!';
        this.refreshToDos();
      }
    )
  }
}
