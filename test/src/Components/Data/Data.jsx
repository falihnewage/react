import React, { useEffect } from 'react'
import './Data.css'
import { useDispatch, useSelector } from 'react-redux'
import Adddata from '../AddData/Add-data'
import { getdata, deleteItem } from './dataSlice'



function Data() {
    let { loading, items } = useSelector(state => state.Data)
    console.log("textss",items);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getdata())
        
    }, [dispatch])
    return (
        <div>
            
            <h1>{loading}</h1>
           { loading && <h1>Loading ....</h1>}
           <div className='top' style={{display:'flex',flexWrap:'wrap',justifyContent:'left'}}>
           
            {
                
                items.map((i) => (
                    <div key={i.id}>
                        {
                           
                                <div className='card' >
                                    <h1>{i.name}</h1>
                                    <h1>{i.place}</h1>
                                    <h1>{i.age}</h1>
                                    {/* <img src={i.fields.images} alt="" />
                                    <h1> {i.fields.product_category}</h1> */}
                                    {/* <h1>company : {i.company.bs}</h1> */}
                                    
                                    <button onClick={() =>dispatch(deleteItem(i.id)) } >Delete</button>

                                </div>
                        }

                    </div >
                ))
               
            }
             </div>

        </div>
    )
}

export default Data
