import { createReducer, on } from "@ngrx/store";
import * as postActions from './post.actions';
import { Post } from "./post.model";

export interface PostState {
    posts: Post[];
    loading: boolean;
    error: any;
}

export const initialState: PostState = {
    posts: [],
    loading: false,
    error: null
}

export const postReducer = createReducer(
    initialState,
    on(postActions.loadPost, state => ({
        ...state,
        loading: true,
        error: null
    })),
    on(postActions.loadPostSuccess, (state, {posts}) => ({
        ...state,
        posts,
        loading: false
    })),
    on(postActions.loadPostFailure, (state, {error})=>({
        ...state,
        error,
        loading: false,
    }))
)