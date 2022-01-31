import axios from 'axios';
import React from 'react';
import './adddata.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getdata } from '../Data/dataSlice';

const Adddata = () => {
  const notify = () => toast("Item Added Successfully!");
  const dispatch = useDispatch()
  const [input, setinput] = useState({
    id: Date.now(),
    name: '',
    place: '',
    age: 0
  })

  const handleInput = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
  }



  const handleClick = async () => {
    if (!input.name || !input.place || !input.age) {
      alert('fill all fields')
    } else {
      setinput({
        name: '',
        place: '',
        age: 0,
      })
      await axios.post('http://localhost:8000/items', input).then((response) => {
        console.log(response);
        notify()
        dispatch(getdata())


      })
    }



  }
  useEffect(() => {

  }, [])

  return (
    <div className='main'>

      <ToastContainer />
      <input name='name' placeholder='Name' value={input.name} onChange={handleInput} type="text" />
      <br />
      <input name='place' placeholder='Place' value={input.place} onChange={handleInput} type="text" />
      <br />
      <input name='age' placeholder='Age' value={input.age} onChange={handleInput} type="text" />
      <br />
      <br />
      <button onClick={handleClick} >Add</button>
    </div>
  );
};

export default Adddata
