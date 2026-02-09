import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing-module';
import { PostList } from './components/post-list/post-list';
import { SharedModule } from '@/app/shared/shared-module';
import { CommonListModule } from '@/app/common-list/common-list-module';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Commands } from './components/commands/commands';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    PostList,
    Commands
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    CommonListModule,
    SharedModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule
  ]
})
export class PostModule { }
