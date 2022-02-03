import React from 'react';
import { useSelector } from 'react-redux';
import {  Navigate, Outlet } from 'react-router-dom';
import Cookies from "js-cookie";
import Signin from '../Signin/Signin';

const PrivateRoute = ({children,...rest}) => {
    const {isauth} =useSelector(state =>state.Login)
   
  return  isauth || Cookies.get('token') ? <Outlet/> : <Navigate  to='/'/>
  
  }
export default PrivateRoute;
