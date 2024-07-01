import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Register from '../components/forms/Register'
import Login from '../components/forms/Login'
import AddProgram from '../components/forms/AddProgram'
import AllPrograms from '../components/AllPrograms'
import ResetPassword from '../components/forms/ResetPassword'

const Landing = () => {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showLogOut, setShowLogOut] = useState(false);
    const [showAddprogram, setShowAddprogram] = useState(false);
    const [showAllProgram, setShowAllProgram] = useState(false);
    const [reset, setReset] = useState(false)
    useEffect(()=>{
        const loginToken = localStorage.getItem('loginToken');
        if(loginToken){
          setShowLogOut(true)
        }
      },[])
      const logOutHandler = ()=>{
        confirm("You Want to LogOut....???")
        localStorage.removeItem('loginToken');
        localStorage.removeItem('adminId');
        localStorage.removeItem('adminName');
        setShowLogOut(false)
      }
      const showregisterhandler = ()=>{
        setShowRegister(true);
        setShowLogin(false)
        setShowAddprogram(false)
        setShowAllProgram(false)
        setReset(false)
      }
      const resetPassword = ()=>{
        setShowRegister(false);
        setShowLogin(false)
        setShowAddprogram(false)
        setShowAllProgram(false)
        setReset(true)
      }
      const showLoginHandler = () =>{
        setShowRegister(false);
        setShowLogin(true)
        setShowAddprogram(false)
        setShowAllProgram(false)
        setReset(false)
        
      }
      const showprogramHandler =()=>{
        if(showLogOut){
            setShowRegister(false);
        setShowLogin(false)
        setShowAddprogram(true)
        setShowAllProgram(false)
        setReset(false)
        }else{
            alert("Please Login First....!!!")
            setShowRegister(false);
        setShowLogin(true)
        setShowAddprogram(false)
        setShowAllProgram(false)
        setReset(false)
        }
      }
      const showAllprogramHandler =()=>{
        if(showLogOut){
            setShowRegister(false);
        setShowLogin(false)
        setShowAddprogram(false)
        setShowAllProgram(true)
        setReset(false)
        }else{
            alert("Please Login First....!!!")
            setShowRegister(false);
        setShowLogin(true)
        setShowAddprogram(false)
        setShowAllProgram(false)
        setReset(false)
        }
      }
  return (
    <div>
      <Navbar showLogOut={showLogOut} logOutHandler={logOutHandler} showregisterhandler = {showregisterhandler} showLoginHandler={showLoginHandler}/>
      <div className="nav-side">
        <Sidebar showprogramHandler={showprogramHandler} showAllprogramHandler={showAllprogramHandler}/>
        {showRegister && <Register />}
        {showLogin && <Login resetPassword={resetPassword}/>}
        {showAddprogram && <AddProgram />}
        {showAllProgram && <AllPrograms />}
        {reset && <ResetPassword />}
      </div>
    </div>
  )
}

export default Landing
