import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './adddata.css';
import { AddData } from './AddSlice';
import imag from './undraw_Preferences_popup_re_4qk0.png';
import { FiPlusCircle } from "react-icons/fi";
import moment from 'moment';


const Adddata = () => {
 const{notify}= useSelector(state=>state.Adddata)
 console.log('notify is',notify);
  const pop = () => toast("Item Added Successfully!");
  const dispatch = useDispatch()
  const [input, setinput] = useState({
    id: Date.now(),
    name: '',
    place: '',
    age: null,
    date:moment().format("YYYY/MM/DD HH:mm:ss")
  })

  const handleInput = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
  }
  const clear =()=>{
    setinput({
      name:"",
      place:'',
      age:'',
    })
    toast('Item added Successfully')
  }

  useEffect(() => {
    notify&&pop()
  }, [notify])

  return (
    <div className='main'>
       
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
      <div className="left">
     <img src={imag} alt="" />
      </div>
      <div className="right">
        <h1>ADD POST</h1>
        <input name='name' placeholder='Name' value={input.name} onChange={handleInput} type="text" />
        <br />
        <input name='place' placeholder='brand' value={input.place} onChange={handleInput} type="text" />
        <br />
        <input name='age' placeholder='price' value={input.age} onChange={handleInput} type="text" />
        
        <br />
        <br />
        <button onClick={()=>dispatch(AddData(input)).then(()=>clear())} ><FiPlusCircle size={25}/> </button>

      </div>
    </div>
  );
};

export default Adddata
