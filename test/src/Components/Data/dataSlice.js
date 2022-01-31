import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getdata = createAsyncThunk(
    'data',
    async => {
     fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'get',
            headers: {
                "content-type": "application/json"
            }
        }).then((res) =>{
            return res.json
        })
    }
)
console.log('ddddd',getdata());
const initialState = {
    items: [],
    loading: false
}
export const Dataslice = createSlice(
    {
        name: 'Data',
        initialState,
        reducers: {

        },
        extraReducers: {
            [getdata.pending]: () => {
                console.log('pending stage');

            },
            [getdata.fulfilled]: (state, action) => {

                state.loading=true
                console.log(action);
                console.log('fulfilled');

            },
            [getdata.rejected]: () => {
                console.log('rejected');

            }
        }

    }

)





const { reducer } = Dataslice



export default reducer





