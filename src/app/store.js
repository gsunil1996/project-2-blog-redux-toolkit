import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from '../features/blogs/blogSlice';
import usersSlice from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    users: usersSlice
  },
});
