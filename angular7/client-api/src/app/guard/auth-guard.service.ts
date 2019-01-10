import { Injectable } from '@angular/core';

import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }
  
  canActivate() {
    
    let token = localStorage.getItem('token') || null;

    console.log(token);

    if(token != null) {
      console.log('token valido!');
       return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
