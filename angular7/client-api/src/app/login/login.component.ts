import { Component, OnInit } from '@angular/core';

// add imports
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: any = {};

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {

    this.user = {
      email: '',
      password: ''
    };

  }

  async signin(form: FormGroup) {

    if(form.valid) {

      try {

        const response = await this.usersService.login(this.user).toPromise();

        if(response['token']) {
    
          const token = response['token'];
          localStorage.setItem('token', token);
          this.router.navigate(['/users']);
          return;
        }
      
      } catch (error) {
        console.error(error);
      }
    }
      return alert('Erro ao logar!');
  }

}
