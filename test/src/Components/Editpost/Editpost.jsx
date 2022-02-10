import React, { useEffect, useState } from 'react';
import './editpost.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostById, Updatedata } from '../Data/dataSlice';

function Editpost() {
    const [data, setdata] = useState({
        name:'',
        place:'',
        age:''
    });
    const dispatch = useDispatch()
    const { singleuser } = useSelector(state => state.Data)
    const { id } = useParams()
    useEffect(() => {
        dispatch(getPostById(id))
    }, []);

    return (
        <div>
            {singleuser.map((i) => (
                <div className='user-itm'>
                    <input value={i.name} type="text" />
                    <input value={i.place} type="text" />
                    <input value={i.age} type="text" />
                    <button onClick={() => dispatch(Updatedata(i)).then(()=>alert('update success'))} >update</button>

                </div>
                
            ))}
                  
        </div>
    );
}

export default Editpost;
