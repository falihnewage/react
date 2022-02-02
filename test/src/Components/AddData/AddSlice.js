import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  
  status:{},
  loading:false,
};

export const AddData = createAsyncThunk(
  'Add',
  async(input)=>{
    console.log(input);
    const res =await axios.post('http://localhost:8000/items', input)
    return res.data
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
      console.log(payload);
       state.status=payload
       state.loading=false
    },
    [AddData.rejected]:()=>{
      console.log('rejected');
    }
  }
});

export const {} = AddSlice.actions;

export default AddSlice.reducer;
