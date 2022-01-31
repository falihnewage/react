import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {changetext,checktext, getdata} from '../../Components/Main/MainSlice'
import { useState,useEffect } from 'react'


function Main() {
    const dispatch = useDispatch()
    const {name,status,} =useSelector(state =>state.Main)
    const [input, setinput] = useState()

    useEffect(() => {
        //  dispatch(getdata())
    }, [dispatch])
    return (
        <div>
            <h1>Main</h1>
    <h3>{name}</h3>
    <input type="text" onChange={(e)=>setinput(e.target.value)}/>
    <button onClick={()=>dispatch(changetext(input))} >Change</button>
    <button onClick={()=>dispatch(checktext(input))} >cHECK</button>
<h4>{status}</h4>
        </div>
    )
}

export default Main
