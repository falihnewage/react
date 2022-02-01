

import axios from 'axios'
import { login, loginfailed } from './SigninSlics'
export const Login = (frmdata) => dispatch => {
    console.log('frm data are',frmdata);
    const user = {
        email: "Developer5@gmai.com",
        password: 123456
    }
    const jdata = JSON.stringify(user)
    axios.post('http://restapi.adequateshop.com/api/authaccount/login', jdata,{
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