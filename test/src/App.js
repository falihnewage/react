
import {lazy,Suspense} from 'react'
import Cookies from "js-cookie";
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Adddata from './Components/AddData/Add-data';
// import Data from './Components/Data/Data';
import Topnav from './Components/Navbar/Navbar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Singlepost from "./Components/Singlepost/Singlepost";
import Editpost from './Components/Editpost/Editpost';
const Data = lazy(() => import('./Components/Data/Data'));
const Adddata = lazy(() => import('./Components/AddData/Add-data'));

function App() {
  const {isauth} =useSelector(state =>state.Login)
  return (
    <div className="App">
      {/* <Main/> */}

      <BrowserRouter>
       <Topnav/>
      <Routes>
        <Route path='/' element={ isauth||Cookies.get('token') ? <Suspense  fallback='Loading' >  <Data/> </Suspense> : <Signin/>} />
        <Route path='/data' element={<Data/>} />
         <Route element={<PrivateRoute/>}>
        <Route path='/add' element={ <Suspense fallback='Loading ... ' ><Adddata/></Suspense> } />
        <Route path='/details/:id' element={<Singlepost/>} />
        <Route path='/edit/:id' element={<Editpost/>} />
        </Route>
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
