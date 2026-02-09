import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserList } from "@/app/services/user-list"; 
import { Store } from '@ngrx/store';
import { selectUserById } from '@/app/store/user/user.selectors';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile implements OnInit {
  profileData: any = [];
  loader: boolean = false

  constructor(public route: ActivatedRoute, public userListService: UserList, public routes: Router, public store: Store) {

  }

  ngOnInit() {
    this.loader = true;
    this.route.queryParams.subscribe((res:any)=> {
      this.store.select(selectUserById(res.id)).subscribe(response => {
        this.profileData = response;
        this.loader = false
      })
      // this.userListService.getSingleUser(res.id).subscribe((response: any) => {
      //   this.profileData = response;
      //   this.loader = false
      // })
    })

  }

  back(){
    this.routes.navigateByUrl("profile/users")
  }

  post(){
    this.routes.navigateByUrl("post/list?userId="+this.profileData.id)
  }

}
