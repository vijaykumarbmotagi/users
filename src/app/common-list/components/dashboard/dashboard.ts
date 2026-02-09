import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadUsers } from '@/app/store/user/user.actions';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {

  constructor(public routes: Router, private store: Store){}

  ngOnInit() {
    this.store.dispatch(loadUsers());
  }

  selectedModule(module: string){
    this.routes.navigateByUrl(module)
  }

}
