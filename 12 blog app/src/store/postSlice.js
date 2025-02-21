import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: "",
      title: "",
      content: "",
      featuredImage: "",
      status: "",
      userId: "",
    },
  ],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    AddPost(state, action) {
      const posts = {
        id: action.payload.$id,
        title: action.payload.title,
        content: action.payload.content,
        featuredImage: action.payload.featuredImage,
        status: action.payload.status,
        userId: action.payload.userId,
      };

      state.posts.push(posts);
    },

    RemovePost(state, action) {
      state.posts = state.posts.filter(
        (post) => post.id !== action.payload.$id
      );
    },

    UpdatePost(state, action) {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.$id ? action.payload : post
      );
    },
  },
});

export const { AddPost, RemovePost, UpdatePost } = postSlice.actions;

export default postSlice.reducer;
