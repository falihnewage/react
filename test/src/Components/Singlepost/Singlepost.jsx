import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById } from '../Data/dataSlice';
import Stripecheckout from 'react-stripe-checkout'
import { FiArrowLeft } from "react-icons/fi";
import './singlepost.css'

const Singlepost = () => {
  const navigate = useNavigate()
   const{id}= useParams()
   const dispatch =useDispatch()
   const {singleuser} = useSelector(state=>state.Data)
   useEffect(() => {
     dispatch(getPostById(id))
   }, [dispatch]);
   
  return (
  <div className='single' >

  <h1>Buy Product </h1>
 

  {singleuser.map((i)=>(
      <div className='itms' >
      <h1>{i.name}</h1>
      <h1>{i.place}</h1>
      <h1>&#x20b9; {i.age}</h1>
      <Stripecheckout
      currency='INR'
       stripeKey='pk_test_51KQmA1SHCOmL9kEpeKZo6QvQKUF6D6Zo1V4HHZi6s75YpE7k6eQVQhmUjVCkwwFPMK3rBHbIGFsIrfA568pJSql5003gOs4gME'
       token={(token)=>console.log(token)}
       billingAddress
       shippingAddress
       amount={i.age*100}
       name={i.name}
       allowRememberMe
       
      />
      </div>
  ))}
   <button onClick={()=>navigate(-1)} ><FiArrowLeft/> Go Back</button>

  </div>);
};

export default Singlepost;
