import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as postActions from './post.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserList } from "@/app/services/user-list";

@Injectable()

export class PostEffects {

    loadPost$;

    constructor(
        private actions$: Actions,
        private postService: UserList
    ) {
        this.loadPost$ = createEffect(() =>
            this.actions$.pipe(
                ofType(postActions.loadPost),
                mergeMap(() =>
                    this.postService.getPost().pipe(
                        map(posts => postActions.loadPostSuccess({ posts })),
                        catchError(error =>
                            of(postActions.loadPostFailure({ error }))
                        )
                    )
                )
            )
        )
    }
}