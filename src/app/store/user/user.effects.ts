import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UserActions from './user.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserList } from '../../services/user-list'; 

@Injectable()
export class UserEffects {
  loadUsers$;

  constructor(
    private actions$: Actions,
    private userService: UserList
  ) {

    this.loadUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UserActions.loadUsers),
        mergeMap(() =>
          this.userService.getUser().pipe(
            map(users => UserActions.loadUsersSuccess({ users })),
            catchError(error =>
              of(UserActions.loadUsersFailure({ error }))
            )
          )
        )
      )
    );
  }
}
