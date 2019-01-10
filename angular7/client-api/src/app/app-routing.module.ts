import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// add imports
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuardService } from './guard/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    canActivate: [AuthGuardService],
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
