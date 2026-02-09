import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post.reducer";

export const selectPostState = createFeatureSelector<PostState>('posts');

export const selectAllPost = createSelector(
    selectPostState,
    state => state.posts
);

export const selectPostById = (userId: number) => createSelector(
    selectPostState,
    state => state.posts.filter(pt => pt.userId == userId)
)

export const selectPostLoading = createSelector(
    selectPostState,
    state => state.loading
);

export const selectPostError = createSelector(
    selectPostState,
    state => state.error
)