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
       //setting 
      localStorage.setItem("UserToken",action.payload);
      state.user = action.payload;
      
    },
    setLoginAdmin: (state,action) => {
      localStorage.setItem("DoctorToken",action.payload);
      state.admin = action.payload;
      
    },
    setLoginDoctor: (state, action) => {
      localStorage.setItem("AdminToken",action.payload);
      state.doctor = action.payload;
          },
    setLogout: (state) => {
      localStorage.clear();
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
