import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import SignUp from './pages/Signup';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute'
import Login from './pages/Login';
import { useState } from 'react';
function App() {

  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return (    
    <div className='bg-richblack-900  min-h-screen'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <div className='flex flex-1 justify-center items-center text-white'>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path='/dashboard' element={<PrivateRoute isLoggedIn={isLoggedIn}><Dashboard /></PrivateRoute>}></Route>
      </Routes>
      </div>
     
    </div>
    
  );
}

export default App;
