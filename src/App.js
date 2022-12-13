import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Login from './components/Login.js'
import Register from './components/Register'
import MyNav from './components/Navbar';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import EmployeeDetails from './components/EmployeeDetails';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedin")==='true' || false);
  
  const handleLogout = () => {
    localStorage.setItem("loggedin", false);
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    localStorage.setItem("loggedin", true);
    setIsLoggedIn(true);
  };



  const serverIp = "http://20.102.97.28:8081";
  // const serverIp = "http://localhost:8081";
  
  if (isLoggedIn) {
    return (
      // <Login serverIp={serverIp} handleLogin={setIsLoggedIn}/>
      <BrowserRouter>
      <MyNav loggedIn={isLoggedIn} handleLogout={handleLogout}></MyNav>
        <Routes>
          <Route path="/employees" element={<EmployeeList serverIp={serverIp}/>}/>
          <Route path="/" element={<EmployeeList serverIp={serverIp}/>}/>
          <Route path="/addEmployee" element={<AddEmployee serverIp={serverIp}/>}/>
          <Route path="/updateEmployee" element={<UpdateEmployee serverIp={serverIp}/>}/>
          <Route path="/employeeDetails" element={<EmployeeDetails serverIp={serverIp}/>}/>
          <Route path="/register" element={<Register serverIp={serverIp} handleLogin={handleLogin}/>}/>
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login serverIp={serverIp} handleLogin={handleLogin}/>}/>
        <Route path="/register" element={<Register serverIp={serverIp} handleLogin={handleLogin}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
