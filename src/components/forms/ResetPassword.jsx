import React, { useState } from 'react'
import { API } from '../../data/data';

const ResetPassword = () => {
    const [email, setEmail] = useState('');

    const resetPassword = async(e)=>{
        e.preventDefault();
        try {
            const responce = await fetch(`${API}/update/update-password`, {
                method: 'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({email})
            })
            const data = await responce.json();
            if(responce.ok){
                alert("password send to your email successfully")
                setEmail("")
            }
        } catch (error) {
            console.log(error)
            alert("failed....")
        }
    }
  return (
    <div className='loginSection'>
      <form className='register-form' onSubmit={resetPassword}>
      <h3>Request to password</h3><br />
        <label>Email:</label><br />
        <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email'/> <br />
        <div className="submitBtn">
            <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ResetPassword
