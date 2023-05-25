import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  mode: string;
  user: any;
  token: any;
  posts: any[];
}

const initialState: AuthState = {
  mode: "light",
  user: null,
  token: null,
  posts: []
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action: PayloadAction<{ user: any; token: any }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    
    setUser: (state, action: PayloadAction<{ user: any }>) => {
      if (state.user) {
        state.user = action.payload.user;
      } else {
        console.error("user do not exist");
      }
    },
    setFriends: (state, action: PayloadAction<{ friends: any[] }>) => {
      if (state.user) {
        state.user = action.payload.friends;
      } else {
        console.error("Friends do not exist");
      }
    },
    setPosts: (state, action: PayloadAction<{ posts: any[] }>) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action: PayloadAction<{ post_id: string; post: any }>) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post_id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    }
  }
});

export const { setMode, setLogin, setLogout,setUser, setFriends, setPosts, setPost } = authSlice.actions;
export default authSlice.reducer;
