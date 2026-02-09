import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing-module';
import { NewHeader } from './new-header/new-header';
import { ProfileCard } from './profile-card/profile-card';
import { Loader } from './loader/loader';
import { PostCard } from './post-card/post-card';
import { PostDailog } from './post-dialog/post-dailog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DeleteDialog } from './delete-dialog/delete-dialog';


@NgModule({
  declarations: [
    NewHeader,
    ProfileCard,
    Loader,
    PostCard,
    PostDailog,
    DeleteDialog
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports:[
    NewHeader,
    ProfileCard,
    Loader,
    PostCard
  ]
})
export class SharedModule { }
