import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-to-dos/list-to-dos.component';

export class Item{
  constructor(
    private  id:string,
    private  name:string,
    private  quantity:number,
    private  userName:string,
    private  category:string){}
}
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retrieveAllItems(username: any){
    return this.http.get<Item[]>(`http://localhost:8888/item/${username}`);
  }
  deleteToDo(username: any,id: any){
    // fake url
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }
  updateTodo(username:any,id:any){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }
}
