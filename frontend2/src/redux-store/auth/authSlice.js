import { createSlice } from "@reduxjs/toolkit";
import Axios from 'axios';


const initialState = {
  user:null,
  doctor:null,
  admin:null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginUser: (state, action) => {
      state.user = action.payload;
      
    },
    setLogoutUser: (state) => {
      state.doctor = action.payload;
      
    },
    setLoginDoctor: (state, action) => {
      state.admin = action.payload;
          },
    setLogout: (state) => {
      state.user=null,
      state.doctor=null,
      state.admin=null
    }
  },
});

export const {
  setLoginUser,
  setLoginDoctor,
  setLoginAdmin,
  setLogout
} = authSlice.actions;

export default authSlice.reducer;
