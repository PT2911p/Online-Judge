import {React,useState,useEffect} from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Login from './pages/Login.jsx';
import Hero from './components/Hero';

function App() {
  const [user,setUser] = useState(null)

  useEffect(() => {
    const getUser = async()=>{
      fetch("http://localhost:5000/auth/login/success",{
        method: "GET",
        credentials: "include",
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }).then(response=>{
        if(response.status===200) return response.json();
        throw new Error("authentication has been failed!")
      }).then(resObject=>{
          setUser(resObject.user)
      }).catch(err=>{
        console.log(err);
      })
    }; 
    getUser();
  },[]);

console.log(user)

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={user ? <Hero /> : <Navigate to="/login" />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
