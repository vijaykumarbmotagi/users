import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CommonListModule } from './common-list/common-list-module';
import { MainModule } from './main/main-module';
import { SharedModule } from './shared/shared-module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user/user.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { PostEffects } from './store/post/post.effects';
import { postReducer } from './store/post/post.reducer';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonListModule,
    HttpClientModule,
    MainModule,
    SharedModule,
    StoreModule.forRoot({users: userReducer, posts: postReducer}),
    EffectsModule.forRoot([UserEffects, PostEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
