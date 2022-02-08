import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  
  status:{},
  loading:false,
  notify:false
};

export const AddData = createAsyncThunk(
  'Add',
  async(input)=>{
    console.log(input);
    try {
      const res =await axios.post('http://localhost:8000/items', input)
    return res.data
    } catch (error) {
      console.log('err',error);
      return error
    }
    
  }
)

const AddSlice = createSlice({
  name: 'Add',
  initialState,
  reducers: {},
  extraReducers:{
    [AddData.pending]:(state)=>{
          state.loading=true
    },
    [AddData.fulfilled]:(state,{payload})=>{
      state.notify=true
      console.log(payload);
       state.status=payload
       state.loading=false
       
       state.notify=false
    },
    [AddData.rejected]:(state)=>{
      console.log('rejected');
      state.loading =false
    }
  }
});

// export const {} = AddSlice.actions;

export default AddSlice.reducer;
