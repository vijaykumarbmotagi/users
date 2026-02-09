import { Component, OnInit } from '@angular/core';
import { UserList } from '../../../services/user-list';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAllUsers } from '@/app/store/user/user.selectors';
import { User } from '@/app/store/user/user.model';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit{

  userList: User[] = [];
  loader: Boolean = false;
  

  constructor(private store: Store, public userListService: UserList,public route: Router, public activatedRoute: ActivatedRoute){
  }

  ngOnInit() {
    this.loadUserList();

    // this.userListService.getUser().subscribe((rsp:any) => {
    //   this.userList = rsp
    //   this.loader = false;
    // })
    // console.log(this.users$)
  }

  loadUserList(){
    this.loader = true;
    this.store.select(selectAllUsers).subscribe(users => {
      this.userList = users;
      this.loader = false
    })
    console.log(this.userList)
  }

  selectedCard(user: any){
    this.route.navigateByUrl("profile/details?id="+user.id)
  } 

}
