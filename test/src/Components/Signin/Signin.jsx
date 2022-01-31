import axios from 'axios';
import './Signin.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './SigninSlics';
import { Link } from 'react-router-dom';


const Signin = () => {
      const dispatch=useDispatch()

    let formData = new FormData();
    formData.append('username', 'abhay');
    formData.append('password', '123@1234');


 const [user,setuser]=useState ({
        username:'',
        password:''
    })

    const handleChange =(e)=>{
           setuser({...user,[e.target.name]:e.target.value})
    }

  return (<div>
      <div className="container">
      <div className="form">

    <h1 class="h1">LOGIN</h1>
<input name='username' required onChange={handleChange} placeholder="email" className="input" type="email "/>
<input name='password' required onChange={handleChange} placeholder="password" className="input" type="text"/>
<button className='button' onClick={()=> !user.username && !user.password ? alert('fill every fields'): dispatch(login(user))} >Login</button>


</div>
</div>
      


  </div>
  
  )
};

export default Signin;
