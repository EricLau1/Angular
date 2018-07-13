import { Component, OnInit } from '@angular/core';

// adicionado manualmente
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  // criado manualmente
  currentUrl : string;

  // modificado manualmente
  constructor(private router: Router) { 
    this.router.events.subscribe(
      ( _: NavigationEnd) => this.currentUrl = _.url
    );
  }

  ngOnInit() {
  }

}
