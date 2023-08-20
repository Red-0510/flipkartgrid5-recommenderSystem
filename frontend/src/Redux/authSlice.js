import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: {
    name: "",
    email: "",
    role:"",
    location:"",
    age:"",
    cart:[],
    purchases:[]
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
    },
    SET_USER(state, action) {
      const profile = action.payload;
      state.user.name = profile.name;
      state.user.email = profile.email;
      state.user.role = profile.role;
      state.user.cart= profile.cart;
      state.user.purchases = profile.purchases;
    },
    SET_LOGOUT(state){
      state.user=initialState
    }
  },
});

export const { SET_LOGIN, SET_USER,SET_LOGOUT } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
