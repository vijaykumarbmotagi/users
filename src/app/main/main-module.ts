import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing-module';
import { Home } from './components/home/home';
import { CommonListModule } from '../common-list/common-list-module';
import { SharedModule } from '../shared/shared-module';
import { Profile } from './components/profile/profile';


@NgModule({
  declarations: [
    Home,
    Profile,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CommonListModule,
    SharedModule,
  ]
})
export class MainModule { }
