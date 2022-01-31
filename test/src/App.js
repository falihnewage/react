
import './App.css';
import Adddata from './Components/AddData/Add-data';
import Data from './Components/Data/Data';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Main from './Components/Main/Main'
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Topnav from './Components/Navbar/Navbar';
import { useSelector } from 'react-redux';


function App() {
  const {isauth} =useSelector(state =>state.Login)
  return (
    <div className="App">
      {/* <Main/> */}

      <BrowserRouter>
       <Topnav/>
      <Routes>
        <Route path='/' element={isauth ? <Navigate to ='/data' /> : <Signin/>} />
        <Route path='/data' element={<Data/>} />
        <Route path='/add' element={<Adddata/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
