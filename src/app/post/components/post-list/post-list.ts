import { UserList } from '@/app/services/user-list';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { PostDailog } from '@/app/shared/post-dialog/post-dailog';
import { DeleteDialog } from '@/app/shared/delete-dialog/delete-dialog';
import { Store } from '@ngrx/store';
import { selectAllUsers } from '@/app/store/user/user.selectors';
import { selectAllPost, selectPostById } from '@/app/store/post/post.selectors';
import { loadPost, loadPostSuccess } from '@/app/store/post/post.actions';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss'
})
export class PostList implements OnInit {

  postList: any = [];
  postMasterList: any = [];
  loader: boolean = false;
  userPresent: boolean = false;
  selectedOwner: any = "all";
  ownerList: any = [];
  constructor(public apiService: UserList,
    public route: Router,
    public routes: ActivatedRoute,
    public snackBar: MatSnackBar,
    public store: Store,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.loader = true;
    this.apiLoad();
  }

  apiLoad() {
    this.store.dispatch(loadPost())
    this.loadPostList();
    this.loadUserList();

  }

  loadPostList() {
    this.store.select(selectAllPost).subscribe(res => {
      this.postList = res;
      this.loader = false
    }
    )
  }

  loadUserList() {
    this.loader = true;
    this.store.select(selectAllUsers).subscribe(res => {
      this.ownerList = res;
      this.checkQueryParams()
      this.loader = false;
    })
  }

  selectedOwnerName() {
    if (this.selectedOwner == "all") {
      this.store.select(selectAllPost).subscribe(res => {
        this.postList = res
      })
    } else {
      this.store.select(selectPostById(this.selectedOwner)).subscribe(resp => {
        this.postList = resp
      })
    }
  }

  chooseEmitChanges(event: any) {
    console.log("event", event)
    if (event.triggerName == "PostId") {
      this.route.navigateByUrl("/post/comment?id=" + event?.id)
    }

    if (event.triggerName == "edit") {
      this.editMode(event?.details)
    }

    if (event.triggerName == "delete") {
      this.deleteMode(event?.id)
    }
  }

  checkQueryParams() {
    this.routes.queryParams.subscribe((params) => {
      if (params['userId']) {
        this.userPresent = true;
        this.selectedOwner = parseInt(params["userId"])
        this.selectedOwnerName()
      }
    })
  }

  create() {
    if (this.selectedOwner == "all") {
      this.snackBar.open("Please select the owner type", "Close", {
        duration: 3000
      })
    } else {
      const dialogRef = this.dialog.open(PostDailog, {
        width: '50%',
        data: { ownerId: this.selectedOwner, type: "Create" },
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result == "success") {
          this.loadPostList()
        }
      });
    }
  }

  editMode(details: any) {
    const dialogRef = this.dialog.open(PostDailog, {
      width: '50%',
      data: { ownerDetails: details, type: "Update" },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == "success") {
        this.loadPostList()
      }
    });
  }

  deleteMode(id: number) {
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == "yes") {
        this.apiService.deletePost(id).subscribe(response => {
          console.log(response)
          this.loadPostList()
          this.snackBar.open("Post deleted Successfully", "Close", {
            duration: 3000
          })
        },
          error => {
            console.log("error", error)
          }
        )
      }
    });
  }

}
