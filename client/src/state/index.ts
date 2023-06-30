import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  mode: string;
  user: any;
  admin: any;
  token: any;
  admintoken: any;
  posts: any[];
  currentchat: any;
  videoCall: any;
  notifications: any[];

}

const initialState: AuthState = {
  mode: "light",
  user: null,
  admin: null,
  admintoken: null,
  token: null,
  posts: [],
  currentchat: null,
  videoCall: false,
  notifications: []

};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setMultipleMode:(state: any) => {
      state.mode = state.mode === "light" ? "dark" : "light";
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
      state.notifications = [];
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
    
    setuserName: (state, action: PayloadAction<{ userName: string }>) => {
      if (state.user) {
        state.user.userName = action.payload.userName
      }
    },

    setFollower: (state, action: PayloadAction<{ followers: any }>) => {
      if (state.user) {
        state.user.followers.push(action.payload.followers);
      } else {
        console.error("Failed to set");
      }
    },


    setUnfollower: (state, action: PayloadAction<{ unfollower: any }>) => {
      if (state.user) {
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


    setBlockUser: (state, action: PayloadAction<{ blockUser: any }>) => {
      state.user.blockingUsers.push(action.payload.blockUser);

    },

    setUnblockUser: (state: any, action: PayloadAction<{ unblockUser: any }>) => {
      console.log('unbloving set');

      if (state.user) {
        const filterResult = state.user.blockingUsers.filter((userId: any) => userId !== action.payload.unblockUser);
        console.log(filterResult);

        state.user.blockingUsers = filterResult;
      } else {
        console.log('user not found');

      }
    },

    setNotification: (state: any, action: PayloadAction<{ data: any }>) => {
      if (state.notifications) state.notifications.push(action.payload.data);
      else state.notifications = action.payload.data

    },

    unsetNotification: (state: any, action: PayloadAction<{ index: number }>) => {
      state.notifications.splice(action.payload.index, 1)
    },

    unsetNotificationOpen: (state: any) => {

      state.notifications = [];
    },

    setVideocallTrue: (state: any) => {
      state.videoCall = true
    },
    setVideocallfalse: (state: any) => {
      state.videoCall = false
    },

    setRequests: (state: any, action: PayloadAction<{ id: string }>) => {
      const filtered = state.user.requests.filter(({ id }: any) => id !== action.payload.id)
      state.user.requests = filtered
    },

    setSendRequest: (state: any, action: PayloadAction<{ id: string, userName: string, dp: string }>) => {
      state.user.requested.push({ id: action.payload.id, userName: action.payload.userName, dp: action.payload.dp })
    },
    removeSendRequest: (state: any, action: PayloadAction<{ id: string }>) => {
      const filtered = state.user.requested.filter((user: any) => user.id !== action.payload.id)
      state.user.requested = filtered;
    }


  }
});

export const {
  setMode,
  setMultipleMode,
  setLogin,
  setLogout,
  setUser,
  setuserName,
  setFollower,
  setPosts,
  setPost,
  setRequests,
  setSendRequest,
  removeSendRequest,
  setUpdatePost,
  setAdminLogin,
  setAdminLogout,
  setUnfollower,
  setCurrentChat,
  setBlockUser,
  setUnblockUser,
  setNotification,
  unsetNotification,
  unsetNotificationOpen,
  setVideocallTrue,
  setVideocallfalse
} = authSlice.actions;
export default authSlice.reducer;
