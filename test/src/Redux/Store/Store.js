import {configureStore} from '@reduxjs/toolkit'
import MainReducer from "../../Components/Main/MainSlice";
import DataReducer from '../../Components/Data/dataSlice'

 const Store = configureStore({
    reducer:{
        Main:MainReducer,
        Data:DataReducer
        
    }
})


export default Store