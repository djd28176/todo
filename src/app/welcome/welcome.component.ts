import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  message : string = 'some welcome message';
  name = ''
  //ActivatedRoute
  constructor(private route: ActivatedRoute){

  }
  ngOnInit(){
    this.name = this.route.snapshot.params['name']
  }
}
