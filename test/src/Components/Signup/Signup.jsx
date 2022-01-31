import axios from 'axios';
import React from 'react';

const Signup = () => {

    const handleClick =()=>{
        axios.post('http://myeco-mmerce.herokuapp.com/UserRegister',).then((response)=>{
            console.log(response);
        })
    }
  return (<div>


      <h1>Signup</h1>
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <button onClick={handleClick} >Signup</button>
  </div>)
};

export default Signup;
