import { Component } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-to-dos/list-to-dos.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  id:number | undefined;
  todo!:Todo;
  constructor(private todoService:TodoDataService,
    private route:ActivatedRoute){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(1,'',false,new Date());
    this.todoService.updateTodo('test',this.id).subscribe(
      data=> this.todo = data
    )
  }
saveToDo() {

}

}
