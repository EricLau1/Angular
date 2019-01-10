import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private token = localStorage.getItem('token');
  private users: Array<any> = [];

  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit() {
    
    this.usersService.getUsers(`bearer ${this.token}`)
      .subscribe(res => {
        console.log(res);
      });
      

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
