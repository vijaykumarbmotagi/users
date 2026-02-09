import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  @Input() userHeader : Boolean = true;

  constructor(public route: Router){}

  ngOnInit(){
    
  }

  dashBoard(){
    this.route.navigateByUrl("dashboard")
  }

  logout(){
    this.route.navigateByUrl("login")
  }

}
