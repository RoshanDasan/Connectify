import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  mode: string;
  user: any;
  admin: any;
  token: any;
  admintoken: any;
  posts: any[];
  currentchat: any;
}

const initialState: AuthState = {
  mode: "light",
  user: null,
  admin: null,
  admintoken: null,
  token: null,
  posts: [],
  currentchat: null
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
      state.currentchat = null;
    },
    setAdminLogin: (state, action: PayloadAction<{ admin: any; admintoken: any }>) => {
      state.admin = action.payload.admin;
      state.admintoken = action.payload.admintoken;
    },

    setAdminLogout: (state) => {
      state.admin = null;
      state.admintoken = null;
    },


    setUser: (state, action: PayloadAction<{ user: any }>) => {
      if (state.user) {
        state.user = action.payload.user;
      } else {
        console.error("user do not exist");
      }
    },


    setFollower: (state, action: PayloadAction<{ followers: any }>) => {
      if (state.user) {
        state.user.followers.push(action.payload.followers);
      } else {
        console.error("Failed to set");
      }
    },


    setUnfollower:(state, action: PayloadAction<{unfollower: any}>) => {
      if(state.user){
        const filterData = state.user.followers.filter((follower: string) => follower !== action.payload.unfollower)
        state.user.followers = filterData
      }
    },


    setPosts: (state, action: PayloadAction<{ posts: any[] }>) => {
      state.posts = action.payload.posts;
    },

    setCurrentChat: (state, action: PayloadAction<{ currentchat: any }>) => {
      state.currentchat = action.payload.currentchat;
    },


    setPost: (state, action: PayloadAction<{ post_id: string; post: any }>) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post_id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },


    setUpdatePost: (state, action) => {

      state.posts.push(action.payload.posts)
    },


  }
});

export const { setMode, setLogin, setLogout, setUser, setFollower, setPosts, setPost, setUpdatePost, setAdminLogin, setAdminLogout,setUnfollower, setCurrentChat } = authSlice.actions;
export default authSlice.reducer;
