import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getdata = createAsyncThunk(
    'data',
    async(obj) => {
        //   getting parameter
      const res=await axios.get('http://localhost:8000/items')
    return res.data
    }
)


const initialState = {
    items: [],
    loading: false,
    
}
export const Dataslice = createSlice(
    {
        name: 'Data',
        initialState,
        reducers: {
            deleteItem:(state,{payload})=>{
                 axios.delete(`http://localhost:8000/items/${payload}`)
                 
                 
                }
            

        },
        extraReducers: {
            [getdata.pending]: (state) => {
                state.loading=true

            },
            [getdata.fulfilled]: (state, action) => {

                state.loading=false
                state.items=action.payload
                console.log('fulfilled');

            },
            [getdata.rejected]: (state) => {
                console.log('rejected');
                state.loading=false

            },
            
        }

    }

)





const { reducer,actions } = Dataslice

export const {deleteItem} =actions


export default reducer





