import axios from 'axios';
import React from 'react';
import './adddata.css'
import 'react-toastify/dist/ReactToastify.css';
import imag from './undraw_Preferences_popup_re_4qk0.png'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getdata } from '../Data/dataSlice';
import { AddData } from './AddSlice';

const Adddata = () => {
  const notify = () => toast("Item Added Successfully!");
  const dispatch = useDispatch()
  const [input, setinput] = useState({
    id: Date.now(),
    name: '',
    place: '',
    age: null
  })

  const handleInput = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
  }

  useEffect(() => {

  }, [])

  return (
    <div className='main'>

      <ToastContainer />
      <div className="left">
     <img src={imag} alt="" />
      </div>
      <div className="right">
        <h1>ADD POST</h1>
        <input name='name' placeholder='Name' value={input.name} onChange={handleInput} type="text" />
        <br />
        <input name='place' placeholder='Place' value={input.place} onChange={handleInput} type="text" />
        <br />
        <input name='age' placeholder='Age' value={input.age} onChange={handleInput} type="text" />
        <br />
        <br />
        <button onClick={()=>dispatch(AddData(input))} >Add</button>

      </div>
    </div>
  );
};

export default Adddata
