import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  logout() {
    sessionStorage.removeItem('authenticaterUser');
  }

  constructor() { }

  authenticate(username: string, password: string){
    if(username ==='jeffrey' && password ==='123'){
      sessionStorage.setItem('authenticaterUser',username)
      return true;
    }else{
      return false;
    }
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return user !== null;
  }
}
