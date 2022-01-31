import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
      state.user=payload
    },
  }
  
});

export const {login} = SigninSlics.actions;

export default SigninSlics.reducer;
