import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';

const routes: Routes = [
  {path:"",redirectTo:"users", pathMatch:"full"},
  {path: "users", component: Home},
  {path: "details", component: Profile}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
