import React, { useEffect, useState } from 'react'
// import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import './Data.css'
import {Skeleton} from 'antd'
import { DeleteData, getdata } from './dataSlice'
import { ToastContainer, toast } from 'react-toastify';
import { FiEdit,FiTrash2 } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";

function Data() {

    const [search, setsearch] = useState()
    let { loading, items, error } = useSelector(state => state.Data)
    const notify = () => toast("Item Deleted !")
    
    const fltrd = items.filter((i) => i.name.toLowerCase().includes(search && search.toLowerCase()))
    const dispatch = useDispatch()
  //MOMENT SETUP
    var dateAndTime= moment().format("YYYY/MM/DD HH:mm:ss")
    console.log(dateAndTime);
   const dateTimeAgo = moment(dateAndTime).fromNow();
console.log(dateTimeAgo);

    useEffect(() => {
        dispatch(getdata())

    }, [dispatch])
    return (
        <div>
            
            <ToastContainer
               position="top-center"
               autoClose={3300}
               hideProgressBar
               newestOnTop
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
            />
            
            {error && <h1>{error}</h1>}
            
            <input type="search" value={search} name="" style={{ textAlign: 'center', width: '350px', height: '40px' }} id="" placeholder='search by name ...' onChange={(e) => setsearch(e.target.value)} />
            <div className='top' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left',marginLeft:'8.5%' }}>
                {loading && [...Array(5)].map((_,i)=>(
                    <div style={{width:'250px',margin:'60px'}}>
                      <Skeleton title round loading active avatar />
                      </div>
    ))   }
                {
                   !loading && items && fltrd.length === 0 ?
                    

                        items.map((i) => (
                            <div key={i.id} className='c-container' >
                                {

                                    <div className='card' >
                                        <h1>{i.name}</h1>
                                        <h1>{i.place}</h1>
                                        
                                        <h1>&#x20b9; {i.age}</h1>
                                        <div className="icns">
                                            {/* <h1><FiEdit/></h1> */}
                                           <h1> <Link to={`/edit/${i.id}`}><FiEdit size={30} color='black'/> </Link></h1>
                                           <h1> <Link to={`/details/${i.id}`}><AiOutlineEye size={30} color='black'/> </Link></h1>
                                            <h1 onClick={() => dispatch(DeleteData(i.id)).then(() => notify('item deleted successfuly'))} ><FiTrash2/></h1>
                                        </div>
                                        <h3>uploaded: {moment(i.date).fromNow()}</h3>
                                        {/* <button onClick={() => dispatch(DeleteData(i.id)).then(() => notify('item deleted successfuly'))} >delete</button>
                                        <Link to={`/details/${i.id}`}><button style={{ width: '108px', marginTop: '6px' }} >view </button></Link> */}

                                    </div>
                                }

                            </div >
                        )) : fltrd.map((j) => {
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
