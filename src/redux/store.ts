import { configureStore } from '@reduxjs/toolkit';
import productosReducer from './productosSlice';
import gemasReducer from './gemasSlice';

export const store = configureStore({
  reducer: {
    productos: productosReducer,
    gemas: gemasReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
