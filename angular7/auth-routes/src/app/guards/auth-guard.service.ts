import { Injectable } from '@angular/core';

// add imports
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  private isAuthenticated: boolean = false;

  // este método retorna obrigatóriamente boolean por padrão
  canActivate() {
   
    if(this.isAuthenticated) {
      return true;
    }
    
    console.log("não está autenticado!");
    // força o redirecionamento para outra rota
    this.router.navigate(['/login']);
    
    return false;
  }

}
