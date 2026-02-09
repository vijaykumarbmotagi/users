import { createAction, props } from "@ngrx/store";
import { Post } from "./post.model";

export const loadPost = createAction('[Post] load Posts');

export const loadPostSuccess = createAction(
    '[Post] load post success',
    props<{posts: Post[] }>()
);

export const loadPostFailure = createAction(
    '[Post] load post failure',
    props<{error : any}>()
);