import axios from "axios"


export const signup = (frmdata) => dispatch => {
    const jdata = JSON.stringify(frmdata)
    axios.post(`${process.env.REACT_APP_BASE_API_KEY}api/authaccount/registration`, jdata, {
        headers: {
            'content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Origin':"true",
            "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT"
        }
    }).then((response) => {
        console.log(response);
    })
}