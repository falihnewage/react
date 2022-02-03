import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostById } from '../Data/dataSlice';

const Singlepost = () => {
   const{id}= useParams()
   const dispatch =useDispatch()
   const {singleuser} = useSelector(state=>state.Data)
   useEffect(() => {
     dispatch(getPostById(id))
   }, [dispatch]);
   
  return (<div>

  <h1>Single Post </h1>
  <h4>no of user{singleuser.length}</h4>

  {singleuser.map((i)=>(
      <>
      <h1>{i.name}</h1>
      <h1>{i.place}</h1>
      <h1>{i.age}</h1>
      </>
  ))}


  </div>);
};

export default Singlepost;
