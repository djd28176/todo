import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';
import { CommonModule } from '@angular/common';
import e from 'express';
import { error } from 'console';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  message : string = 'some welcome message';
  name = ''
  welcomeMessageFromService : string ='';
  errorMessage : string = '';
  //ActivatedRoute
  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService){

  }
  ngOnInit(){
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  getWelcomeMessageWithPathVariable() {
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: HelloWorldBean){
    this.welcomeMessageFromService = response.message;
    // console.log(response.message);
  }
  handleErrorResponse(error: any) {
    this.errorMessage = error;
  }
}
  

