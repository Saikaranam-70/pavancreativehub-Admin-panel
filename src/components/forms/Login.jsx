
import React, { useState } from "react";
import { API } from "../../data/data";

const Login = ({resetPassword}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin= async(e)=>{
    e.preventDefault();

    try {
      const responce = await fetch(`${API}/admin/login`, {
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
      })
      const data = await responce.json();
      if(responce.ok){
        alert("Login success...!!!!!")
        setEmail("");
        setPassword("");
        console.log(data)
        localStorage.setItem('loginToken', data.token)
        localStorage.setItem('adminId', data.adminId)
        localStorage.setItem('adminName', data.adminName)
      }
      window.location.reload();
    } catch (error) {
      alert("Login failed...!!!!!1")
      console.log(error)
    }

  }
  return (
    <div className='loginSection'>
      <form className='register-form' onSubmit={handleLogin}>
      <h3>Admin Login</h3><br />
        <label>Email:</label><br />
        <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='enter your Email'/> <br />
        <label>Password:</label><br />
        <input type="password"  name='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='enter your email'/>
        <div className="submitBtn">
            <button type='submit'>Submit</button>
        </div>

        <div className="resetPassword">
          <h4 style={{color:'red', letterSpacing: '2px'}} onClick={resetPassword}>Reset Password</h4>
        </div>
      </form>
    </div>
  )
};

export default Login;
