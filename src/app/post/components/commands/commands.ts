import { UserList } from '@/app/services/user-list';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commands',
  standalone: false,
  templateUrl: './commands.html',
  styleUrl: './commands.scss'
})
export class Commands implements OnInit {

  commentsList: any = []
  loader: Boolean = false;

  constructor(public routes: ActivatedRoute, public apiServer: UserList) {

  }

  ngOnInit() {
    this.loadApi()
    this.loader = true;
  }

  loadApi() {
    this.routes.queryParams.subscribe((res: any) => {
      this.apiServer.getComments(res.id).subscribe((response: any) => {
        this.commentsList = response
        this.loader = false
      })
    })
  }

}
