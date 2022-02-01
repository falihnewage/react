import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Login } from '../Signin/SigninAction';
import './signup.css'
import { signup } from './SignupAction';

const Signup = () => {
    const dispatch = useDispatch()
 
    const [user,setuser]=useState ({
        name:'',
        email:'',
        password:''
    })

    const handleChange =(e)=>{
         setuser({...user,[e.target.name]:e.target.value})
    }
    
  return (<div>


<div className="container">
      
      <div className="form">
       
    <h1 className="h1">Signup</h1>
  

<input name='name' required onChange={handleChange} placeholder="name" className="input" type="text "/>
<input name='email' required onChange={handleChange} placeholder="email" className="input" type="email "/>
<input name='password' required onChange={handleChange} placeholder="password" className="input" type="password"/>
<button className='button' onClick={()=> !user.username && !user.password ? alert('fill every fields'): dispatch(signup(user))} >signup</button>
<br />
<br />
<Link to='/'> <button className='link-btn'>Already have account ?</button></Link>


</div>
</div>


  </div>)
};

export default Signup;
