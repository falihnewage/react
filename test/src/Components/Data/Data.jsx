import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getdata } from './dataSlice'



function Data() {
    const {loading,items} = useSelector(state=>state.Data)
   
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getdata())
    }, [])
    return (
        <div>
            <h1>{loading}</h1>
            
        </div>
    )
}

export default Data
