import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getdata = createAsyncThunk(
    'data/get',
    async (obj, { rejectWithValue }) => {
        //   getting parameter

        try {
            const res = await axios.get('http://localhost:8000/items')
            //returning data from api response
            return res.data
        } catch (error) {
            return rejectWithValue(`${error.message} something went wrong` )
        }


    }
)
export const DeleteData = createAsyncThunk(
    'data/delete',
    //   getting parameter as obj
    async (obj,rejectWithValue) => {
        try {
            await axios.delete(`http://localhost:8000/items/${obj}`)

        //passing recived parameter(id) for deleting item
        return obj
        } catch (error) {
            return rejectWithValue(error.message)
        }
        

    }
)
export const Updatedata =createAsyncThunk(
    'dat/update',
    async (obj,{rejectWithValue})=>{
        console.log('update dat is ',obj);
        try {
         const res=   await axios.put(`http://localhost:8000/items/${obj.id}`,obj)
         console.log(res.data);
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const initialState = {
    items: [],
    loading: false,
    singleuser: [],
    error: ''

}
export const Dataslice = createSlice(
    {
        name: 'Data',
        initialState,
        reducers: {
            getPostById: (state, { payload }) => {
                console.log('payload is ', payload);
                state.singleuser = state.items.filter((i) => i.id == payload)
            }
        },
        extraReducers: {
            [getdata.pending]: (state) => {
                state.loading = true

            },
            [getdata.fulfilled]: (state, action) => {
                console.log(action.payload);
                state.loading = false
                state.items = action.payload
                console.log('fulfilled');

            },
            [getdata.rejected]: (state, { payload }) => {
                state.error = payload
                console.log('rejected');
                state.loading = false

            },
            [DeleteData.pending]: (state, { payload }) => {
                console.log('delete pending');
            },
            [DeleteData.fulfilled]: (state, { payload }) => {

                state.items = state.items.filter((i) => i.id !== payload)

            },
            [DeleteData.rejected]: (state, { payload }) => {
                console.log('rejected');
            }

        }

    }

)





const { reducer, actions } = Dataslice

export const { deleteItem, getPostById } = actions


export default reducer





