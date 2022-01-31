import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const Mainapi =createApi({
    reducerPath:'mainapi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8000/'}),
    endpoints:(builder)=>({
        details:builder.query({
            query :()=>({
                url:'items',
                method:'GET'
            })
        })
    })
})

export const {usedetailsQuery} =Mainapi