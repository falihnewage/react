import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './Topnav.css'
import { logout } from '../Signin/SigninSlics'


const Topnav = () => {
    const dispatch = useDispatch()
    const navigate =useNavigate()
   const {isauth,user} =useSelector(state =>state.Login)
    
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} className='header'>

            <div style={{flex:'85'}} className="title">
                POSTS
            </div>
            <div  className="avtar">
            
               {isauth  || Cookies.get('token') &&  <NavLink className='link' activeClassName='active' to="/">Home</NavLink>  }  
               {isauth || Cookies.get('token')  &&  <NavLink className='link' activeClassName='active' to="/add">Add Item</NavLink>  }  
               {isauth || Cookies.get('token')  &&  <button onClick={()=>dispatch(logout()).then(()=>alert('done'))}>Logout</button>  }  
                 <div  className="img">
                     {user && <h3 style={{color:'#fff'}} >{user}</h3> }
                {/* <img width='30px' height='50px' style={{borderRadius:'50%',cursor:'pointer'}} src="https://is3-ssl.mzstatic.com/image/thumb/Purple49/v4/c6/33/dd/c633dd45-95be-f814-bec6-9e84ee35d482/source/512x512bb.jpg" alt=""  /> */}
                </div>
            </div>
           
        </div>
    )
}

export default Topnav