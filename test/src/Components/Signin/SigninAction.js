

import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { login, loginfailed } from './SigninSlics'

export const Login = (frmdata) => dispatch => {
    
    console.log('frm data are',frmdata);
    const user = {
        email: "Developer5@gmai.com",
        password: 123456
    }
    const jdata = JSON.stringify(user)
    axios.post(`${process.env.REACT_APP_BASE_API_KEY}api/authaccount/login`, jdata,{
        headers: {
            'content-type': 'application/json'
          }
    }).then((response) => {
        console.log(response);
        if (response.data.data == null) {
            dispatch(loginfailed(response.data.message))
        }else{
            dispatch(login(response.data.data))
            

        }
    })
}