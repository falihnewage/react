import {configureStore} from '@reduxjs/toolkit'
import DataReducer from '../../Components/Data/dataSlice'
import LoginReducer from '../../Components/Signin/SigninSlics'

 const Store = configureStore({
    reducer:{
        
        Data:DataReducer,
        Login:LoginReducer
        
    }
})


export default Store