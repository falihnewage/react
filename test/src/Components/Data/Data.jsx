import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Data.css'
import { DeleteData, getdata } from './dataSlice'


function Data() {
    
    const [search,setsearch]=useState()
    let { loading, items,error } = useSelector(state => state.Data)
    

    const fltrd =  items.filter((i)=>i.name.toLowerCase().includes(search &&search.toLowerCase()) )
    const dispatch = useDispatch()
    
    
    useEffect(() => {
        dispatch(getdata())

    }, [dispatch])
    return (
        <div>

            <h1>{loading}</h1>
            {error && <h1>{error}</h1>}
            {loading && <Skeleton />}
            <input type="search" value={search} name="" style={{textAlign:'center',width:'350px',height:'40px'}} id="" placeholder='search by name ...'  onChange={(e)=>setsearch(e.target.value)} />
            <div className='top' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
                     
                {
                    items && fltrd.length ===0 ?
                             
                         
                        items.map((i) => (
                            <div key={i.id} className='c-container' >
                                {

                                    <div className='card' >
                                        <h1>{i.name}</h1>
                                        <h1>{i.place}</h1>
                                        <h1>{i.age}</h1>
                                        <button onClick={()=>dispatch(DeleteData(i.id))} >delete</button>
                                        <Link to={`/details/${i.id}`}><button style={{width:'108px',marginTop:'6px'}} >view </button></Link>
                                        
                                    </div>
                                }

                            </div >
                        )) : fltrd.map((j)=>{
                             return (
                                <div className='card' >
                                <h1>{j.name}</h1>
                                <h1>{j.place}</h1>
                                <h1>{j.age}</h1>
                            </div>
                             )
                        })

                }
            </div>

        </div>
    )
}

export default Data
