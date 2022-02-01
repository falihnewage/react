import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie'
const initialState = {
    loading:false,
    user:'',
    error:'',
    isauth:false
};

const SigninSlics = createSlice({
  name: 'second',
  initialState,
  reducers:{
    login:(state,{payload})=>{
      state.isauth=true
      state.user=payload.Name
      Cookies.set('token', payload.Token,{ expires: 1 })
    },
    loginfailed:(state,action)=>{
      state.error=action.payload
    }
  }
  
});

export const {login,loginfailed} = SigninSlics.actions;

export default SigninSlics.reducer;
