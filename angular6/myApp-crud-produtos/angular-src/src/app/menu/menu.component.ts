import { Component, OnInit } from '@angular/core';

// adicionado manualmente
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // criado manualmente
  currentUrl : string;

  // modificado manualmente
  constructor(private router: Router) { 
    this.router.events.subscribe(
      ( _: NavigationEnd ) => this.currentUrl = _.url );
  }

  ngOnInit() {
  }

}
