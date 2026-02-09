import { UserList } from '@/app/services/user-list';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-dailog',
  standalone: false,
  templateUrl: './post-dailog.html',
  styleUrl: './post-dailog.scss'
})
export class PostDailog implements OnInit {

  itsNew: boolean = true

  post = new FormGroup({
    title: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required])
  })

  constructor(
    public dialogRef: MatDialogRef<PostDailog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public apiServices: UserList,
    public snackBar: MatSnackBar,
  ) { }


  ngOnInit() {
    console.log("data", this.data)
    if (this.data.type == "Update") {
      this.itsNew = false
      this.post.setValue({ title: this.data.ownerDetails.title, description: this.data.ownerDetails.body })
    }
  }

  createOrUpdate() {
    if (this.post.invalid) {
      this.post.markAllAsTouched();
      return;
    }
    console.log(this.post.value)
    let params = {}
    if (this.data.type == "Create") {
      params = {
        userId: this.data.ownerId,
        title: this.post.value.title,
        body: this.post.value.description
      }
    } else if (this.data.type == "Update") {
      params = {
        userId: this.data.ownerDetails.userId,
        id: this.data.ownerDetails.id,
        title: this.post.value.title,
        body: this.post.value.description
      }
    }
    this.apiServices.saveOrUpdatePost(params).subscribe(resp => {
      console.log(resp)
      this.snackBar.open("Successfully Record " + this.data.type, "", {
        duration: 3000,
      })
      this.dialogRef.close("success")
    }, error => {
      console.log("error", error)
    })
  }

  close() {
    this.dialogRef.close()
  }
}
