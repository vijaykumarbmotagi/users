import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  standalone: false,
  templateUrl: './delete-dialog.html',
  styleUrl: './delete-dialog.scss'
})
export class DeleteDialog {

  constructor(public dialogRef: MatDialogRef<DeleteDialog>){

  }

  option(opt: string){
    this.dialogRef.close(opt)
  }
}
