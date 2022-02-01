

import axios from 'axios'
import {login,loginfailed} from './SigninSlics'
export const Login =()=>dispatch=>{
    
    axios.post('http://restapi.adequateshop.com/api/authaccount/login',{email:"Developer5@gmail.com",password:123456}).then((response)=>{
        console.log(response);
        if (response.data.data ==null) {
            dispatch(loginfailed(response.data.message))
        }
    })
}