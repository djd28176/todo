import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  constructor(public message : string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http : HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8888/hello');
    // return this.http.get('http://localhost:8888/error');
  }

  executeHelloWorldBeanServiceWithPathVariable(name: any) {
    return this.http.get<HelloWorldBean>(`http://localhost:8888/${name}`);

  }
}
