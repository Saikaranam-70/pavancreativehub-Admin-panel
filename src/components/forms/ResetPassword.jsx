import React, { useState } from 'react'
import { API } from '../../data/data';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const resetPassword = async(e)=>{
        e.preventDefault();
        try {
            const responce = await fetch(`${API}/update/update-password`, {
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({email, newPassword})
            })
            const data = await responce.json();
            if(responce.ok){
                alert("password updated successfully")
                console.log(data);
            }
        } catch (error) {
            console.log(error)
            alert("failed....")
        }
    }
  return (
    <div className='loginSection'>
      <form className='register-form' onSubmit={resetPassword}>
      <h3>Admin Login</h3><br />
        <label>Email:</label><br />
        <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email'/> <br />
        <label>Password:</label><br />
        <input type="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} name='newPassword' placeholder='enter your email'/>
        <div className="submitBtn">
            <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ResetPassword
