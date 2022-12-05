import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Login from './components/Login.js'
import Register from './components/Register'
import MyNav from './components/Navbar';



function App() {
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log(loggedInUser);
  }, []);

  // const serverIp = "http://20.102.97.28:8081";
  const serverIp = "http://localhost:8081";

  return (
    <BrowserRouter>
    <MyNav></MyNav>
      <Routes>
        <Route path="/login" element={<Login serverIp={serverIp}/>}/>
        <Route path="/register" element={<Register serverIp={serverIp}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
