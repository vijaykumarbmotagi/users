import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './common-list/components/dashboard/dashboard';
import { Login } from './common-list/components/login/login';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'login', component: Login },
  {
    path: 'profile',
    loadChildren: () => import('./main/main-module').then(m => m.MainModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post-module').then(m => m.PostModule)
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
