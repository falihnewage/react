
import Cookies from "js-cookie";
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Adddata from './Components/AddData/Add-data';
import Data from './Components/Data/Data';
import Topnav from './Components/Navbar/Navbar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Singlepost from "./Components/Singlepost/Singlepost";


function App() {
  const {isauth} =useSelector(state =>state.Login)
  return (
    <div className="App">
      {/* <Main/> */}

      <BrowserRouter>
       <Topnav/>
      <Routes>
        <Route path='/' element={ isauth||Cookies.get('token') ? <Data/>: <Signin/>} />
        <Route path='/data' element={<Data/>} />
         <Route element={<PrivateRoute/>}>
        <Route path='/add' element={<Adddata/>} />
        <Route path='/details/:id' element={<Singlepost/>} />
        </Route>
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
