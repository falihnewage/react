import {configureStore} from '@reduxjs/toolkit'
import DataReducer from '../../Components/Data/dataSlice'
import LoginReducer from '../../Components/Signin/SigninSlics'
import SignupReducer from '../../Components/Signup/SignupSlice'

 const Store = configureStore({
    reducer:{
        
        Data:DataReducer,
        Login:LoginReducer,
        Signup:SignupReducer
        
    }
})


export default Store