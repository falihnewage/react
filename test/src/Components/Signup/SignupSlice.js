import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading:false,
    success:false,
    data:[]
};

const SignupSlice = createSlice({
  name: 'Signup',
  initialState,
  reducers: {
      signuploading:(state)=>{state.loading=true},
      signupsuccess:(state,{payload})=>{
          state.success=true
          state.data=payload
        }
  },
});

export const {signuploading,signupsuccess} = SignupSlice.actions;

export default SignupSlice.reducer;
