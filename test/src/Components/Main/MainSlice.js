import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
    


export const getdata=  createAsyncThunk(
    'data',
   async => {
          fetch('https://jsonplaceholder.typicode.com/users',{
              method:'get',
              headers:{
                  "content-type" :"application/json"
              }
          }).then((res)=> res.json())
})



 const initialState={
     name:'red',
     status:'',
     entries:[]
     
 }

const MainSlice = createSlice({
    name:'Main',
    initialState,
    reducers:{
        changetext:(state,{payload})=>{state.name=payload},
        checktext:(state,action)=>{state.name === action.payload ? state.status='TRUE' : state.status='FALSE'}

    },
    extraReducers:{
        [getdata.pending]:()=>{
            console.log('pending');
            
        },
        [getdata.fulfilled]:(state,{payload})=>{
            console.log('fecthed success');
            state.entries=payload
            

            
        },
        [getdata.rejected]:(state,{payload})=>{
            console.log('rejected');
            

            
        },
        
    }
})



const {reducer,actions} = MainSlice
export const {changetext,checktext} =actions
export default reducer